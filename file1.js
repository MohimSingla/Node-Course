//  ---- 1 ----
// import a from './file2.cjs'

// console.log(a.name, a.v);

// ques: how to avoid file execution while we import any module

//  ---- 2 ----

// import chalk from "chalk";

// console.log(chalk.blue("success"));     



//   ---- 3 ---

// console.log(process.argv);

// ---- 4 =====


import yargs from 'yargs';
import {hideBin} from 'yargs/helpers'
// const yargs = require('yargs');
// let test = await yargs()
//     // .option("trend-file", {
//     //     alias: "t",
//     //     description: "The full filename of the trendfile.",
//     //     type: "string",
//     // })
//     // .option("start-time", {
//     //     alias: "s",
//     //     description: "Start time for trend.",
//     //     type: "string",
//     // })
//     .getHelp();
//     console.log(test);


// var test = yargs(hideBin(process.argv));   // Working with ES6
// console.log(test.argv);

// -----5-----

// yargs(hideBin(process.argv)).command({
//     command: "add",
//     handler: function () {
//         console.log("woohoo");
//     }
// }).argv;


// yargs(hideBin(process.argv)).command('hello', 'print hello world', () => {
//     console.log('Hello, world!');
//   })
//   .command('greet', 'greet someone', (yargs) => {
//     yargs.option('name', {
//       describe: 'name of the person to greet',
//       demandOption: true,
//       type: 'string'
//     });
//   }, (argv) => {
//     console.log(`Hello, ${argv.name}!`);
//   })
//   .argv;


// ----- 6 ----- 

// yargs(hideBin(process.argv)).command({
//     command: "add",
//     describe: 'test',
//     handler: function () {
//         console.log("woohoo");
//     },
//     builder: {
//         title: {
//             describe: 'title',
//             demandOption: true
//         }

//     }
// }).argv;



// --- 7 ----

// yargs(hideBin(process.argv)).command({
//     command: 'add',
//     describe: 'Adding a node',
//     builder: {
//         body: {
//             describe: 'body block',
//             demandOption: true,
//         },
//     },
//     handler: function (argv) {
//         console.log(argv.body);
//     }

// }).argv

// ----  8 -----
import fs from 'fs';
// fs.writeFileSync('temp.txt', 'File created successfully!'); 

// ----- 9 ------
// var data= {
//     "title": "yoyo",
//     "random": "text"
// }

// var datas = JSON.stringify(data);
// // var newData = JSON.parse(datas);
// console.log(typeof(datas));


// ----- 10 -----

// fs.readFile('./jsonfile.json', (err, dat) => {
//     var data = dat.toString();
//     var obj = JSON.parse(data);
//     obj.title = "newTitle";
//     data=JSON.stringify(obj);
//     fs.writeFileSync('jsonfile.json', data);
//     console.log(obj);

// });

// ----- 11 ------
