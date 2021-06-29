const argv = require('yargs')
                            .option('b', {
                                alias: 'base',
                                type: 'number',
                                demandOption: true,
                                describe: `It's the table's base`
                            })
                            .option('l', {
                                alias: 'listing',
                                type: 'boolean',
                                default: false,
                                describe: 'Shows the table in console'
                            })
                            .option('t', {
                                alias: 'to',
                                type: 'number',
                                default: 10,
                                describe: 'Base will multiply until this number'
                            })
                            .check((argv, options) => {
                                if (isNaN(argv.b)) {
                                    throw 'Base has to be a number';
                                }
                                return true;
                            })
                            .argv;


module.exports = argv;