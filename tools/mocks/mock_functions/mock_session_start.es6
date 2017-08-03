var chalk = require('chalk');
var fs = require('fs');


module.exports = function(toggle){


console.log(chalk.blue('---------------------------------'));
console.log(chalk.green('--> Opening : '), chalk.yellow('SessionActions'));
console.log(chalk.blue('---------------------------------'));



const SessionActions_filePath = './src/actions/SessionActions.es6';
let SessionActionsSelector = fs.readFileSync(SessionActions_filePath, {encoding: 'utf8'});

let StartSessionImport, FirePostImport, ResetPasswordRequestImport

if(toggle === "add"){
   StartSessionImport = "import startSessionRequest from '../actionRequests/mocks/startSessionRequest';";
   FirePostImport = "import firePost from '../../tools/mocks/firePost';";
   ResetPasswordRequestImport = "import resetPasswordRequest from '../actionRequests/mocks/resetPasswordRequest';";
} else if(toggle === "remove"){
   StartSessionImport = "import startSessionRequest from '../actionRequests/startSessionRequest';";
   FirePostImport = "import firePost from '../../tools/firePost';"
   ResetPasswordRequestImport = "import resetPasswordRequest from '../actionRequests/resetPasswordRequest';";
} else {
  throw Error("add or remove | these are the only two options. ");
}

console.log(chalk.blue('---------------------------------'));
console.log(chalk.green('--> Building folder path : '), chalk.yellow(StartSessionImport));

console.log(chalk.green('--> Building folder path : '), chalk.yellow(FirePostImport));
console.log(chalk.blue('---------------------------------'));

let SessionActionsParts = SessionActionsSelector.split('\n');

let SessionActionsPart_filter = SessionActionsParts.filter(function filterOutDataThatNeedsHardcoding(line){
    let regexStartSession = /(import startSessionRequest|import firePost|import resetPasswordRequest)/g;
    if(line.match(regexStartSession)){
        return false;
    } else {
      return true;
    }
});

let SessionActionsPartsAppended = [
    StartSessionImport,
    FirePostImport,
    ResetPasswordRequestImport,
    ...SessionActionsPart_filter
];

console.log(chalk.blue('---------------------------------'));
console.log(chalk.green('--> Writing : '), chalk.yellow(SessionActions_filePath));
console.log(chalk.blue('---------------------------------'));

fs.writeFileSync(SessionActions_filePath, SessionActionsPartsAppended.join('\n'));
console.log(chalk.magenta('-------------- DONE -------------------'));


}
