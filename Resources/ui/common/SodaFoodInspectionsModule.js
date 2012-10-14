/** Facade layer built on top of the SODA core module that adds specific functionality for the Food Inspections view. **/

// Column field names for Food Inspections
AppProps.sodaMetadata.foodInspections = {
	columnFieldNames: {
		INSPECTION_ID: 'inspection_id',
		DBA_NAME: 'dba_name',
		AKA_NAME: 'aka_name',
		LICENSE_NUMBER: 'license_',
		FACILITY_TYPE: 'facility_type',
		RISK: 'risk',
		ADDRESS: 'address',
		CITY: 'city',
		STATE: 'state',
		ZIP: 'zip',
		INSPECTION_DATE: 'inspection_date',
		INSPECTION_TYPE: 'inspection_type',
		RESULTS: 'results',
		VIOLATIONS: 'violations',
		LATITUDE: 'latitude',
		LONGITUDE: 'longitude',
		LOCATION: 'location',
	}
};