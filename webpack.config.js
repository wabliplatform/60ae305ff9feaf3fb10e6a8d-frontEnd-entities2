const path = require('path');

module.exports = {
  entry: {
	'home' : './javascript/home.js',
	'ProjectPage' : './javascript/ProjectPage.js',
	'UpdateProject' : './javascript/UpdateProject.js',
	'workpackage' : './javascript/workpackage.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};