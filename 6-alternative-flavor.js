module.exports.items = ['items', 'items2']

const person ={
  name: 'bob',
}

function bye() {
  return 'bye there'
}
//will not be an object
//module.exports = person


//set up a property on that object and equal to an obect
module.exports.singlePerson = {person, bye}