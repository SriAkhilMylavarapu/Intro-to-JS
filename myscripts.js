const choices = ["r", "p", "s"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function getplayerChoice(){
    let pChoice = prompt("Enter either 'Rock', 'Paper', or 'Scissors'").charAt(0).toLowerCase();
    while (pChoice != "r" && pChoice != "p" && pChoice != "s") {
        pChoice = prompt("Enter either 'Rock', 'Paper', or 'Scissors'").charAt(0).toLowerCase();
    }
    return pChoice;
}

function checkResult(pChoice, cChoice) {
    if (pChoice == cChoice) return "It's a tie!";
    else if ((pChoice == "r" && cChoice == "s") || (pChoice == "p" && cChoice == "r") || (pChoice == "s" && cChoice == "p")) return ("You win! " + pChoice + " beats " + cChoice);
    else return ("You lose, " + cChoice + " beats " + pChoice);
}

console.log(checkResult(getplayerChoice(), getComputerChoice()));