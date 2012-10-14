/** SODA repositories window. Lists all defined repositories. **/

exports = function() {
	var self = UiFactory.createWindow(L('win_title_soda_repositories'));
	self.layout = "vertical";
	
	// Add repositories here.
	var repositoryRowData = [
		{title:'City of Chicago', repository: 'data.cityofchicago.org', hasChild:true}
	];

	var tblRepositories = UiFactory.createTableView(repositoryRowData);
	
	tblRepositories.addEventListener('click', 
		function(event) {
			var repository = event.rowData.repository;
			Ti.API.info("Repository: " + repository);
			var SodaViewsWindow = require('ui/handheld/SodaViewsWindow');
			var win = new SodaViewsWindow(repository);
			win.containingTab = self.containingTab;
			self.containingTab.open(win);
		}
	);	
	
	self.add(tblRepositories);

	// Helper function to automatically select a particular row. Useful for simulating.
	self.selectRow = function() {
		tblRepositories.fireEvent('click', {rowData: repositoryRowData[0]});
	}
	
	// Simulate user row selection.
	if (AppProps.simulate.user) {
		setTimeout(function() { self.selectRow(); }, AppProps.simulate.userDelayTime);
	}
		
	return self;
}