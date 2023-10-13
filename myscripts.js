const choices = ["r", "p", "s"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function playerChoice(){
    let pChoice = prompt("Enter either 'Rock', 'Paper', or 'Scissors'").charAt(0).toLowerCase();
    while (pChoice != "r" && pChoice != "p" && pChoice != "s") {
        pChoice = prompt("Enter either 'Rock', 'Paper', or 'Scissors'").charAt(0).toLowerCase();
    }
    return pChoice;
}