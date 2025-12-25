const express = require('express');
const app = express();

const PORT = 5151;

/*
 Inbuilt Express Middleware -- Required to convert POST call data JSON to JS object
*/

app.use(express.json())

/*
  External Middleware -- Morgan
*/

const morgan = require('morgan');
app.use(morgan("dev"));

/*
  Error Handling Middleware -- For handling error in the whole application 
*/

app.get("/divide", (req, res, next) =>{

  try{

    const result = 10/0;
    if(!isFinite(result)){
      throw new Error('Divide by 0');
    }
    res.send(`Result = ${result}`);
  }catch(err){
    next(err);
  }
})

app.use((err, req, res, next) =>{

  console.log(`Error Message Caught: ${err.message}`);
  res.status(500).json({
    status:"fail",
    message: err.message || "Unexpected Failure"
  })
})


/*
  Application level / Global Middleware -- Called on every request irrespective of the type of call 
*/

function logRequestMW(req, res, next){

  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();

}

app.use(logRequestMW)



app.get("/", (req, res) =>{

    res.send("Home Route")
})


/*
  Stitching the router file to app.js
*/

const userRoute = require('./router/userRoutes');
app.use("/api/users", userRoute);


/*
  Starting the Server !
*/

app.listen(PORT, () =>{

    console.log(`Server got started on the Port Number ${PORT}`);

})