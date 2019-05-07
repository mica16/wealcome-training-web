const config = {
  "rootDir": "..",
  "coverageDirectory": "<rootDir>/tests/__coverage__/",
  "setupFiles": [],
  "roots": [
    "<rootDir>/src/",
    "<rootDir>/tests/"
  ],
  "moduleFileExtensions": [
    "ts",
    "js"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js)$": "babel-jest"
  },
  "testRegex": "(/tests/.spec.*|\\.(test|spec))\\.(ts|js)$",
  "transformIgnorePatterns": [
    "/node_modules/"
  ],
  "moduleDirectories": [
    "node_modules"
  ],
  "globals": {
    "DEVELOPMENT": false,
    "FAKE_SERVER": false,
    "ts-jest": {
      "tsConfig": "<rootDir>/tsconfig.json"
    }
  },
  "reporters": [
    "default",
    [
      "./node_modules/jest-html-reporter",
      {
        "pageTitle": "Validity Tests Report",
        "outputPath": "tests/test-report.html"
      }
    ]
  ]
};

module.exports = config;
