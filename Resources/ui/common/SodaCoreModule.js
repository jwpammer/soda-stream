var xAppToken = 'P1fAvDdVLQ8qlmftB8Fuy5C05';
var contentType = "application/json; charset=utf-8";
var dataFormat = 'json'

var QueryFilterOperations = {
	AND: 'AND',
	OR: 'OR'	
};
exports.QueryFilterOperations = QueryFilterOperations;

var RowFilterOperators = {
	IS_BLANK: 'IS_BLANK',
	IS_NOT_BLANK: 'IS_NOT_BLANK',
	EQUALS: 'EQUALS',
	NOT_EQUALS: 'NOT_EQUALS',
	STARTS_WITH: 'STARTS_WITH',
	CONTAINS: 'CONTAINS',
	NOT_CONTAINS: 'NOT_CONTAINS',
	LESS_THAN: 'LESS_THAN',
	LESS_THAN_OR_EQUALS: 'LESS_THAN_OR_EQUALS',
	GREATER_THAN: 'GREATER_THAN',
	GREATER_THAN_OR_EQUALS: 'GREATER_THAN_OR_EQUALS',
	BETWEEN: 'BETWEEN',
	WITHIN_CIRCLE: 'WITHIN_CIRCLE'
};
exports.RowFilterOperators = RowFilterOperators;

/* Example WITHIN_CIRCLE query filter.
{
  "originalViewId": "dfnk-7re6",
  "name": "not used but must be specified",
  "query": {
    "filterCondition": {
      "type": "operator",
      "value": "AND",
      "children": [
        {
          "type": "operator",
          "value": "NOT_EQUALS",
          "children": [
            {
              "columnId": 18740457,
              "type": "column"
            },
            {
              "type": "literal",
              "value": "abc"
            }
          ]
        },
        {
          "type": "operator",
          "value": "EQUALS",
          "children": [
            {
              "columnId": 18740458,
              "type": "column"
            },
            {
              "type": "literal",
              "value": "2012-09-10T00:00:00"
            }
          ]
        },
        {
          "type": "operator",
          "value": "GREATER_THAN",
          "children": [
            {
              "columnId": 18740466,
              "type": "column"
            },
            {
              "type": "literal",
              "value": "1"
            }
          ]
        },
        {
          "type": "operator",
          "value": "WITHIN_CIRCLE",
          "children": [
            {
              "columnId": 18740473,
              "type": "column"
            },
            {
              "type": "literal",
              "value": "41.8500"
            },
            {
              "type": "literal",
              "value": "87.6500"
            },
            {
              "type": "literal",
              "value": "1000"
            }
          ]
        }
      ]
    }
  }
}
*/

var FileHelper = require('ui/common/FileHelperModule')

exports.fetchViews = function(repository, onloadCallback, onerrorCallback) {
	var resource = 'views';
	var url = buildUrl(repository, resource, null, null, null);
	
	if (AppProps.simulate.xhrResponse) {
		Ti.include('simulation_data/soda/views.js');
		onloadCallback(AppProps.simulate.data.soda.views);
	} else {
		send(url, "GET", null, onloadCallback, onerrorCallback);
	}
};

exports.fetchViewDetails = function(repository, viewId, onloadCallback, onerrorCallback) {
	var resource = 'views/'+viewId;
	var url = buildUrl(repository, resource, null, null, null);

	if (AppProps.simulate.xhrResponse) {
		Ti.include('simulation_data/soda/view_details/'+AppProps.simulate.view+'.js');
		onloadCallback(AppProps.simulate.data.soda.view_details);
	} else {
		send(url, "GET", null, onloadCallback, onerrorCallback);
	}
};

exports.fetchViewRows = function(repository, viewId, start, length, filterFields, onloadCallback, onerrorCallback) {
	var resource = 'views/INLINE/rows';
	var method = 'getRows'
	var url = buildUrl(repository, resource, method, start, length);
	
	var queryFilter = createQueryFilter(viewId, QueryFilterOperations.AND, filterFields);
	Ti.API.info('View rows query filter: ' + JSON.stringify(queryFilter));
			
	if (AppProps.simulate.xhrResponse) {
		Ti.include('simulation_data/soda/view_rows/'+AppProps.simulate.view+'.js');
		onloadCallback(AppProps.simulate.data.soda.view_rows);
	} else {
		// TODO: Test this.
		send(url, 'POST', JSON.stringify(queryFilter), onloadCallback, onerrorCallback);
	}
};

