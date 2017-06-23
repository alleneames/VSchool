//Addition button []
document.getElementById("addButton").addEventListener("click", function (){
    var num1Value = Number(document.getElementById("num1").value);
    var num2Value = Number(document.getElementById("num2").value);
    var result = num1Value + num2Value;
    document.getElementById("result").innerHTML = result;
});

//Subtract button []
document.getElementById("subButton").addEventListener("click", function() {
    document.getElementById("result").innerHTML = Number(document.getElementById("num3").value) - Number(document.getElementById("num4").value);
});

//Multiply button []
document.getElementById("mulButton").addEventListener("click", function() {
    document.getElementById("result").innerHTML = Number(document.getElementById("num5").value) * Number(document.getElementById("num6").value);
});

//Mod button []
document.getElementById("modButton").addEventListener("click", function () {
    document.getElementById("result").innerHTML = Number(document.getElementById("num7").value) % Number(document.getElementById("num8").value);
});