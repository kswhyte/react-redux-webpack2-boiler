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

var _app_config = require('../app_config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var environments = {
  dev: 'localhost:' + _app_config.PORTS.localhostPortNumber_uisvc + '/' + _app_config.URI.baseUISVC_URI, //local dev
  staging: '/' + _app_config.URI.baseUISVC_URI, //test AWS
  prod: '/' + _app_config.URI.baseUISVC_URI // Production
};

exports.default = loadEnvironments = function loadEnvironments(environment) {
  var _environment = null;
  //check environment
  switch (environment) {
    case 'dev':
      console.log(_chalk2.default.green('------------------------------ \n\n        Check\n      ---------------------------- \n'));
      _environment = environment;
    case 'staging':
      console.log(_chalk2.default.green('------------------------------ \n\n      Check\n      ---------------------------- \n'));
      _environment = environment;
    case 'prod':
      console.log(_chalk2.default.green('------------------------------ \n\n        Check\n      ---------------------------- \n'));
      _environment = environment;
    default:
      console.log(_chalk2.default.red('------------------------------ \n\n        ' + environemnt + ' does not exist \n\n        Try: \n\n        dev \n\n        staging         prod \n\n      ---------------------------- \n'));
  };

  if (__environment !== null) {
    console.log(_chalk2.default.blue('------------------------------ \n\n       Loading Environment ' + environemnt + ' \n\n    ---------------------------- \n'));

    /*
    -==== LOAD ENVIRONMENT ====-
    */
    console.log(_chalk2.default.blue('------------------------------ \n\n        NOT IMPLEMENTED 7/10/2017 \n\n    ---------------------------- \n'));
  }
}; //END - export default environment

require('make-runable');
