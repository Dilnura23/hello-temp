const num1 = 5;
const num2 = 10;

function addValues(){
  console.log(`the sum is : ${num1 +num2}`)
}
// addValues()
//will work even tho no export, because require is excitng entire file and you already called the func

//another way you exported object with a property add
module.exports.add = addValues