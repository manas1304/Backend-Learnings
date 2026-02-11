import http from 'http';

const port = 3456;

const server = http.createServer((req, res) =>{
    if(req.url === '/' && req.method === 'GET'){
        res.writeHead(200, {'content-type': 'text/plain'})
        res.end("Welcome to the home page")
    }
})

// function handleRequest(req, res){

// }

// const server = http.createServer(handleRequest)

server.listen(port, () =>{
    console.log(`Server running on the port number ${port}`)
})