let p2=1;
var prev;
for(let j=0;j<10;j++){
const headElem1 = document.createElement('div');
headElem1.className = "container";
for(let i=0;i<10;i++){
    const x = document.createElement('div');
    if(j%2==0){
        if(i%2==0){
        x.className = "itemEven"
    }
    else{
        x.className = "itemOdd"
    }
    }
    else{
        if(i%2!=0){
        x.className = "itemEven"
    }
    else{
        x.className = "itemOdd"
    }
    }
    let y=j*10 +i+1;
    x.id="item" +y;
     
    x.innerHTML= j*10 +i+1;
    headElem1.appendChild(x); 
}
console.log(headElem1);
document.body.appendChild(headElem1);

}
const b = document.createElement('input');
b.type="button";
b.className="button";
b.value="DICE";
b.addEventListener('click', myfun);
document.body.appendChild(b);

const c = document.createElement('input');
c.type="button";
c.className="button";
c.value="RESET";
c.addEventListener('click', myreset);
document.body.appendChild(c);
let f=document.createElement("h1");
document.body.appendChild(f);
function myfun (){
console.log("in my function");
let x = Math.floor((Math.random() * 6) + 1);
document.getElementById(`item${p2}`).style.backgroundColor = prev;
document.getElementById(`item1`).style.backgroundColor ="white";
console.log(x);

f.innerHTML="dice result"+x;
console.log(f);

let d=p2;
p2= p2+x;
if(p2>100){
    p2=d;
}
prev = document.getElementById(`item${p2}`).style.backgroundColor;
console.log("prev",prev);
document.getElementById(`item${p2}`).style.backgroundColor="red";
if(p2==50){
    alert("YOU WON");
}
}
function myreset(){
document.getElementById(`item1`).style.backgroundColor ="green";
document.getElementById(`item${p2}`).style.backgroundColor = prev;
f.innerHTML="";
p2=1;

}