/** SODA view row details window. Lists all the details for the selected row. **/

exports = function(rowDetail, viewColumns) {
	var self = UiFactory.createWindow(L('win_title_soda_view_row_details'));
	self.layout = "vertical";	
	
	var rowDetailRowData = [];
	
	for (var key in rowDetail) {
		rowDetailRowData.push(
			Ti.UI.createTableViewRow({
				title: SodaCore.decodeColumnName(key, viewColumns) + ' / ' + rowDetail[key].toString()
			})
		);
	}

	var tblViewRowDetails = UiFactory.createTableView(rowDetailRowData);
	
	self.add(tblViewRowDetails)
	
	return self;
};

