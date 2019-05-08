var config = require("./jest");
config.testRegex = "(/tests/.(.*)spec.*|\\.((.*)test|(.*)spec))\\.(ts|tsx|js)$";
module.exports = config;