var goombaCoin = 5;
var bobOmbCoin = 7;
var cheepCheepsCoin = 11;
var goombaTotal= 0;
var bobOmbTotal = 0;
var cheepCheepTotal = 0;

//totals the sum
let totalSum = function () {
    document.querySelector("#grandTotal").innerHTML = goombaTotal + cheepCheepTotal + bobOmbTotal;
};


//individul purchases
$("#gButton").on("click", () =>{
    let numGoombas = $("#gInput").val();
    goombaTotal = numGoombas * goombaCoin;
    
    $("#gOutput").html(goombaTotal);
    totalSum();
});

$("#bButton").on("click", () => {
    let numBobombs = $("#bInput").val();
    bobOmbTotal = numBobombs * bobOmbCoin;
    $("#bOutput").html(bobOmbTotal)
    totalSum();
});

$("#cButton").on("click", () => {
    let cheepCheeps = $("#cInput").val();
    cheepCheepTotal = cheepCheeps * cheepCheepsCoin;
    
    $("#cOutput").html(cheepCheepTotal);
    totalSum();
})

