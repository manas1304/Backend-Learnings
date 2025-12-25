class coffeeMachine{

    #waterLevel = 0; // Private Field

    #checkWaterLevel(){ // Private Function

        return this.#waterLevel;

    }

}

const obj = new coffeeMachine();

console.log(obj);
