// Old Way using closures....

function bankAccount(owner, amount){

    let _balance = amount;

    this.getBalance = function(){

        return _balance;

    }

}

const acc = new bankAccount("Manas Shukla", 5000000000);

console.log(acc.getBalance());



class Car{

    #speed = 20;

    getSpeed(){ // Accessing the private varible speed through public getter and setters............

        return this.#speed;

    }

    setSpeed(speed){

        this.#speed = speed;

    }

}

const newCar = new Car();
// console.log(newCar.#speed);// Not accessible outside class because it has a private identifier........

console.log(newCar.getSpeed());
newCar.setSpeed(40);
console.log(newCar.getSpeed());

