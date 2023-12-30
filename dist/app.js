"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _morgan = _interopRequireDefault(require("morgan"));
var _example = _interopRequireDefault(require("./routes/example"));
var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));
var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
var _swaggerOptions = require("./swaggerOptions");
var app = (0, _express["default"])();
var specs = (0, _swaggerJsdoc["default"])(_swaggerOptions.options);
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use("/docs", _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(specs));
app.use("/", _example["default"]);
var _default = exports["default"] = app;