const express = require('express')
const router = express.Router();

/*
Route Middleware-- specific to routes only
*/

function routeMW(req, res, next){

    console.log("User Route Level Middleware");
    next();

}

router.use(routeMW);

/*
 Custom Middleware -- Mainly for authentication
*/


function authMW(req, res, next){

    console.log("Req is Authenticated");
    next();

}

// We can now go and define routes using Router

router.get("/", authMW, (req, res) => {

    res.end("All Users");

})


router.post("/", (req, res) =>{

    const body = req.body;
    console.log(JSON.stringify(body));
    res.end(JSON.stringify(body));

})

module.exports = router;