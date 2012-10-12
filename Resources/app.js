if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}

// Global requires.
UiFactory = require('ui/common/UiFactoryModule');
SodaCore = require('ui/common/SodaCoreModule');
Forms = require('lib/forms');

// Global application properties.
var AppProps = {
	debugMode: true,
	sodaMetadata: {
		crimeData: {}
	},
	simulate: {
		user: true,
		userDelayTime: 300,
		// view: 'dfnk-7re6',
		view: '4ijn-s7e5',
		xhrResponse: true,
		captureXhrResponseAsFile: false,
		data: {
			soda: {}
		}
	}
};

(function() {
	var osname = Ti.Platform.osname;
	var version = Ti.Platform.version;
	var height = Ti.Platform.displayCaps.platformHeight;
	var width = Ti.Platform.displayCaps.platformWidth;
	var isTablet = osname === 'ipad' || (osname === 'android' && (width > 899 || height > 899));
	
	var Window = require('ui/handheld/SodaRepositoriesWindow');

	var ApplicationTabGroup = require('ui/common/ApplicationTabGroup');
	new ApplicationTabGroup(Window).open();
})();
