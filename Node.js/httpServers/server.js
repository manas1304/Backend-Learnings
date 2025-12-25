const http = require('http');

const PORT = 1304;

// Creating a server with HTTP Protocol............

const server = http.createServer((req, res) =>{

    if(req.url === "/" && req.method === "GET"){

        res.writeHead(200, {'content-type': 'text/plain'});
        res.end("Welocome to Manas Shukla's Server........");

    }

    else if(req.url === "/about" && req.method === "GET"){

        res.writeHead(200, {'content-type': 'text/plain'});
        res.end("Welcome the About Page of Manas Shukla's Server!")
    }

    else if(req.url === "/api/data" && req.method === "POST"){

        let body = "";
        req.on('data', (chunk) => {

            body += chunk.toString();

        })

        req.on('end', () => {

            const parsedData = JSON.parse(body);
            console.log(`Data Received: ${parsedData}`);
            res.writeHead(201, {'content-type': 'application/json'});
            res.end(JSON.stringify(
                {
                    message: 'Data Received',
                    data: parsedData
                    
                }
            ))
        })
    }

    else{

        res.writeHead(404, {'content-type': 'text/plain'});
        res.end("404 Error, Page Not Found!");

    }

});

// The server has been successfully created ...........

server.listen(PORT, () => {

    console.log(`Server Running on Port Number ${PORT}`);

})
