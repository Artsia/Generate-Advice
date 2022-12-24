const advice_Id= document.getElementById("advice-id");
const advice_Text= document.querySelector(".text-container");
const btn_Dice= document.getElementById("btn-dice");

window.onload = generateAdvice;


btn_Dice.addEventListener("click", function(){
    generateAdvice();
});

function generateAdvice(){
    fetch("	https://api.adviceslip.com/advice")
    .then((response)=>response.json())
    .then((data)=> data.slip)
    .then((data) => {
        advice_Id.textContent = data.id;
        advice_Text.textContent = data.advice;
    })
    .catch((err) => {
        alert(`Error ${err}`);
    });
}