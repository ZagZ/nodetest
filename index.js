const http = require("http")
var cats = require('cat-ascii-faces')

const server = http.createServer((request, response) => {
    console.log(request.url)
    if(request.url==="/perro"){
        response.write("hola PERRO" + cats())

    }
    if(request.url==="/ironhack"){
        response.write("hola IRONHACKER" + cats())

    }
    if(request.url==="/humano"){
        response.write("hola HUMANO" + cats())

    }        
    response.end()
})

server.listen(3000)
