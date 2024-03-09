const up = document.getElementById("up");
const down = document.getElementById("down");
const amount = document.getElementById("amount");
const change = document.getElementById("switch");
const $html = document.querySelector('html');
const easter = document.getElementById('foto');
let counter = 0;

function pressUp(){  
    let el = parseInt(amount.innerText)
    el+=1
    amount.innerText = el
}
function pressDown(){
    let el = parseInt(amount.innerText)
    el -= 1
    if(el < 0){
        amount.innerText = 0
    }else{
        amount.innerText = el
    }
}

up.addEventListener("click", pressUp);
down.addEventListener("click", pressDown);
change.addEventListener('change', function(){
    $html.classList.toggle('dark-mode')
})
easter.addEventListener('click', function(){
    counter += 1
    if(counter >= 10){
        window.alert("Feliz Aniversário Andy")
    }
})