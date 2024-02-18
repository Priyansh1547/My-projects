let random1 = Math.random() * 6 + 1;
let floor1 = Math.floor(random1);

let random2 = Math.random() * 6 + 1;
let floor2 = Math.floor(random2);

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");


let dice1 = () => {
    if(floor1 === 1){
        img1.setAttribute("src" , "images/dice1.png");
    }else if(floor1 === 2){
        img1.setAttribute("src" , "images/dice2.png");
    }else if(floor1 === 3){
        img1.setAttribute("src" , "images/dice3.png");
    }else if(floor1 === 4){
        img1.setAttribute("src" , "images/dice4.png");
    }else if(floor1 === 5){
        img1.setAttribute("src" , "images/dice5.png");
    }else if(floor1 === 6){
        img1.setAttribute("src" , "images/dice6.png");
    }else{
        img1.setAttribute("src" , "images/dice1.png");
    }
}
dice1();

let dice2 = () => {
    if(floor2 === 1){
        img2.setAttribute("src" , "images/dice1.png");
    }else if(floor2 === 2){
        img2.setAttribute("src" , "images/dice2.png");
    }else if(floor2 === 3){
        img2.setAttribute("src" , "images/dice3.png");
    }else if(floor2 === 4){
        img2.setAttribute("src" , "images/dice4.png");
    }else if(floor2 === 5){
        img2.setAttribute("src" , "images/dice5.png");
    }else if(floor2 === 6){
        img2.setAttribute("src" , "images/dice6.png");
    }else{
        img2.setAttribute("src" , "images/dice1.png");
    }
}
dice2();

let win = document.querySelector("h1");

if(floor1 > floor2){
    win.innerText = "Player 1 Win";
}else if(floor2 > floor1){
    win.innerText = "Player 2 Win";
}else{
    win.innerText = "Draw";
}