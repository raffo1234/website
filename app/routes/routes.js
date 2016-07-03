var controllers = require('../controllers');
var express = require('express');

module.exports = function(app){


	// INDEX
	app.get('/', controllers.controllerFront.getFront);

	// HTML5	
	app.get('*', function(req, res) {
	  res.redirect('/');
	});
		
};