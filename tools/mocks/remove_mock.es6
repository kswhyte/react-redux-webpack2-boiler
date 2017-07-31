var chalk = require('chalk');
var mock_session = require('./mock_functions/mock_session_start.es6');
var mock_login = require('./mock_functions/mock_login.es6');
var MOCK_STATE = "remove";


module.exports = function(){
  console.log(chalk.green(
        `------------------------------ \n
  Check \n
---------------------------- \n`));



      console.log(chalk.magenta(
'------------------------------ \n'
+ '        removing mocks \n'
+ '---------------------------- \n'));

/* ------
Mock out the Start Session feature
================================== */
mock_session(MOCK_STATE);

/* ------
Mock out the Login feature
================================== */
mock_login(MOCK_STATE);



}