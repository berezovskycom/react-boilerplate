module.exports = {
    "extends": ["plugin:jest/recommended", "airbnb"],
    "parser": "babel-eslint",
    "plugins": [
      "react",
      "jest"
    ],
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/jsx-indent": 0,
      "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
      "max-len": [1, 79, 2, {ignoreComments: true}],
      "linebreak-style": 0,
      "no-tabs": 0,
      "indent": 0,
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error",  
      //"prop-types": [2],
      "comma-dangle": ["error", {
        "arrays": "never",
        "objects": "never",
        "imports": "never",
        "exports": "never",
        "functions": "ignore"
      }]
    },
    "env": {
      "browser": true,
      "node": true
    }
};