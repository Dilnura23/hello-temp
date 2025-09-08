const path = require('path')

console.log(path.sep);
console.log('foo/bar/baz'.split(path.sep));
// Returns: ['foo', 'bar', 'baz']

const filePath  = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

console.log(path.basename(__dirname))
console.log(path.basename(__filename))

//path.resolve builds an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt') 
console.log(absolute)
