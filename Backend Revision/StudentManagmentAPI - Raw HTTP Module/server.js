import students from './model.js';
import http from 'http';
import url from 'url'

const port = 500;

// Logic will come here
const server = http.createServer((req, res) =>{

    const parsedURL = url.parse(req.url, true)
    const pathName = parsedURL.pathname;
    console.log(parsedURL)
    console.log(pathName)

    if(pathName === '/students' && req.method === 'GET'){
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end(JSON.stringify(students))
        console.log(JSON.stringify(students)); // Converting to string so that HTTP can send to POSTMAN(client) client parses it again
    }else if(pathName.startsWith('/students/') && req.method === "GET"){
        const id = parseInt(pathName.split("/")[2]);
        console.log(id);
        const student = students.find(s => s.id === id);

        if(student){
            res.writeHead(200, {'content-type': 'application/json'});
            res.end(JSON.stringify(student))
        }
        else{
            res.writeHead(404);
            res.end("Student not found")
        }
    }else if(pathName == '/students' && req.method === 'POST'){
        // Reading the data passed from POSTMAN and storing in body variable
        let body = "";
        req.on('data', chunk =>{
            body += chunk.toString();
        }) // This process is asynchronous so the console.log(body) here would be executed directly so body = empty string
        

        req.on('end', () =>{
            const newStudent = JSON.parse(body); // Converting the string to JS object for manipulating the data
            // newStudent is now a JS object so we can do manipulation of data
            console.log(body);
            newStudent.id = Date.now(); // setting the id field of the new Student to Date.now();
            students.push(newStudent) // adding the new Student to existing students array

            res.writeHead(200, {'content-type': 'application/json'})
            res.end(JSON.stringify(newStudent)) // Sending data in string format via HTTP because HTTP can't handle anything except strings
            // Then this string data when reaches POSTMAN it coverts to JSON format for displaying it in UI
            console.log(typeof(newStudent))
        })
    }else{
        res.writeHead(404)
        res.end("Route doesn't exist")
    }
})

// Starting the server

server.listen(port, () =>{
    console.log(`Server running on the port number ${port}`)
})