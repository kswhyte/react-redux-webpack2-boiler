import fs from 'fs';
import chalk from 'chalk';
import path from 'path';
import {URI, PORTS} from '../app_config';

const environments = {
  dev : `localhost:${PORTS.localhostPortNumber_uisvc}/${URI.baseUISVC_URI}`, //local dev
  staging : `/${URI.baseUISVC_URI}`, //test AWS
  prod :  `/${URI.baseUISVC_URI}` // Production
}

export default loadEnvironments = environment => {
  const _environment = null;
  //check environment
  switch(environment){
    case 'dev':
      console.log(chalk.green(
      `------------------------------ \n
        Check
      ---------------------------- \n`));
      _environment = environment;
    case 'staging':
     console.log(chalk.green(
      `------------------------------ \n
      Check
      ---------------------------- \n`));
      _environment = environment;
    case 'prod':
      console.log(chalk.green(
      `------------------------------ \n
        Check
      ---------------------------- \n`));
      _environment = environment;
    default:
      console.log(chalk.red(
      `------------------------------ \n
        ${environemnt } does not exist \n
        Try: \n
        dev \n
        staging \
        prod \n
      ---------------------------- \n`));
  };

  if(__environment !== null){
     console.log(chalk.blue(
    `------------------------------ \n
       Loading Environment ${environemnt} \n
    ---------------------------- \n`));

    /*
    -==== LOAD ENVIRONMENT ====-
    */
    console.log(chalk.blue(
    `------------------------------ \n
        NOT IMPLEMENTED 7/10/2017 \n
    ---------------------------- \n`));
  }

} //END - export default environment


