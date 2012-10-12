// Write the contents to a temp file. Useful for capturing XHR results.
exports.writeToFile = function(name, contents) {
  var tmpDataDir = Titanium.Filesystem.getFile(Titanium.Filesystem.tempDirectory, 'Data');

 	tmpDataDir.createDirectory();

  var newFile = Titanium.Filesystem.getFile(tmpDataDir.nativePath, name);
  newFile.createFile();

  if (newFile.exists()) {
    newFile.write(contents);
    Ti.API.info("Wrote to file: " + newFile.path);
  } else {
  	Ti.API.error("Expected file did not exist: " + newFile.path);
  }
};
