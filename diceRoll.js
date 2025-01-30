const diceArray = [4, 6, 8, 10, 12, 20, 100];
let diceCount = [];
let i, justSum, finalSum = 0, diceSum = 0;

function randomRoll(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function diceRoll() {
    document.getElementById(`randValue`).innerHTML = ``;
    document.getElementById(`diceSum`).innerHTML = ``;
    document.getElementById(`finalSum`).innerHTML = ``;

    justSum = document.getElementById(`yesbreak`).checked;
   
    for (i = 0; i < 7; i++) {
        diceCount[i] = document.getElementById(`d${diceArray[i]}count`).value;
    }

    for (i = 0; i < 7; i++) {
        for(; diceCount[i] > 0; diceCount[i]--) {
            let randValue = randomRoll(1, diceArray[i]);
            if (justSum) {
                document.getElementById(`randValue`).innerHTML += `d${diceArray[i]} Roll: ${randValue}\n`;
                console.log(`d${diceArray[i]} Roll: ${randValue}`);
            }

            diceSum += randValue;
        }

        if (diceSum != 0 && justSum) {
            document.getElementById(`diceSum`).innerHTML += `Sum of d${diceArray[i]} Rolls: ${diceSum}\n`;
            console.log(`Sum of d${diceArray[i]} Rolls: ${diceSum}`);
        }

        finalSum += diceSum;
        diceSum = 0;
    }

    document.getElementById(`finalSum`).innerHTML = `Final Sum: ${finalSum}`;
    console.log(`Final Sum: ${finalSum}`);
    finalSum = 0;
}