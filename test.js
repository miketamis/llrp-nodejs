'use strict';

var llrp = require('./index.js');

var reader = new llrp({
	ipaddress: '192.168.0.143'
});

reader.connect();

reader.on('timeout', function () {
	console.log('timeout');
});

reader.on('disconnect', function () {
	console.log('disconnect');
});

reader.on('error', function (error) {
	console.log('error: ' + JSON.stringify(error));
});

reader.on('didSeeTag', function (tag) {
	console.log('TAG: ' + tag.tagID);
});