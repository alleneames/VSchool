//1. Change box color to blue when mouseover
document.getElementById("dj").addEventListener("mouseover", function () {
    document.querySelector("#dj").style.backgroundColor = "blue";
});
//2. Change box color red when mouse button is held down
document.querySelector("#dj").addEventListener("mousedown", function() {
    document.querySelector("#dj").style.backgroundColor = "red";
});
//3. Change box color yellow when mouse button is let go
document.querySelector("#dj").addEventListener("mouseup", function() {
    document.querySelector("#dj").style.backgroundColor = "yellow";
});
//4. Change box color green when the mouse is double clicked
document.querySelector("#dj").addEventListener("dblclick", function() {
    document.querySelector("#dj").style.backgroundColor = "green";
});
//5. Change box color orange when scroll is used anywhere
window.addEventListener("scroll", function() {
    document.querySelector("#dj").style.backgroundColor = "orange";
});

//key selects color change
window.addEventListener("keypress", function(o) {
    if(o.keyCode === 111) {
        document.querySelector("#dj").style.backgroundColor = "orange";
    }
});

window.addEventListener("keypress", function(r) {
    if(r.keyCode === 114) {
    document.querySelector("#dj").style.backgroundColor = "red";
    }
});

window.addEventListener("keypress", function(y) {
    if(y.keyCode === 121) {
       document.querySelector("#dj").style.backgroundColor = "yellow";
       }                  
});

window.addEventListener("keypress", function(b) {
    if(b.keyCode === 98) {
        document.querySelector("#dj").style.backgroundColor = "blue";
    }
});

window.addEventListener("keypress", function(g) {
    if(g.keyCode === 103) {
       document.querySelector("#dj").style.backgroundColor = "green";
       } 
});

