let buttons = document.querySelectorAll(".input > button");
let answer = document.querySelector(".output");
let result = document.querySelector(".result");
buttons.forEach((button)=> {
    button.addEventListener("click" , ()=> calculate(button));
});
function calculate(element){
    let key = element.innerText;
    if(key == "="){
        result.innerText = eval(answer.innerText);
        answer.style.animationName = "small";
        result.style.animationName = "big";
    }
    else if(key == "DEL"){
        answer.innerText = answer.innerText.slice(0 , answer.innerText.length - 1);
        result.innerText = `0`;
        result.style.animationName = "small";
        answer.style.animationName = "big";
    }
    else if(key == "AC"){
        answer.innerText = ``;
        result.innerText = `0`;
        result.style.animationName = "small";
        answer.style.animationName = "big";
    }
    else{
        answer.innerText += element.innerText;
        result.innerText = `0`;
        result.style.animationName = "small";
        answer.style.animationName = "big"; 
    }
}