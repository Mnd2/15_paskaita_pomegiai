"use strict";


var tabs = document.getElementsByClassName("tab");
var btn = document.getElementsByTagName("button");

function changeTab(target, name) {
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
        btn[i].classList.remove("active");
    }
    target.currentTarget.classList.add("active");
    document.getElementById(name).style.display = "flex";
    document.getElementById(name).style.flexDirection = "column";

    setTimeout(function(){
        show(name);
      }, 100)
    
}
function show(name) {
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("tabAnimation");
        
    }
    document.getElementById(name).classList.add("tabAnimation");
}
