/** SODA views window. Lists all views for the selected repository. **/

exports = function(repository) {
	var self = UiFactory.createWindow(L('win_title_soda_views'));
	self.layout = "vertical";	

	function sodaOnloadCallback(views) {
	  var viewRowData = [];
	  
		for (var i=0; i<views.length; i++) {
			var viewItem = views[i];
			viewRowData.push(
				Ti.UI.createTableViewRow({
					viewId: viewItem.id,
			   	title: viewItem.name,
			   	description: viewItem.description,
			   	averageRating: viewItem.averageRating,
			   	hasChild: true
			  })
		  );
		}
		
		var tblViews = UiFactory.createTableView(viewRowData);
		
		tblViews.addEventListener('click', 
			function(event) {
				var SodaViewDetailsWindow = require('ui/handheld/SodaViewDetailsWindow');
				var win = new SodaViewDetailsWindow(repository, event.rowData.viewId);
				win.containingTab = self.containingTab;
				self.containingTab.open(win);				
			}
		);
		
		self.add(tblViews);

		// Helper function to automatically select a particular row. Useful for simulating.
		self.selectRow = function() {
			tblViews.fireEvent('click', {rowData: viewRowData[0]});
		};
				
		// Simulate user row selection.
		if (AppProps.simulate.user) {
			setTimeout(function() { self.selectRow(); }, AppProps.simulate.userDelayTime);
		}
	}
	
	SodaCore.fetchViews(repository, sodaOnloadCallback, null);		
	
	return self;
};

