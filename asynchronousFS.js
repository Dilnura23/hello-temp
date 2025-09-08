//ASYNCHRONOUS reading and writing, we need to use callback
//calls back to you with result, while the rest of your other code can just run
//we run callback when we are done, just like we do with addEventlistener
//if you dont provide UTF then you will get buffer binary code

const {readFile, writeFile} = require('fs')

readFile('./content/first.txt', 'utf-8', (err, result)=>{
  if (err){
    console.log(err)
    return
  }
  const first = result;
  readFile('./content/second.txt', 'utf8', (err, result)=>{
    if (err){
      console.log(err)
      return
    }
    const second = result
    
    writeFile('./content/result-async.txt', `Hello is the result: ${first}, ${second}`, (err, result)=>{
      if (err) {
        console.log(err)
        return
      }
      console.log(result) //gives undefined if successful because it is write, only in read it has result(content)
    }
    )
  })
  
})

