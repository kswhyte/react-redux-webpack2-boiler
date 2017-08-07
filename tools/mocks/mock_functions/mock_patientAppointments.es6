var chalk = require('chalk');
var fs = require('fs');


module.exports = function(toggle){


console.log(chalk.blue('---------------------------------'));
console.log(chalk.green('--> Opening : '), chalk.yellow('patientAppointmentsActions'));
console.log(chalk.blue('---------------------------------'));

const patientAppointmentsActions_filePath = './src/actions/PatientAppointmentsActions.es6';
let patientAppointmentsSelector = fs.readFileSync(patientAppointmentsActions_filePath, {encoding: 'utf8'});

let patientAppointmentsImport, fireGetImport;

if(toggle === "add"){
   patientAppointmentsImport = "import patientAppointmentsRequest from '../actionRequests/mocks/patientAppointmentsRequest';";
   fireGetImport = "import fireGet from '../../tools/mocks/fireGet';"
} else if(toggle === "remove"){
   patientAppointmentsImport = "import patientAppointmentsRequest from '../actionRequests/patientInfoRequest';";
   fireGetImport = "import fireGet from '../../tools/fireGet';"
} else {
  throw Error("add or remove | these are the only two options. ");
}

console.log(chalk.blue('---------------------------------'));
console.log(chalk.green('--> Building folder path : '), chalk.yellow(patientAppointmentsImport));

console.log(chalk.green('--> Building folder path : '), chalk.yellow(fireGetImport));
console.log(chalk.blue('---------------------------------'));

let patientAppointmentsActionsParts = patientAppointmentsSelector.split('\n');

let patientAppointmentsActionsPart_filter = patientAppointmentsActionsParts.filter(function filterOutDataThatNeedsHardcoding(line){
    let regexStartSession = /(import patientAppointmentsRequest|import fireGet)/g;
    if(line.match(regexStartSession)){
        return false;
    } else {
      return true;
    }
});

let patientAppointmentsActionsPartsAppended = [
    patientAppointmentsImport,
    fireGetImport,
    ...patientAppointmentsActionsPart_filter
];

console.log(chalk.blue('---------------------------------'));
console.log(chalk.green('--> Writing : '), chalk.yellow(patientAppointmentsActions_filePath));
console.log(chalk.blue('---------------------------------'));

fs.writeFileSync(patientAppointmentsActions_filePath, patientAppointmentsActionsPartsAppended.join('\n'));
console.log(chalk.magenta('-------------- DONE -------------------'));
}
