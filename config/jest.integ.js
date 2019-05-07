var config = require("./jest");
config.testRegex = "(/tests/.ispec.*|\\.(itest|ispec))\\.(ts|js)$";
module.exports = config;