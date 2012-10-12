exports = function(repository, viewId) {
	var self = UiFactory.createWindow(L('win_title_soda_view_details'));
	self.layout = "vertical";

	function sodaOnloadCallback(viewDetails) {		
	  var lblViewId = Ti.UI.createLabel({
		  text: 'View ID: ' + viewDetails.id,
		  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
		  width: '100%'
		});
	  self.add(lblViewId);
	  
	  var lblName = Ti.UI.createLabel({
		  text: 'Name: ' + viewDetails.name,
		  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
		  width: '100%'
		});
	  self.add(lblName);

	  var lblCategory = Ti.UI.createLabel({
	  	text: 'Category: ' + viewDetails.category,
	  	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
	  	width: '100%'
	  });
	  self.add(lblCategory);

		var txaDescription = Ti.UI.createTextArea({
			height: 160,
			top: 10,
			value: viewDetails.description
		});
		self.add(txaDescription);

		var viewDetailRowData = [
			{
				id: 'view_column_details',
				title:'Columns Details',  
				viewColumns: viewDetails.columns, 
				hasChild:true
			},
			{
				id: 'view_column_filters',
				title: 'Column Filters',
				viewColumns: viewDetails.columns,
				hasChild:true
			}
		];
		
		var tblViewDetails = UiFactory.createTableView(viewDetailRowData);
		
		tblViewDetails.addEventListener('click', 
			function(event) {
				var id = event.rowData.id;
				var win;
				
				if (id == 'view_column_details') {
					var SodaViewColumnsWindow = require('ui/handheld/SodaViewColumnsWindow');
					var viewColumns = event.rowData.viewColumns;
					win = new SodaViewColumnsWindow(viewColumns);				
				} else if (id == 'view_column_filters') {
					var SodaViewColumnFiltersWindow = require('ui/handheld/SodaViewColumnFiltersWindow');
					var viewColumns = event.rowData.viewColumns;
					win = new SodaViewColumnFiltersWindow(repository, viewId, viewColumns);
				}
				win.containingTab = self.containingTab;
				self.containingTab.open(win);		
			}
		);	
		
		self.add(tblViewDetails);	

		// Helper function to automatically select a particular row. Useful for simulating.
		self.selectRow = function() {
			 tblViewDetails.fireEvent('click', {rowData: viewDetailRowData[1]});
		}	
				
		// Simulate user row selection.
		if (AppProps.simulate.user) {
			setTimeout(function() { self.selectRow(); }, AppProps.simulate.userDelayTime);
		}	
	}
	
	SodaCore.fetchViewDetails(repository, viewId, sodaOnloadCallback, null);		
	
	return self;
};

