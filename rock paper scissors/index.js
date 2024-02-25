let msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
let user = document.querySelector("#user-score");
let comp = document.querySelector("#comp-score");

let userScore = 0;
let compScore = 0;

let rps = ["rock" , "paper" , "scissors"]

const compMove = () =>{
    let move = Math.floor(Math.random() * 3);
    return rps[move];
}

const game = (userChoice) =>{
    let userWin = true;
    let computer = compMove();

    if(userChoice === computer){
        draw(); 
    }else{
    let userWin = true;
    if(userChoice === "rock"){
        userWin = computer === "paper" ? false : true;
    }else if(userChoice === "scissors"){
        userWin = computer === "rock" ? false : true;
    }else {
        userWin = computer === "rock" ? false : true;
    }
    showWinner(userWin);
}
}

const showWinner = (userwin) =>{
    if(userwin === true){
        userScore++;
        msg.innerText = "You win";
        msg.style.backgroundColor = "green";
        user.innerText = userScore
    }else{
        compScore++;
        msg.innerText = "You loses play again";
        msg.style.backgroundColor = "red";
        comp.innerText = compScore;

    }
}

const draw = () =>{
    msg.innerText = "Game draw play again";
    msg.style.backgroundColor = "blue";
}

choices.forEach((choice) => {
    choice.addEventListener("click" , () =>{
        const userChoice = choice.getAttribute("id");
        game(userChoice);
    })        
})