function createQueryFilter(viewId, queryFilterOperation, filterFields) {
	var queryFilter = {
		originalViewId: viewId,
  	name: 'not used but must be specified',
  	query: {
    	filterCondition: {
    		type: 'operator',
    		value: queryFilterOperation,
    		children: []
    	}
    }
	};
	
	for (var i=0; i<filterFields.length; i++) {
		var filterField = filterFields[i];
		var filterCondition;

		// Create filter condition based on operator.
		if (filterField.operator === RowFilterOperators.BETWEEN) {
			// TODO: Implement between filter.
		} else if (filterField.operator === RowFilterOperators.WITHIN_CIRCLE) {
			// TODO: Implement within circle filter.
		} else {
			filterCondition = createBasicFilterCondition(filterField.operator, filterField.columnId, filterField.value);	
		}
		queryFilter.query.filterCondition.children.push(filterCondition);
	}
	
	// Ti.API.info("Query filter: " + JSON.stringify(queryFilter));
	return queryFilter;	
};
exports.createQueryFilter = createQueryFilter;

function createBasicFilterCondition(rowFilterOperator, columnId, filterValue) {
	var filterCondition = {
		type: 'operator',
		value: rowFilterOperator,
		children: [
			{columnId: columnId, type: 'column'},
			{type: 'literal', value: filterValue}
		]
	};
	// Ti.API.info("Basic filter condition: " + JSON.stringify(filterCondition));
	return filterCondition;
};
exports.createBasicFilterCondition = createBasicFilterCondition;

function getColumnName(columnId, viewColumns) {
	for (var key in viewColumns) {
		var viewColumn = viewColumns[key];
		if (viewColumn.id == columnId) {
			return viewColumn.name;
		}
	}	
	return columnId;
};
exports.getColumnName = getColumnName;

function getColumnId(fieldName, viewColumns) {
	for (var key in viewColumns) {
		var viewColumn = viewColumns[key];
		if (viewColumn.fieldName == fieldName) {
			return viewColumn.id;
		}
	}	
	return null;
};
exports.getColumnId = getColumnId;

function getRowValue(columnId, row) {
	for (var key in row) {
		if (key == columnId) {
			return row[key];
		}
	}
	return null;
};
exports.getRowValue = getRowValue;

function printViewColumnFieldNames(viewColumns) {
	for (var key in viewColumns) {
		var viewColumn = viewColumns[key];
		Ti.API.info(viewColumn.name+": "+viewColumn.fieldName);
	}
};
exports.printViewColumnFieldNames = printViewColumnFieldNames;

function buildUrl(repository, resource, method, start, length) {
	var url = 'http://'+repository+'/api/'+resource+'.'+dataFormat+'?x=x'
	
	if (method != null) { url = url + '&method=' + method; }
	if (start != null)  { url = url + '&start='  + start;	}
	if (length != null) {	url = url + '&length=' + length; }
	
	return url;
};

function send(url, method, payload, onloadCallback, onerrorCallback) {
	Ti.API.info(url);
	
	var xhr = Ti.Network.createHTTPClient({
		onload: function(event) {
			// Ti.API.debug(this.responseText);
			if (AppProps.simulate.captureXhrResponseAsFile) {
				var fileName = url.slice(url.lastIndexOf('/')+1, url.indexOf('?'));
				FileHelper.writeToFile(fileName, this.responseText)
			}			
			if (onloadCallback) {
				onloadCallback(JSON.parse(this.responseText));
			}
		},
		onerror: function(event) {
			Ti.API.error(event.error);		
			if (onerrorCallback) {
				onerrorCallback();
			}	
		},
		timeout:30000
	});
 
	xhr.open(method, url);
	xhr.setRequestHeader("Content-Type", contentType);
	xhr.setRequestHeader("X-App-Token", xAppToken);
	if (payload) {
		xhr.send(payload);
	} else {
		xhr.send();
	}
};