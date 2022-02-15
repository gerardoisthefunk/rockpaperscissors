console.log("Hello world")
console.log("-------------------------------------------")
// const ps = "rock";
const rpsArray = ["Rock", "Paper", "Scissors"];

var playerTotal = 0
var computerTotal = 0

let i = 0;

do {
    const randomPlayer = Math.floor(Math.random() * rpsArray.length);
    const randomComputer = Math.floor(Math.random() * rpsArray.length);
    const ps = rpsArray[randomPlayer].toLowerCase()
    const cs = rpsArray[randomComputer].toLowerCase()
    i+=1
    console.log("Turn - " + i)
    
    rps(ps, cs)
    console.log(playerTotal)
    console.log(computerTotal)
    console.log("-------------------------------------------")



} while (playerTotal < 5 && computerTotal < 5)

function rps(playerSelection,computerSelection) {

    if(playerSelection == computerSelection) {
        console.log("Draw")
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log(playerSelection)
        console.log(computerSelection)
        computerTotal += 1
        console.log("Computer score - " + computerTotal)
 
    } 
    else if (playerSelection =="rock" && computerSelection == "scissors") {
        console.log(playerSelection)
        console.log(computerSelection)
        playerTotal+=1
        console.log("Player score - " + playerTotal)
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log(playerSelection)
        console.log(computerSelection)
        playerTotal+=1
        console.log("Player score - " + playerTotal)
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log(playerSelection)
        console.log(computerSelection)
        computerTotal+=1
        console.log("Computer score - " + computerTotal)
    }
    else if (playerSelection == "paper" && computerSelection=="rock") {
        console.log(playerSelection)
        console.log(computerSelection)
        playerTotal+=1
        console.log("player score - " + playerTotal)
    }
    else if (playerSelection == "paper" && computerSelection=="scissors") {
        console.log(playerSelection)
        console.log(computerSelection)
        computerTotal+=1
        console.log("Computer score - " + computerTotal)
    }
    else {console.log("ERROR")}
    
    // if (playerTotal = 5) {
    //     console.log("Player has won")
    // } else if (computerTotal = 5) {
    //     console.log("Computer has won")
    // } else {
    //     console.log("No Winner")
    // }


}







