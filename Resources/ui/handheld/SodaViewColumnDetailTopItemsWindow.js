exports = function(topItems) {
	var self = UiFactory.createWindow(L('win_title_soda_view_column_detail_topItems'));
	self.layout = "vertical";	
	
	var topItemRowData = [];
	
	for (var key in topItems) {
		var topItem = topItems[key];
		topItemRowData.push(
			Ti.UI.createTableViewRow({
				title: topItem.count + ' / ' + topItem.item
			})
		);
	}

	var tblTopItems = UiFactory.createTableView(topItemRowData);
	
	self.add(tblTopItems)
	
	return self;
};

