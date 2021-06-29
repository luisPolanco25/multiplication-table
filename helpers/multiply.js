const fs = require('fs');
const colors = require('colors');


const generateFile = async(baseNum = 5, view = false, to = 10) => {

    try {
        
        let output = '';
        let consoleOutput = '';
        
    
        for (let x = 1; x <= to; x++) {
            output += `${baseNum} x ${x} = ${baseNum * x}\n`;
            consoleOutput += `${baseNum} ${'x'.cyan} ${x} ${'='.cyan} ${baseNum * x}\n`;
        }
    
        if (view) {
            console.log('======================'.rainbow);
            console.log(`    Table of ${baseNum}    `.yellow);
            console.log('======================'.rainbow);
            console.log(consoleOutput);
        }

    
        fs.writeFileSync(`./output/table-${baseNum}.txt`, output);
    
        return console.log(`Table-${baseNum}.text generated`.bgGreen);
                
    } catch (error) {

        console.log(error);
        
    }

};

module.exports = {
    generateFile
};