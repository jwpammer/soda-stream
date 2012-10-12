// Simulation data: View Details - Crime Map
AppProps.simulate.data.soda.view_details = {
  "id" : "dfnk-7re6",
  "name" : "Crimes - Map",
  "attribution" : "Chicago Police Department",
  "attributionLink" : "http://www.chicagopolice.org/",
  "averageRating" : 0,
  "category" : "Public Safety",
  "createdAt" : 1317377230,
  "description" : "This dataset reflects reported incidents of crime that have occurred in the City of Chicago over the past year, minus the most recent seven days of data. Data is extracted from the Chicago Police Department's CLEAR (Citizen Law Enforcement Analysis and Reporting) system. In order to protect the privacy of crime victims, addresses are shown at the block level only and specific locations are not identified. Should you have questions about this dataset, you may contact the Research & Development Division of the Chicago Police Department at 312.745.6071 or RandD@chicagopolice.org.\r\nDisclaimer: These crimes may be based upon preliminary information supplied to the Police Department by the reporting parties that have not been verified. The preliminary crime classifications may be changed at a later date based upon additional investigation and there is always the possibility of mechanical or human error. Therefore, the Chicago Police Department does not guarantee (either expressed or implied) the accuracy, completeness, timeliness, or correct sequencing of the information and the information should not be used for comparison purposes over time. The Chicago Police Department will not be responsible for any error or omission, or for the use of, or the results obtained from the use of this information. All data visualizations on maps should be considered approximate and attempts to derive specific addresses are strictly prohibited. \r\n\r\nThe Chicago Police Department is not responsible for the content of any off-site pages that are referenced by or that reference this web page other than an official City of Chicago or Chicago Police Department web page. The user specifically acknowledges that the Chicago Police Department is not responsible for any defamatory, offensive, misleading, or illegal conduct of other users, links, or third parties and that the risk of injury from the foregoing rests entirely with the user. Any use of the information for commercial purposes is strictly prohibited. The unauthorized use of the words \"Chicago Police Department,\" \"Chicago Police,\" or any colorable imitation of these words or the unauthorized use of the Chicago Police Department logo is unlawful. This web page does not, in any way, authorize such use.\r\nData is updated daily.",
  "displayType" : "map",
  "downloadCount" : 672,
  "moderationStatus" : true,
  "numberOfComments" : 0,
  "oid" : 1124300,
  "publicationAppendEnabled" : false,
  "publicationDate" : 1348659243,
  "publicationGroup" : 226791,
  "publicationStage" : "published",
  "rowsUpdatedAt" : 1348659179,
  "rowsUpdatedBy" : "scy9-9wg4",
  "signed" : false,
  "tableId" : 435814,
  "totalTimesRated" : 0,
  "viewCount" : 62404,
  "viewLastModified" : 1317745490,
  "viewType" : "tabular",
  "columns" : [ {
    "id" : 18867036,
    "name" : "CASE#",
    "dataTypeName" : "text",
    "fieldName" : "case_",
    "position" : 1,
    "renderTypeName" : "text",
    "tableColumnId" : 1456782,
    "width" : 86,
    "format" : {
      "aggregate" : "count",
      "align" : "left"
    }
  }, {
    "id" : 18867037,
    "name" : "DATE  OF OCCURRENCE",
    "dataTypeName" : "calendar_date",
    "description" : "Date of Occurrence ",
    "fieldName" : "date_of_occurrence",
    "position" : 2,
    "renderTypeName" : "calendar_date",
    "tableColumnId" : 1518302,
    "width" : 190,
    "format" : {
      "align" : "left"
    }
  }, {
    "id" : 18867038,
    "name" : "BLOCK",
    "dataTypeName" : "text",
    "description" : "Block numbers are provided in lieu of  exact street addresses",
    "fieldName" : "block",
    "position" : 3,
    "renderTypeName" : "text",
    "tableColumnId" : 1456784,
    "width" : 244,
    "format" : {
      "align" : "left"
    }
  }, {
    "id" : 18867039,
    "name" : " IUCR",
    "dataTypeName" : "text",
    "description" : "Illinois Uniform Crime Reporting Code",
    "fieldName" : "_iucr",
    "position" : 4,
    "renderTypeName" : "text",
    "tableColumnId" : 1457633,
    "width" : 70,
    "format" : {
      "precisionStyle" : "standard",
      "align" : "right",
      "noCommas" : "false"
    }
  }, {
    "id" : 18867040,
    "name" : " PRIMARY DESCRIPTION",
    "dataTypeName" : "text",
    "fieldName" : "_primary_decsription",
    "position" : 5,
    "renderTypeName" : "text",
    "tableColumnId" : 1456786,
    "width" : 192,
    "format" : {
      "align" : "left"
    }
  }, {
    "id" : 18867041,
    "name" : " SECONDARY DESCRIPTION",
    "dataTypeName" : "text",
    "fieldName" : "_secondary_description",
    "position" : 6,
    "renderTypeName" : "text",
    "tableColumnId" : 1456787,
    "width" : 227,
    "format" : {
      "align" : "left"
    }
  }, {
    "id" : 18867042,
    "name" : " LOCATION DESCRIPTION",
    "dataTypeName" : "text",
    "fieldName" : "_location_description",
    "position" : 7,
    "renderTypeName" : "text",
    "tableColumnId" : 1456788,
    "width" : 222,
    "format" : {
      "align" : "left"
    }
  }, {
    "id" : 18867043,
    "name" : "ARREST",
    "dataTypeName" : "html",
    "fieldName" : "arrest",
    "position" : 8,
    "renderTypeName" : "html",
    "tableColumnId" : 1456795,
    "width" : 50,
    "format" : {
      "align" : "center"
    }
  }, {
    "id" : 18867044,
    "name" : "DOMESTIC",
    "dataTypeName" : "text",
    "fieldName" : "domestic",
    "position" : 9,
    "renderTypeName" : "text",
    "tableColumnId" : 1456796,
    "width" : 70,
    "format" : {
      "align" : "center"
    }
  }, {
    "id" : 18867045,
    "name" : "BEAT",
    "dataTypeName" : "number",
    "fieldName" : "beat",
    "position" : 10,
    "renderTypeName" : "number",
    "tableColumnId" : 1456791,
    "width" : 50,
    "format" : {
      "precisionStyle" : "standard",
      "align" : "right",
      "noCommas" : "true"
    }
  }, {
    "id" : 18867046,
    "name" : "WARD",
    "dataTypeName" : "number",
    "fieldName" : "ward",
    "position" : 11,
    "renderTypeName" : "number",
    "tableColumnId" : 1456792,
    "width" : 50,
    "format" : {
    }
  }, {
    "id" : 18867047,
    "name" : "FBI CD",
    "dataTypeName" : "text",
    "description" : "FBI Code",
    "fieldName" : "fbi_cd",
    "position" : 12,
    "renderTypeName" : "text",
    "tableColumnId" : 1456793,
    "width" : 57,
    "format" : {
      "align" : "right"
    }
  }, {
    "id" : 18867048,
    "name" : "X COORDINATE",
    "dataTypeName" : "text",
    "fieldName" : "x_coordinate",
    "position" : 13,
    "renderTypeName" : "text",
    "tableColumnId" : 1471208,
    "width" : 100,
    "format" : {
    }
  }, {
    "id" : 18867049,
    "name" : "Y COORDINATE",
    "dataTypeName" : "text",
    "fieldName" : "y_coordinate",
    "position" : 14,
    "renderTypeName" : "text",
    "tableColumnId" : 1471209,
    "width" : 142,
    "format" : {
    }
  }, {
    "id" : 18867050,
    "name" : "LATITUDE",
    "dataTypeName" : "number",
    "fieldName" : "latitude",
    "position" : 15,
    "renderTypeName" : "number",
    "tableColumnId" : 1475220,
    "width" : 100,
    "format" : {
      "precisionStyle" : "standard",
      "align" : "right",
      "noCommas" : "true"
    }
  }, {
    "id" : 18867051,
    "name" : "LONGITUDE",
    "dataTypeName" : "number",
    "fieldName" : "longitude",
    "position" : 16,
    "renderTypeName" : "number",
    "tableColumnId" : 1475221,
    "width" : 121,
    "format" : {
      "precisionStyle" : "standard",
      "align" : "right",
      "noCommas" : "true"
    }
  }, {
    "id" : 18867052,
    "name" : "LOCATION",
    "dataTypeName" : "location",
    "fieldName" : "location",
    "position" : 17,
    "renderTypeName" : "location",
    "tableColumnId" : 1478990,
    "width" : 100,
    "format" : {
    },
    "subColumnTypes" : [ "human_address", "latitude", "longitude", "machine_address", "needs_recoding" ]
  } ],
  "displayFormat" : {
    "viewport" : {
      "center" : {
        "lng" : -87.65360369867234,
        "lat" : 41.87177745229843
      },
      "ymin" : 41.854998088248315,
      "ymax" : 41.88855241286059,
      "zoom" : 14,
      "xmin" : -87.70853533929733,
      "xmax" : -87.59867205804733
    },
    "plotStyle" : "point",
    "type" : "google",
    "plot" : {
      "descriptionColumns" : [ {
        "tableColumnId" : 1456787
      }, {
        "tableColumnId" : 1456783
      } ],
      "locationId" : 1478990,
      "titleId" : 1456786
    }
  },
  "grants" : [ {
    "inherited" : true,
    "type" : "viewer",
    "flags" : [ "public" ]
  } ],
  "metadata" : {
    "custom_fields" : {
      "Metadata" : {
        "Data Owner" : "Police",
        "Time Period" : "One year minus the most recent seven days",
        "Frequency" : "Data is updated daily, Tuesday through Sunday"
      }
    },
    "availableDisplayTypes" : [ "map", "table", "fatrow", "page" ],
    "rdfSubject" : "0"
  },
  "owner" : {
    "id" : "scy9-9wg4",
    "displayName" : "cocadmin",
    "emailUnsubscribed" : false,
    "privacyControl" : "login",
    "privilegesDisabled" : false,
    "profileImageUrlLarge" : "/images/profile/4783/7574/CitySeal_Small_large.jpg",
    "profileImageUrlMedium" : "/images/profile/4783/7574/CitySeal_Small_thumb.jpg",
    "profileImageUrlSmall" : "/images/profile/4783/7574/CitySeal_Small_tiny.jpg",
    "profileLastModified" : 1327605094,
    "roleName" : "administrator",
    "screenName" : "cocadmin",
    "rights" : [ "create_datasets", "edit_others_datasets", "edit_sdp", "edit_site_theme", "moderate_comments", "manage_users", "chown_datasets", "edit_nominations", "approve_nominations", "feature_items", "federations", "manage_stories", "manage_approval", "change_configurations", "view_domain", "view_others_datasets", "edit_pages", "create_pages" ]
  },
  "query" : {
  },
  "rights" : [ "read" ],
  "tableAuthor" : {
    "id" : "scy9-9wg4",
    "displayName" : "cocadmin",
    "emailUnsubscribed" : false,
    "privacyControl" : "login",
    "privilegesDisabled" : false,
    "profileImageUrlLarge" : "/images/profile/4783/7574/CitySeal_Small_large.jpg",
    "profileImageUrlMedium" : "/images/profile/4783/7574/CitySeal_Small_thumb.jpg",
    "profileImageUrlSmall" : "/images/profile/4783/7574/CitySeal_Small_tiny.jpg",
    "profileLastModified" : 1327605094,
    "roleName" : "administrator",
    "screenName" : "cocadmin",
    "rights" : [ "create_datasets", "edit_others_datasets", "edit_sdp", "edit_site_theme", "moderate_comments", "manage_users", "chown_datasets", "edit_nominations", "approve_nominations", "feature_items", "federations", "manage_stories", "manage_approval", "change_configurations", "view_domain", "view_others_datasets", "edit_pages", "create_pages" ]
  },
  "tags" : [ "crime", "police" ]
};