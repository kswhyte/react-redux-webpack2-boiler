var chalk = require('chalk');
var fs = require('fs');


module.exports = function(toggle){



console.log(chalk.blue('---------------------------------'));
console.log(chalk.green('--> Opening : '), chalk.yellow('SessionActions'));
console.log(chalk.blue('---------------------------------'));


const patientInfoActions_filePath = './src/actions/PatientInfoActions.es6';
let patientInfoActionsSelector = fs.readFileSync(patientInfoActions_filePath, {encoding: 'utf8'});

let SearchPatientImport;

if(toggle === "add"){
   SearchPatientImport = "import searchPatientRequest from '../actionRequests/mocks/searchPatientRequest';";
} else if(toggle === "remove"){
   SearchPatientImport = "import searchPatientRequest from '../actionRequests/searchPatientRequest';";
} else {
  throw Error("add or remove | these are the only two options. ");
}

console.log(chalk.blue('---------------------------------'));
console.log(chalk.green('--> Building folder path : '), chalk.yellow(SearchPatientImport));
console.log(chalk.blue('---------------------------------'));

let PatientInfoActionsParts = patientInfoActionsSelector.split('\n');

let PatientInfoActionsPart_filter = PatientInfoActionsParts.filter(function filterOutDataThatNeedsHardcoding(line){
    let regexPatientSearch = /import searchPatientRequest/g;
    if(line.match(regexPatientSearch)){
        return false;
    } else {
      return true;
    }
});

let PatientActionsPartsAppended = [
    SearchPatientImport,
    ...PatientInfoActionsPart_filter
];

console.log(chalk.blue('---------------------------------'));
console.log(chalk.green('--> Writing : '), chalk.yellow(patientInfoActions_filePath));
console.log(chalk.blue('---------------------------------'));

fs.writeFileSync(patientInfoActions_filePath, PatientActionsPartsAppended.join('\n'));
console.log(chalk.magenta('-------------- DONE -------------------'));


}