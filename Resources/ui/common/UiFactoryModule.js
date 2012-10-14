/** UI factory to allow customization of UI elements - place holder at the moment... **/

exports.createWindow = function(title) {
	var self = Ti.UI.createWindow({
		title: title,
		backgroundColor: 'white'
	});
	return self;
};

exports.createTabGroup = function() {
	var self = Ti.UI.createTabGroup();
	return self;	
};

exports.createTableView = function(rowData) {
	var self = Titanium.UI.createTableView({
		data:rowData
	});
	return self;
};

exports.createButton = function(title) {
	var self = Ti.UI.createButton({
		title: title
	});
	return self;
};