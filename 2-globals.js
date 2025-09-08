//CommonJS, every file is module (by default)
//Modules - Encapsulated Code (only share minimum up to us what to export)

//name of const can be anything
// const {john, peter} = require('./4-names')
// sayHi(john)
// sayHi(peter)
const names = require('./4-names')
//console names gives object {}
//console.log(names)

const sayHi = require('./5-utils')
// sayHi('Susan')
// sayHi(names.john)
// sayHi(names.peter)


//set up a property on that object and equal to an array
const data = require('./6-alternative-flavor')
// console.log(data)
// console.log(data.singlePerson.bye())  //triggers the property bye as a function



const sumValue = require('./7-mind-grenade')
console.log(sumValue)

//trigger the property add as function, add just wrapped addValues as an object so you call add it is a key
sumValue.add() //same as data above, takes the property and goes to the object key


