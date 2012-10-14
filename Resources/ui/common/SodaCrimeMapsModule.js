/** Facade layer built on top of the SODA core module that adds specific functionality for the Crime Map view. **/

// Column field names for Crime Maps
AppProps.sodaMetadata.crimeMaps = {
	columnFieldNames: {
		CASE_NUMBER: 'case_',
		DATE_OR_OCCURRENCE: 'date_of_occurrence',
		BLOCK: {
			name: 'block',
			IUCR: '_iucr',
			PRIMARY_DESCRIPTION: '_primary_decsription',
			SECONDARY_DESCRIPTION: '_secondary_description',
			LOCATION_DESCRIPTION: '_location_description',
		},
		ARREST: 'arrest',
		DOMESTIC: 'domestic',
		BEAT: 'beat',
		WARD: 'ward',
		FBI_CD: 'fbi_cd',
		X_COORDINATE: 'x_coordinate',
		Y_COORDINATE: 'y_coordinate',
		LATITUDE: 'latitude',
		LONGITUDE: 'longitude',
		LOCATION: 'location'	
	}
};
