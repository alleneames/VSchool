document.querySelector(".dj").addEventListener("click", function(){
    this.style.borderRadius = "20%";
});

document.querySelector(".dj").addEventListener("mouseover", function(){
    this.classList.add("box");
})

//document.querySelector(".box-height").addEventListener("mouseout", function(){
//    this.classList.remove(".box-height");
//})