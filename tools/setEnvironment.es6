import fs from 'fs';
import chalk from 'chalk';
import path from 'path';
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
    case 'remove-mock':
      removeMock();
      break;
    case 'mock':
      addMocks();
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
  |   -- dev \
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
    NOT IMPLEMENTED 7/10/2017 \n
---------------------------- \n`));
  }
}; // END - export default environment

require('make-runnable');
