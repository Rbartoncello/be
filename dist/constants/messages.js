"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dbResponse = void 0;
var dbResponse = exports.dbResponse = function dbResponse(response) {
  var success = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var code = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
  return {
    'success': success,
    'status': code,
    'response': response
  };
};