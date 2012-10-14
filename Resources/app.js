if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}

// Global requires.
UiFactory = require('ui/common/UiFactoryModule');
SodaCore = require('ui/common/SodaCoreModule');
Forms = require('lib/forms');

// Global application properties.
var AppProps = {
	// Place holder property for SODA metadata
	sodaMetadata: {
		crimeMaps: {},										// Place holder property for Crime Map SODA metadata
		foodInspections: {}								// Place holder property for Food Inspections SODA metadata
	},
	// Provides a method to simulate user interactions and XHR responses for offline mode and expedited testing
	simulate: {
		user: false,											// Simulate user interactions
		userDelayTime: 300,								// Delay between simulated user interactions
		// view: 'dfnk-7re6',							// Simulate Crime Map view ID
		view: '4ijn-s7e5',								// Simulate Food Inspections view ID
		xhrResponse: false,								// Simulate XHR responses - see simulation_data folder
		captureXhrResponseAsFile: false,  // Capture a XHR response, then turn it into simulation data
		data: {														// Place holder property used for simulation data
			soda: {}												// Place holder property used for SODA simulation data
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
