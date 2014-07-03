#!/usr/bin/env node

'use strict';

var path = require('path');
var fs = require('fs');
var handlebars = require('handlebars');

var usage = function(err, exitCode) {
  if(err)
    console.log("Error: %s", err);
  console.log("Usage: %s <template-file> <json-data-file> [<output-file>]", path.basename(process.argv[1]));
  process.exit(exitCode || 1);
};

var checkFileExists = function(file) {
  if(!fs.existsSync(file))
    usage("File '" + file + "' does not exist", 2);
};

if(process.argv.length < 3)
  usage();

var templateFile = process.argv[2];
var dataFile = process.argv[3];

checkFileExists(templateFile);
checkFileExists(dataFile);

var template = fs.readFileSync(templateFile, { encoding: 'utf8' });
var data = JSON.parse(fs.readFileSync(dataFile, { encoding: 'utf8' }));

var handlebarTemplate = handlebars.compile(template);
var output = handlebarTemplate(data);

if(process.argv.length == 5)
  fs.writeFileSync(process.argv[4], output, { encoding: 'utf8' });
else
  console.log(output);
