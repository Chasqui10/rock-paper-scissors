console.log("This script file is working from the html page.");

var optionsRPS = ["rock", "paper", "scissor"];

if (window.confirm("Do you want to play rock, paper, scissor?")){
    
    var compSelection = optionsRPS[(Math.floor(Math.random() * optionsRPS.length))];
    console.log ("The computer chose " + compSelection + "." )

    var playerSelection = prompt("Type your choice of: rock, paper, or scissor");
    console.log ("You have chosen " + playerSelection + ".")

    if ( compSelection === playerSelection ) {
        console.log ("This game is a tie! Try again be refreshing the page.");
        window.alert ("This game is a tie! Try again be refreshing the page.");

    } else if (
        (playerSelection == "rock" && compSelection == "scissor" ) ||
        (playerSelection == "scissor" && compSelection == "paper") ||
        (playerSelection == "paper" && compSelection == "rock") 
    ){
        console.log ("You win! Play again by refreshing the page.");
        window.alert ("You win! Play again by refreshing the page.");
    } else if (
        (playerSelection == "rock" && compSelection == "paper" ) ||
        (playerSelection == "scissor" && compSelection == "rock") ||
        (playerSelection == "paper" && compSelection == "scissor")
    ){
        console.log ("You lost :/ Play again by refreshing the page.");
        window.alert ("You lost :/ Play again by refreshing the page.");
    };
};