var mimeDB = require('mime-db');

var MimeHero = (function(){
  function lookup(providedString) {
    if (!providedString) {
      throw new Error("Must provide a string to MimeHere.lookup()")
    }

    // Get the file extension
    var providedExtension;
    if (providedString.indexOf(".") !== -1) {
      providedExtension = providedString.split(".").pop()
    } else {
      providedExtension = providedString
    }

    var mimeType = Object.keys(mimeDB).filter(function(mime) {
      // Return mime type if it's extensions include the rovided extention.
      var extensions = mimeDB[mime].extensions || [];
      return extensions.indexOf(providedExtension) !== -1;
    }).shift(); // We only want the first mimeType we encounter.

    return mimeType;
  };

  return {
    lookup: lookup
  };
})()

module.exports = MimeHero;
