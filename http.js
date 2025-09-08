//after every end we need to use RETURN, otherwise throws an error
//on any navigation after the first one

const http = require('http')

const server = http.createServer((req, response)=>{
  if (req.url ==='/'){
    response.end('Welcome to our home page')
    return
  }
  if (req.url ==='/about'){
    response.end('Here is our short history')
    return
  }
  response.end(`
  <h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for </p>
  <a href = "/about">back home to "about"</a>
  <p>
    <a href = "/">back home</a>
  </p>`)
  return
  // console.log(req)
  // response.write('Welcome to our home page')
  // response.end()
})

server.listen(3002)

