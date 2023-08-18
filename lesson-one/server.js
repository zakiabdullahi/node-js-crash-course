console.log("Hello World")


const os = require('os')
const path = require('path')
const { add, subtract, multiply, devide } = require('./math')
console.log(add(1, 2))


// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())
// /*
// Hello World
// Windows_NT
// Windows 10 Pro
// C:\Users\Zaki

// */
// console.log(__dirname)
// // D:\Crash Courses\node-js-crash-course\lesson-one
// console.log(__filename)
// // D:\Crash Courses\node-js-crash-course\lesson-one\server.js


// console.log(path.dirname(__filename))

// // D:\Crash Courses\node-js-crash-course\lesson-one
// console.log(path.basename(__filename))
// // server.js
// console.log(path.extname(__filename))
// // .js

// console.log(path.parse(__filename))
// // {
//     root: 'D:\\',
//     dir: 'D:\\Crash Courses\\node-js-crash-course\\lesson-one',
//     base: 'server.js',
//     ext: '.js',
//     name: 'server'
//   }
