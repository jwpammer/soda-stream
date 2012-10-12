exports = function(repository, viewId, viewColumns) {
	var self = UiFactory.createWindow(L('win_title_soda_view_columns'));
	self.layout = 'vertical';
	
	var lblViewColumns = Ti.UI.createLabel({
		text: "View Columns"
	});
	self.add(lblViewColumns);
	
	var fldViewColumns = [];
	for (var i=0; i<viewColumns.length; i++) {
		var item = viewColumns[i];
		Ti.API.info("Processing Column - ID: " + item.id + "; Name: " + item.name);
		
		var field = {
			id: item.id,
			title: item.name,
			type: 'text'
		}
		
		// Simulate user entered values.
		if (AppProps.simulate.user) {
			field.value = 'some value...';
		}
		
	  fldViewColumns.push(field);
	}
	fldViewColumns.push({id: 'submit', title: 'Fetch Rows', type: 'submit'});

	var frmViewColumns = Forms.createForm({
		style: Forms.STYLE_HINT,
		fields: fldViewColumns
	});	

	frmViewColumns.addEventListener('submit', 
		function(event) {
			var SodaViewRowsWindow = require('ui/handheld/SodaViewRowsWindow');
			var win = new SodaViewRowsWindow(repository, viewId, viewColumns, event.values);
			win.containingTab = self.containingTab;
			self.containingTab.open(win);				
		}
	);

	// Helper function to automatically submit the form. Useful for simulating.
	self.submitForm = function() {
		var values = {};
		values['column1'] = 'value1';
		values['column2'] = 'value2'
		frmViewColumns.fireEvent('submit', {values: values});
	}	
	
	self.add(frmViewColumns);	

	// Simulate user form submission.
	if (AppProps.simulate.user) {
		setTimeout(function() { self.submitForm(); }, AppProps.simulate.userDelayTime);
	}	
					
	return self;
}