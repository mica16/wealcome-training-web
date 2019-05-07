var config = require("./jest");
config.testRegex = "(/tests/.(.*)spec.*|\\.((.*)test|(.*)spec))\\.(ts|js)$";
module.exports = config;