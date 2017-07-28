var chalk = require('chalk');
var fs = require('fs');
module.exports = function(){
      console.log(chalk.green(
        `------------------------------ \n
  Check \n
---------------------------- \n`));



      console.log(chalk.blue(
'------------------------------ \n'
+ '        adding mocks \n'
+ '---------------------------- \n'));


console.log(chalk.blue('---------------------------------'));
console.log(chalk.green('--> Opening : '), chalk.yellow('SessionActions'));
console.log(chalk.blue('---------------------------------'));

console.log(chalk.blue('---------------------------------'));
console.log(chalk.green('--> Removing mocks  : '), chalk.yellow("import startSessionRequest from \'../actionRequests/mocks/startSessionRequest'"));
console.log(chalk.blue('---------------------------------'));

const SessionActions_filePath = './src/actions/SessionActions.es6';
let SessionActionsSelector = fs.readFileSync(SessionActions_filePath, {encoding: 'utf8'});
let startSessionImport = "import startSessionRequest from '../actionRequests/startSessionRequest';";
let firePostImport = "import firePost from '../../tools/firePost';"
let SessionActionsParts = SessionActionsSelector.split('\n');

let found_occurances = {
    matches: false
};

let SessionActionsPart_filter = SessionActionsParts.filter(function filterOutDataThatNeedsHardcoding(line){
    let regexStartSession = /(import startSessionRequest|import firePost)/g;
    if(line.match(regexStartSession)){
        return false;
    } else {
      return true;
    }
});

let SessionActionsPartsAppended = [
    startSessionImport,
    firePostImport,
    ...SessionActionsPart_filter
];

console.log(chalk.blue('---------------------------------'));
console.log(chalk.green('--> Writing : '), chalk.yellow(SessionActions_filePath));
console.log(chalk.blue('---------------------------------'));

fs.writeFileSync(SessionActions_filePath, SessionActionsPartsAppended.join('\n'));
console.log(chalk.magenta('-------------- DONE -------------------'));
}
