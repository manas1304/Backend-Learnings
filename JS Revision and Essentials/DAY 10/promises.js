const simranPromise = new Promise((resolve, reject) =>{

    let dadAgreed = true;

    setTimeout(() =>{

        if(dadAgreed){

            resolve("Abba maan gye !!, Ab seedha Shaadi Karungi");

        }

        else{

            reject("Bhai, Abba nhi maan rhe yrr --");

        }

    }, 3000)

})

// Handling Promise

// simranPromise.then((message) =>{

//     console.log(`Message from Simran: ${message}`);

// }).catch((message) => {

//     console.log("Message from Simran: ", message);

// })



// Handling using Async Await

async function handleSimranPromise(){

    const message = await simranPromise;

    console.log(message);
    console.log("Let me talk to my parents now !")

}

handleSimranPromise();