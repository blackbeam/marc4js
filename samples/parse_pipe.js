'use strict';

// require should
// npm install should -g

// run this in the marc4js directory
// node samples/parse_pipe.js

var marc4js = require('marc4js');
var fs = require('fs');
var should = require('should');

var parser = marc4js.parse();
var stringifier = marc4js.stringify();

var records = [];
parser.on('data', function (record) {
    records.push(record);
});

parser.on('error', function (error) {
    console.log("error: ", error);
});

parser.on('end', function () {
    records.length.should.eql(159);
});

fs.createReadStream('samples/PGA-other-2.mrc').pipe(parser).pipe(stringifier).pipe(process.stdout);
