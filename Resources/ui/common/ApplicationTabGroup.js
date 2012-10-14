/** Place holder for a tabbed application. **/

exports = function ApplicationTabGroup(Window) {
	var self = UiFactory.createTabGroup();
	
	var tabSoda = Ti.UI.createTab({
		title: L('tab_title_soda'),
		icon: '',
		window: new Window()
	});
	
	tabSoda.window.containingTab = tabSoda;
	self.addTab(tabSoda);
	
	var tabX = Ti.UI.createTab({
		title: L('x'),
		icon: '',
		window: UiFactory.createWindow(L('x'))
	});
	
	tabX.window.containingTab = tabX;
	self.addTab(tabX);
	
	return self;
};
