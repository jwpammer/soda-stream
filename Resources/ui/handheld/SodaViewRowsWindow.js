exports = function(repository, viewId, viewColumns, submittedFilters) {
	var self = UiFactory.createWindow(L('win_title_soda_view_rows'));
	self.layout = 'vertical';
	
	function sodaOnloadCallback(rows) {
	  var rowRowData = [];
		
		for (var i=0; i<rows.length; i++) {
			var rowItem = rows[i];
			rowRowData.push(
				Ti.UI.createTableViewRow({
					id: rowItem.id,
			   	title: rowItem.id
		  	})
		  );
		}
		
		var tblRows = UiFactory.createTableView(rowRowData);

		tblRows.addEventListener('click', 
			function(event) {
				var id = event.id;
				var SodaViewRowDetailsWindow = require('ui/handheld/SodaViewRowDetailsWindow');
				var win = new SodaViewRowDetailsWindow(rows[id], viewColumns);
				win.containingTab = self.containingTab;
				self.containingTab.open(win);
			}
		);	
		
		self.add(tblRows);

		// Helper function to automatically select a particular row. Useful for simulating.
		self.selectRow = function() {
			 tblRows.fireEvent('click', {id: 0});
		}	
		
		// Simulate user row selection.
		if (AppProps.simulate.user) {
			setTimeout(function() { self.selectRow(); }, AppProps.simulate.userDelayTime);
		}			
	}
	
	var start = 0;
	var length = 10;
	
	var filterFields = [];
	
	for (var columnId in submittedFilters) {
		var filterValue = submittedFilters[columnId];
		if (filterValue !== "") {
			// Ti.API.info('Column ID: ' + columnId + '; Filter value: ' + filterValue);
			var filterField = {
				operator: SodaCore.RowFilterOperators.EQUALS,
				columnId: columnId,
				value: filterValue
			};
			filterFields.push(filterField);
		}
	}
	
	SodaCore.fetchViewRows(repository, viewId, start, length, filterFields, sodaOnloadCallback, null);		
	
	return self;
};

