const {generateFile} = require('./helpers/multiply')
const argv = require('./config/yargs');

console.clear();

generateFile(argv.b, argv.v, argv.t);



// console.log(process.argv);
// const [,,arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');


