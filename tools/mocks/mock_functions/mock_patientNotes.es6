var chalk = require('chalk');
var fs = require('fs');


module.exports = function(toggle){


console.log(chalk.blue('---------------------------------'));
console.log(chalk.green('--> Opening : '), chalk.yellow('patientNotesActions'));
console.log(chalk.blue('---------------------------------'));

const patientNotesActions_filePath = './src/actions/PatientNotesActions.es6';
let patientNotesSelector = fs.readFileSync(patientNotesActions_filePath, {encoding: 'utf8'});

let patientNotesImport, fireGetImport,firePostImport;

if(toggle === "add"){
   patientNotesImport = "import {addpatientNotesRequest,getPatientNotesRequest} from '../actionRequests/mocks/patientNotesRequest';";
   fireGetImport = "import fireGet from '../../tools/mocks/fireGet';"
   firePostImport = "import firePost from '../../tools/mocks/firePost';"
} else if(toggle === "remove"){
   patientNotesImport = "import {addpatientNotesRequest,getPatientNotesRequest} from '../actionRequests/patientNotesRequest';";
   fireGetImport = "import fireGet from '../../tools/fireGet';"
    firePostImport = "import firePost from '../../tools/firePost';"
} else {
  throw Error("add or remove | these are the only two options. ");
}

console.log(chalk.blue('---------------------------------'));
console.log(chalk.green('--> Building folder path : '), chalk.yellow(patientNotesImport));

console.log(chalk.green('--> Building folder path : '), chalk.yellow(fireGetImport));
console.log(chalk.blue('---------------------------------'));

let patientNotesActionsParts = patientNotesSelector.split('\n');

let patientNotesActionsPart_filter = patientNotesActionsParts.filter(function filterOutDataThatNeedsHardcoding(line){
    let regexStartSession = /(import {addpatientNotesRequest,getPatientNotesRequest}|import fireGet |import firePost)/g;
    if(line.match(regexStartSession)){
        return false;
    } else {
      return true;
    }
});

let patientNotesActionsPartsAppended = [
    patientNotesImport,
    fireGetImport,firePostImport,
    ...patientNotesActionsPart_filter
];

console.log(chalk.blue('---------------------------------'));
console.log(chalk.green('--> Writing : '), chalk.yellow(patientNotesActions_filePath));
console.log(chalk.blue('---------------------------------'));

fs.writeFileSync(patientNotesActions_filePath, patientNotesActionsPartsAppended.join('\n'));
console.log(chalk.magenta('-------------- DONE -------------------'));
}
