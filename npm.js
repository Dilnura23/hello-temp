//npm - global command, comes with node, means when you download 
//node.js it come with it, no need to download seperately. npm is node package manager

//npm --version

//local dependency - use it only in this particular project
//npm i <packageName>  

//global dependecy - use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)
//sudo = “super user do”, lets you run a command with admin/root privileges.


//pachage.json -manifest file (stores important info about project/package)
//manual approach (create package.json in the root, create properties etc -better to do it)
//npm init (step by step, press enter to skip) -NAME should be unique
//npm init -y (everything default)

//example - we just downloaded loadash locally, so we are trying one of the methods
const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
