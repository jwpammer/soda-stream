exports = function(columnDetail) {
	var self = UiFactory.createWindow(L('win_title_soda_view_column_details'));
	self.layout = "vertical";	
	
	var columnDetailRowData = [];
	
	for (var key in columnDetail) {
		var columnDetailItem;
		
		if (key === 'cachedContents') {
			if (columnDetail[key].top) {
				columnDetailItem = Ti.UI.createTableViewRow({
					id: 'top_items',
					title: 'Top Items',
					topItems: columnDetail[key].top,
					hasChild: true
				});
			}
		} else {
			columnDetailItem = Ti.UI.createTableViewRow({
				id: key,
				title: key + ' / ' + columnDetail[key].toString()
			});
		}
		
		columnDetailRowData.push(columnDetailItem);
	}

	var tblColumnDetails = UiFactory.createTableView(columnDetailRowData);

	tblColumnDetails.addEventListener('click', 
		function(event) {
			if (event.rowData.id === 'top_items') {
				var SodaViewColumnDetailTopItemsWindow = require('ui/handheld/SodaViewColumnDetailTopItemsWindow');
				var topItems = event.rowData.topItems;
				var win = new SodaViewColumnDetailTopItemsWindow(topItems);			
				win.containingTab = self.containingTab;
				self.containingTab.open(win);		
			}
		}
	);	
		
	self.add(tblColumnDetails)
				
	return self;
};

