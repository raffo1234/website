var express = require('express');

exports.getFront = function(req, res){
	res.sendFile(__dirname + '/public/index.html');
}