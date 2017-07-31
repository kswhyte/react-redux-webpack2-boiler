import chalk from 'chalk';
import { URI, PORTS } from './app_config';

import removeMock from "../mocks/remove_mock.es6";
import addMocks from "../mocks/add_mocks.es6";

const environments = {
  dev: `localhost:${PORTS.localhostPortNumber_uisvc}/${URI.baseUISVC_URI}`, // local dev
  test: `/${URI.baseUISVC_URI}`, // test AWS
  prod:  `/${URI.baseUISVC_URI}`, // Production
};


export default environment => {
  let _environment = null;
  //check environment
  switch (environment) {
    case 'remove-mocks':
      removeMock();
      break;
    case 'add-mocks':
      addMocks();
      break;
    case 'dev':
    console.log(chalk.green(
        `------------------------------ \n
Check \n
---------------------------- \n`));
      _environment = environment;
      break;
  case 'test':
    console.log(chalk.green(
        `------------------------------ \n
Check \n
---------------------------- \n`));
      _environment = environment;
      break;
    case 'prod':
      console.log(chalk.green(
        `------------------------------ \n
Check \n
---------------------------- \n`));
      _environment = environment;
      break;
    default:
      console.log(chalk.red(
        `------------------------------ \n
"${environment}" does not exist \n
--------------------------\n
  |  Try: passing one of these arguments \n
  |   -- add-mocks
      -- remove-mocks
      -- dev \
      -- test \
      -- prod \n
---------------------------- \n`));
      break;
  }

  if (_environment !== null) {
    console.log(chalk.bgMagenta(
      `------------------------------ \n
    Loading Environment ${_environment} \n
---------------------------- \n`));

    /*
    -==== LOAD ENVIRONMENT ====-
    */
    console.log(chalk.bgMagenta(
      `------------------------------ \n
    Start Call Mocked out 7/27/2017 - Wes \n
---------------------------- \n`));
  }
}; // END - export default environment

require('make-runnable');
