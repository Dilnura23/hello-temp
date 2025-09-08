//fs is module, file system module
//read and write methods provided by module fs is synchronous
//it blocks the program until file is fully reads
//utf is text encoding format with 8 bit, your texts are encoded in bits so, utf8 supports decoding
//if you dont write flag in writeFile then it is by default w, overwrites
//takes too much time, one by one

const {readFileSync, writeFileSync} = require('fs')
console.log('start')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

writeFileSync('./content/result-sync.txt', 
`Hello is the result: ${first}, ${second}`, {flag: 'a'}
)
writeFileSync('./content/result3-sync.txt', 
`BYE is the result: ${first}, ${second}`, {flag: 'w'}
)

console.log('done with this task')
console.log('done with the next task it is synchronous. Compare with 11-fs-async.js')

//flag: a is append the text 
//flag: r read mode, OPENS file for reading only not used commonly, if file doesnt exist throws an error
//flag: w write mode, creates file if not exist, overwrites if it does
//flag: wx like w but fails if file exists
//flag: ax like a but fails if file exists