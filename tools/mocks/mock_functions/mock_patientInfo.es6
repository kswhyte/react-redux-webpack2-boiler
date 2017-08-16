var chalk = require('chalk');
var fs = require('fs');


module.exports = function(toggle){


console.log(chalk.blue('---------------------------------'));
console.log(chalk.green('--> Opening : '), chalk.yellow('PatientInfoActions'));
console.log(chalk.blue('---------------------------------'));

const patientInfoActions_filePath = './src/actions/PatientInfoActions.es6';
let patientInfoActionsSelector = fs.readFileSync(patientInfoActions_filePath, {encoding: 'utf8'});

let patientInfoImport, fireGetImport;

if(toggle === "add"){
   patientInfoImport = "import {getPatientInfoRequest,savePatientInfoRequest} from '../actionRequests/mocks/patientInfoRequest';";
   fireGetImport = "import fireGet from '../../tools/mocks/fireGet';"
} else if(toggle === "remove"){
   patientInfoImport = "import {getPatientInfoRequest,savePatientInfoRequest} from '../actionRequests/patientInfoRequest';";
   fireGetImport = "import fireGet from '../../tools/fireGet';"
} else {
  throw Error("add or remove | these are the only two options. ");
}

console.log(chalk.blue('---------------------------------'));
console.log(chalk.green('--> Building folder path : '), chalk.yellow(patientInfoImport));

console.log(chalk.green('--> Building folder path : '), chalk.yellow(fireGetImport));
console.log(chalk.blue('---------------------------------'));

let patientInfoActionsParts = patientInfoActionsSelector.split('\n');

let patientInfoActionsPart_filter = patientInfoActionsParts.filter(function filterOutDataThatNeedsHardcoding(line){
    let regexStartSession = /(import {getPatientInfoRequest|import fireGet)/g;
    if(line.match(regexStartSession)){
        return false;
    } else {
      return true;
    }
});

let patientInfoActionsPartsAppended = [
    patientInfoImport,
    fireGetImport,
    ...patientInfoActionsPart_filter
];

console.log(chalk.blue('---------------------------------'));
console.log(chalk.green('--> Writing : '), chalk.yellow(patientInfoActions_filePath));
console.log(chalk.blue('---------------------------------'));

fs.writeFileSync(patientInfoActions_filePath, patientInfoActionsPartsAppended.join('\n'));
console.log(chalk.magenta('-------------- DONE -------------------'));
}
