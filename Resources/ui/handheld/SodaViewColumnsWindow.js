/** SODA view column window. Lists all columns for the selected view. **/

exports = function(columns) {
	var self = UiFactory.createWindow(L('win_title_soda_view_column_details'));
	self.layout = "vertical";	
	
	var columnRowData = [];
	
	for (var key in columns) {
		var columnItem = columns[key];
		columnRowData.push(
			Ti.UI.createTableViewRow({
				title: columnItem.name + ' / ' + columnItem.id,
				columnDetail: columnItem,
				hasChild:true
			})
		);
	}

	var tblColumns = UiFactory.createTableView(columnRowData);

	tblColumns.addEventListener('click', 
		function(event) {
			var SodaViewColumnDetailsWindow = require('ui/handheld/SodaViewColumnDetailsWindow');
			var columnDetail = event.rowData.columnDetail;
			var win = new SodaViewColumnDetailsWindow(columnDetail);			
			win.containingTab = self.containingTab;
			self.containingTab.open(win);		
		}
	);	
			
	self.add(tblColumns)

	// Helper function to automatically select a particular row. Useful for simulating.
	self.selectRow = function() {
		 tblColumns.fireEvent('click', {rowData: columnRowData[0]});
	}	
			
	// Simulate user row selection.
	if (AppProps.simulate.user) {
		setTimeout(function() { self.selectRow(); }, AppProps.simulate.userDelayTime);
	}	
		
	return self;
};

