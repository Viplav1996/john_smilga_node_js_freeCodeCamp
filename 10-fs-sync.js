const {readFileSync, writeFileSync} = require('fs');

console.log('start')
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')
// console.log(first, second);
// flag property does append

writeFileSync('./content/result-sync.txt',
`Here is the result :${first}, ${second}`,
{flag: 'a'}
)
console.log('done with this task')
console.log('starting next task')

// const {readFile} = require('fs');

// console.log('start')

// readFile('./content/first.txt','utf8',(err,res) =>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(res);
//     console.log("complete");
// })
// console.log("Start next task");