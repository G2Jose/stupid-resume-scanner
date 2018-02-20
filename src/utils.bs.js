// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var List = require('bs-platform/lib/js/list.js');
var $$Array = require('bs-platform/lib/js/array.js');
var Curry = require('bs-platform/lib/js/curry.js');
var Config = require('./config');
var Caml_array = require('bs-platform/lib/js/caml_array.js');
var Js_boolean = require('bs-platform/lib/js/js_boolean.js');
var Js_primitive = require('bs-platform/lib/js/js_primitive.js');
var CommandLineArgs = require('command-line-args');

function isTruthy(value) {
  return +Curry._1(arg => !!arg, value);
}

function getCommandLineArgs() {
  return CommandLineArgs(Config.cmdLineOptions);
}

function filterFormats(path) {
  return Js_boolean.to_js_boolean(
    +(path.includes('docx') || path.includes('pdf'))
  );
}

function getFileNameFromPath(path) {
  var components = path.split('/');
  return Caml_array.caml_array_get(components, (components.length - 1) | 0);
}

function getNonEmptyLines(text) {
  return $$Array.of_list(
    List.filter(function(item) {
      return +Curry._1(arg => !!arg, item);
    })($$Array.to_list(text.split('\n')))
  );
}

function regex(keyword) {
  return Curry._1(keyword => new RegExp(`\\b${keyword}\\b`, 'i'), keyword);
}

function getLinesMatchingKeyword(keyword, lines) {
  return $$Array.of_list(
    List.filter(function(line) {
      return +(
        Js_primitive.null_to_opt(
          line.match(
            Curry._1(keyword => new RegExp(`\\b${keyword}\\b`, 'i'), keyword)
          )
        ) !== /* None */ 0
      );
    })($$Array.to_list(lines))
  );
}

exports.isTruthy = isTruthy;
exports.getCommandLineArgs = getCommandLineArgs;
exports.filterFormats = filterFormats;
exports.getFileNameFromPath = getFileNameFromPath;
exports.getNonEmptyLines = getNonEmptyLines;
exports.regex = regex;
exports.getLinesMatchingKeyword = getLinesMatchingKeyword;
/* ./config Not a pure module */