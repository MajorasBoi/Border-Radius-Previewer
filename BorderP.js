const tpl=document.querySelector("#top-left");
const tpr=document.querySelector("#top-right");
const bml=document.querySelector("#bottom-left");
const bmr=document.querySelector("#bottom-right");

var css= document.querySelector(".code");
var box= document.querySelector(".right")
css.textContent = "border-radius: " + "0px" + ";";
 
const SetRadius =()=>{
    document.querySelector(".right").style.borderRadius= tpl.value + "px " + tpr.value + "px " + bmr.value + "px " + bml.value + "px";
    css.textContent = "border-radius: " + String(box.style.borderRadius) + ";";
}

document.querySelectorAll("input").forEach((element) =>{
    element.addEventListener("input", SetRadius);
})