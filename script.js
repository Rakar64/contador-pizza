const up = document.getElementById("up");
const down = document.getElementById("down");
const amount = document.getElementById("amount");
const change = document.getElementById("switch");
const $html = document.querySelector('html');
const easter = document.getElementById('foto');
const note = document.getElementById('note');
const saveBtn = document.getElementById('saveBtn');
let counter = 0;

window.onload = function(){

    amount.innerText = localStorage.getItem('amountPizza') ?? 0
    note.innerText = localStorage.getItem('userNote')
}

function saveInfo(){
    localStorage.setItem('amountPizza', parseInt(amount.innerText));
    localStorage.setItem('userNote', note.value);
}

function pressUp(){  
    let el = parseInt(amount.innerText)
    el+=1 
    amount.innerText = el
    saveInfo()
}

function pressDown(){
    let el = parseInt(amount.innerText)
    el -= 1  
    if(el < 0){
        amount.innerText = 0
    }else{saveInfo();
        amount.innerText = el
    }
    saveInfo()
}


saveBtn.addEventListener("click", saveInfo);
up.addEventListener("click", pressUp);
down.addEventListener("click", pressDown);
change.addEventListener('change', function(){
    $html.classList.toggle('dark-mode')
})
easter.addEventListener('click', function(){
    counter += 1
    if(counter >= 10){
        window.alert("Era para ser um Easter Egg?")
    }
})