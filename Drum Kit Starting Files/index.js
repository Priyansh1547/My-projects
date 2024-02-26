let drums = document.querySelectorAll(".drum");

drums.forEach((box) =>{
    box.addEventListener("click" , () =>{
       let text =  box.innerHTML;
       makeSound(text);
       btnAnimation(text);
    })
})

document.addEventListener("keydown" , (event) =>{
    makeSound(event.key)
    btnAnimation(event.key)
})

function makeSound(sound){
    switch (sound) {
        case "w":
            let w = new Audio("sounds/tom-1.mp3")
            w.play();
            break;
        case "a":
            let a = new Audio("sounds/tom-2.mp3");
            a.play(); 
            break;
        case "s":
            let s = new Audio("sounds/tom-3.mp3");
            s.play();
            break;    
        case "d":
            let d = new Audio("sounds/tom-4.mp3");
            d.play();
            break; 
        case "j":
            let j = new Audio("sounds/snare.mp3");
            j.play();  
            break;
        case "k":
            let k = new Audio("sounds/kick-bass.mp3");
            k.play();
            break;
        case "l":
            let l = new Audio("sounds/crash.mp3");
            l.play(); 
            break;              
        default:
            break;
    }
}

function btnAnimation(currentKey){
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(() =>{
        activeButton.classList.remove("pressed");
    }, 100)
}