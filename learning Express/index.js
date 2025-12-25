const express = require('express');

// console.log(typeof(express));
// express is a type of function here -- remember this information

const app = express();
const PORT  = 5151;

app.get("/get", (req, res) =>{

    console.log("Hello from the Get route");
    res.send("Hello from the Get Route")

})

app.post("/post", (req, res) => {

    console.log("Hello from the Post Route");
    res.send("Hello from the Post Route")

})

app.put("/post", (req, res) => {

    console.log("Hello from the put Route");
    res.send("Hello from the put Route")

})


app.delete("/post", (req, res) => {

    console.log("Hello from the delete Route");
    res.send("Hello from the delete Route")

})

// Stitching the userRoutes here

const userRoutes = require("./router/userRoutes");
app.use("/api/users", userRoutes); // If URI looks like this -- something/api/users then bring the userRoutes into action 


// Starting the server

app.listen(PORT, () => {
    
    console.log(`Server is running on the port number: ${PORT}`);
})