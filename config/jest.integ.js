var config = require("./jest");
config.testRegex = "(/tests/.ispec.*|\\.(itest|ispec))\\.(ts|tsx|js)$";
module.exports = config;