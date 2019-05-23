var path    = require("path");

module.exports = function() { 
    return function logError(err, req, res, next) {
      if (req.url.substring(0, 5) != '/api/') {
        return res.sendFile(pt("client/index.html"));
      } else {
        next(err)
      }
    };
  };

function pt(relative) {
  return path.resolve(__dirname, '../..', relative);
}