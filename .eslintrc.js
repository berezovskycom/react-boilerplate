module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "plugins": [
      "react"
    ],
    "rules": {
	  	"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
	  	"import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
      "max-len": [1, 79, 2, {ignoreComments: true}],
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