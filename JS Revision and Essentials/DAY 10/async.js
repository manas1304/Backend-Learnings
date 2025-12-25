function boilWater(callback){

    console.log("Boiling Water...");
    setTimeout(() =>{

        console.log("Water is Boiled");
        callback();

    }, 2000);

}

function cookPasta(callback){

    console.log("Cooking Pasta...");
    setTimeout(() =>{

        console.log("Pasta is cooked");
        callback();

    }, 2000);
    
}

function prepareSauce(callback){

    console.log("Preparing Sauce");
    setTimeout(() =>{

        console.log("Sauce is Prepared");
        callback();

    }, 2000);
    
}

function mixPastaAndSauce(callback){

    console.log("Mixing Pasta and Sauce");
    setTimeout(() =>{

        console.log("Dinner Ready");
        callback();

    }, 2000);
    
}

boilWater(() =>{

    cookPasta(() => {

        prepareSauce(() => {

            mixPastaAndSauce(() => {

                console.log("Dinner is Ready, Enjoy your Meal !")

            })

        })

    })

})