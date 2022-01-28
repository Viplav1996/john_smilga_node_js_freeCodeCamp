const {readFile, writeFile} = require('fs').promises;
const { resolve } = require('path');
const util = require('util');

const start = async () =>{
    try {
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile('./content/mind-grenade.txt',
        `THIS IS AWESOME: ${first} ${second}`,
        {flag: 'a'});
    }
    catch(error) {
        console.log(error);
    }
}
start()