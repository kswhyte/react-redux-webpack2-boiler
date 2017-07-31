var chalk = require('chalk');
var fs = require('fs');


module.exports = function(toggle){


console.log(chalk.blue('---------------------------------'));
console.log(chalk.green('--> Opening : '), chalk.yellow('SessionActions'));
console.log(chalk.blue('---------------------------------'));



const SessionActions_filePath = './src/actions/SessionActions.es6';
let SessionActionsSelector = fs.readFileSync(SessionActions_filePath, {encoding: 'utf8'});

let StartSessionImport, FirePostImport

if(toggle === "add"){
   StartSessionImport = "import startSessionRequest from '../actionRequests/mocks/startSessionRequest';";
   FirePostImport = "import firePost from '../../tools/mocks/firePost';"
} else if(toggle === "remove"){
   StartSessionImport = "import startSessionRequest from '../actionRequests/startSessionRequest';";
   FirePostImport = "import firePost from '../../tools/firePost';"
} else {
  throw Error("add or remove | these are the only two options. ");
}

console.log(chalk.blue('---------------------------------'));
console.log(chalk.green('--> Building folder path : '), chalk.yellow(StartSessionImport));

console.log(chalk.green('--> Building folder path : '), chalk.yellow(FirePostImport));
console.log(chalk.blue('---------------------------------'));

let SessionActionsParts = SessionActionsSelector.split('\n');

let SessionActionsPart_filter = SessionActionsParts.filter(function filterOutDataThatNeedsHardcoding(line){
    let regexStartSession = /(import startSessionRequest|import firePost)/g;
    if(line.match(regexStartSession)){
        return false;
    } else {
      return true;
    }
});

let SessionActionsPartsAppended = [
    StartSessionImport,
    FirePostImport,
    ...SessionActionsPart_filter
];

console.log(chalk.blue('---------------------------------'));
console.log(chalk.green('--> Writing : '), chalk.yellow(SessionActions_filePath));
console.log(chalk.blue('---------------------------------'));

fs.writeFileSync(SessionActions_filePath, SessionActionsPartsAppended.join('\n'));
console.log(chalk.magenta('-------------- DONE -------------------'));


}
