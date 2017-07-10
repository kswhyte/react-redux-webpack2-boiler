'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _app_config = require('./app_config');

var _app_config2 = _interopRequireDefault(_app_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var environments = {
  dev: 'localhost:' + _app_config.PORTS.localhostPortNumber_uisvc + '/' + _app_config.URI.baseUISVC_URI, //local dev
  test: '/' + _app_config.URI.baseUISVC_URI, //test AWS
  prod: '/' + _app_config.URI.baseUISVC_URI // Production
};

exports.default = function (environment) {
  console.log('test- ', _app_config2.default);
  var _environment = null;
  //check environment
  switch (environment) {
    case 'dev':
      console.log(_chalk2.default.green('------------------------------ \n\n  Check \n\n---------------------------- \n'));
      _environment = environment;
      break;
    case 'test':
      console.log(_chalk2.default.green('------------------------------ \n\nCheck \n\n---------------------------- \n'));
      _environment = environment;
      break;
    case 'prod':
      console.log(_chalk2.default.green('------------------------------ \n\nCheck \n\n---------------------------- \n'));
      _environment = environment;
      break;
    default:
      console.log(_chalk2.default.red('------------------------------ \n\n"' + environment + '" does not exist \n\n--------------------------\n\n  |  Try: passing one of these arguments \n\n  |   -- dev       -- test       -- prod \n\n---------------------------- \n'));
      break;
  };

  if (_environment !== null) {
    console.log(_chalk2.default.blue('------------------------------ \n\n    Loading Environment ' + _environment + ' \n\n---------------------------- \n'));

    /*
    -==== LOAD ENVIRONMENT ====-
    */
    console.log(_chalk2.default.blue('------------------------------ \n\n    NOT IMPLEMENTED 7/10/2017 \n\n---------------------------- \n'));
  }
}; //END - export default environment

require('make-runnable');
