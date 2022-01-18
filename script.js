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
      }, 10)
    
}
function show(name) {
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("tabAnimation");
        
    }
    document.getElementById(name).classList.add("tabAnimation");
}

function animateText(p) {
    var text = p.value;
    var to = text.length,
      from = 0;

    animate({
      duration: 6000,
      timing: bounce,
      draw: function(progress) {
        var result = (to - from) * progress + from;
        p.value = text.substr(0, Math.ceil(result))
      }
    });
  }


  function bounce(timeFraction) {
    for (var a = 0, b = 1; 1; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
      }
    }
  }