var chalk = require('chalk');
var fs = require('fs');


module.exports = function(toggle){


console.log(chalk.blue('---------------------------------'));
console.log(chalk.green('--> Opening : '), chalk.yellow('PatientInfoActions'));
console.log(chalk.blue('---------------------------------'));

const patientInfoActions_filePath = './src/actions/PatientInfoActions.es6';
let patientInfoActionsSelector = fs.readFileSync(patientInfoActions_filePath, {encoding: 'utf8'});

let patientSearchImport, firePostImport;

if(toggle === "add"){
   patientSearchImport = "import patientSearchRequest from '../actionRequests/mocks/patientInfoRequest';";
   firePostImport = "import firePost from '../../tools/mocks/firePost';"
} else if(toggle === "remove"){
   patientSearchImport = "import patientSearchRequest from '../actionRequests/patientInfoRequest';";
   firePostImport = "import firePost from '../../tools/firePost';"
} else {
  throw Error("add or remove | these are the only two options. ");
}

console.log(chalk.blue('---------------------------------'));
console.log(chalk.green('--> Building folder path : '), chalk.yellow(patientSearchImport));

console.log(chalk.green('--> Building folder path : '), chalk.yellow(firePostImport));
console.log(chalk.blue('---------------------------------'));

let patientInfoActionsParts = patientInfoActionsSelector.split('\n');

let patientInfoActionsPart_filter = patientInfoActionsParts.filter(function filterOutDataThatNeedsHardcoding(line){
    let regexStartSession = /(import patientSearchRequest|import firePost)/g;
    if(line.match(regexStartSession)){
        return false;
    } else {
      return true;
    }
});

let patientInfoActionsPartsAppended = [
    patientSearchImport,
    firePostImport,
    ...patientInfoActionsPart_filter
];

console.log(chalk.blue('---------------------------------'));
console.log(chalk.green('--> Writing : '), chalk.yellow(patientInfoActions_filePath));
console.log(chalk.blue('---------------------------------'));

fs.writeFileSync(patientInfoActions_filePath, patientInfoActionsPartsAppended.join('\n'));
console.log(chalk.magenta('-------------- DONE -------------------'));
}
