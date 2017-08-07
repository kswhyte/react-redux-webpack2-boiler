var chalk = require('chalk');
var fs = require('fs');
var mock_session = require('./mock_functions/mock_session_start.es6');
var mock_login = require('./mock_functions/mock_login.es6');
var mock_patientInfo=require('./mock_functions/mock_patientInfo.es6');
var mock_patientAppointments=require('./mock_functions/mock_patientAppointments.es6');
var mock_patientNotes=require('./mock_functions/mock_patientNotes.es6');
var MOCK_STATE = "add";
module.exports = function(){
  console.log(chalk.green(
        `------------------------------ \n
  Check \n
---------------------------- \n`));



      console.log(chalk.magenta(
'------------------------------ \n'
+ '        adding mocks \n'
+ '---------------------------- \n'));

/* ------
Mock out the Start Session feature
================================== */
mock_session(MOCK_STATE);

/* ------
Mock out the Login feature
================================== */
mock_login(MOCK_STATE);
mock_patientInfo(MOCK_STATE);
mock_patientAppointments(MOCK_STATE);
mock_patientNotes(MOCK_STATE);
}
