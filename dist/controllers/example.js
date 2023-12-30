"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.save = exports.getById = exports.getAll = exports.editOne = exports.deleteOne = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _messages = require("../constants/messages");
var _database = require("../database");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var handleDatabaseError = function handleDatabaseError(res, error) {
  res.json((0, _messages.dbResponse)(error.message, false, 404));
};
var getAll = exports.getAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var connection, _yield$connection$que, _yield$connection$que2, rows;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _database.connect)();
        case 3:
          connection = _context.sent;
          _context.next = 6;
          return connection.query("SELECT * FROM example WHERE deleted = 0");
        case 6:
          _yield$connection$que = _context.sent;
          _yield$connection$que2 = (0, _slicedToArray2["default"])(_yield$connection$que, 1);
          rows = _yield$connection$que2[0];
          res.json((0, _messages.dbResponse)(rows));
          _context.next = 15;
          break;
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          handleDatabaseError(res, _context.t0);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 12]]);
  }));
  return function getAll(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getById = exports.getById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var connection, _yield$connection$que3, _yield$connection$que4, rows;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _database.connect)();
        case 3:
          connection = _context2.sent;
          _context2.next = 6;
          return connection.query("SELECT * FROM example WHERE id = ?", [req.params.id]);
        case 6:
          _yield$connection$que3 = _context2.sent;
          _yield$connection$que4 = (0, _slicedToArray2["default"])(_yield$connection$que3, 1);
          rows = _yield$connection$que4[0];
          res.json((0, _messages.dbResponse)(rows));
          _context2.next = 15;
          break;
        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](0);
          handleDatabaseError(res, _context2.t0);
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 12]]);
  }));
  return function getById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var save = exports.save = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var connection, _req$body, title, description, response, newSave;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0, _database.connect)();
        case 3:
          connection = _context3.sent;
          _req$body = req.body, title = _req$body.title, description = _req$body.description;
          _context3.next = 7;
          return connection.query("INSERT INTO `example`(`title`, `description`) VALUES (?, ?)", [title, description]);
        case 7:
          response = _context3.sent;
          newSave = _objectSpread({
            id: response[0].insertId
          }, req.body);
          res.json((0, _messages.dbResponse)(newSave));
          _context3.next = 15;
          break;
        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](0);
          handleDatabaseError(res, _context3.t0);
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 12]]);
  }));
  return function save(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var editOne = exports.editOne = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var connection, id, response;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return (0, _database.connect)();
        case 3:
          connection = _context4.sent;
          id = req.params.id;
          _context4.next = 7;
          return connection.query("UPDATE `example` SET ? WHERE id = ?", [req.body, id]);
        case 7:
          response = _context4.sent;
          if (response[0].affectedRows) {
            _context4.next = 10;
            break;
          }
          throw new Error("id: ".concat(id, " does not exist"));
        case 10:
          res.json((0, _messages.dbResponse)("id: ".concat(id, " was edited")));
          _context4.next = 16;
          break;
        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](0);
          handleDatabaseError(res, _context4.t0);
        case 16:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 13]]);
  }));
  return function editOne(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var deleteOne = exports.deleteOne = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var connection, id;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return (0, _database.connect)();
        case 3:
          connection = _context5.sent;
          id = req.params.id;
          _context5.next = 7;
          return connection.query("UPDATE `example` SET `deleted`= 1 WHERE id=?", [id]);
        case 7:
          res.json((0, _messages.dbResponse)("id: ".concat(id, " was deleted")));
          _context5.next = 13;
          break;
        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          handleDatabaseError(res, _context5.t0);
        case 13:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 10]]);
  }));
  return function deleteOne(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();