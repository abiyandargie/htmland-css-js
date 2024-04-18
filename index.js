//  let username;
//  name=prompt('how old are u man?');//for input require from user
//  alert('your name is '+name);
//  document.getElementById("mysubmmit").onclick=function(){
// username=document.getElementById("mytext").value;

// document.getElementById("myh1").textContent='hello '+username;
// // radius=prompt("enter the radius ");
//  }

//  let radius;
// const PI=3.14;


// document.getElementById("cbutton").onclick = function(){
//     radius = document.getElementById("mtext").value;
//     radius=Number(radius);
//     circumference = 2*PI*radius;
// document.getElementById("myh3").textContent=circumference+" cm long";
// }
const increasebutton = document.getElementById("increasebutton");
const decreasebutton = document.getElementById("decreasebutton");
const resetbutton = document.getElementById("resetbutton");
const countLabel = document.getElementById("countLabel");
let count = 0;
increasebutton.onclick = function(){
    count++;
    countLabel.textContent = count;
}
resetbutton.onclick = function(){
    count=0;
    countLabel.textContent = count;
}
decreasebutton.onclick = function(){
    count--;
    countLabel.textContent = count;
}