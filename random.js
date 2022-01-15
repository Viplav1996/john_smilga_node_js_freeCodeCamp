let diceRoller = function(number){
    let x = Math.floor(1 + (number * Math.random()));
    console.log("Rolling dice ", number, "number was ", x);
}
let diceSimulater = function(numberOfTimes, typeOfDice){
    for(let i=0; i< numberOfTimes; i++){
        diceRoller(typeOfDice);
    }
}
diceSimulater(5,6);