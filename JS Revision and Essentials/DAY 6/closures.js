function outerFunction(){

    let outerVar = "I am from outer fn";

    return function innerFunction(){

        console.log(outerVar);

    }

}

const innerFunc = outerFunction();
innerFunc();

