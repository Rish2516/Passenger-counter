let countEl = document.getElementById("count-el");
console.log(countEl);

let saveEl=document.getElementById("save-el");
console.log(saveEl);

let count = 0;

function increment() {
    count = count + 1;
    countEl.innerText=count;
}

function save(){    
    let a=count+" - ";
    saveEl.textContent+=a;
    console.log(count);
    count=0;
    countEl.innerText=count;
}



