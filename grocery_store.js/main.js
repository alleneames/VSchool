var pub = ""
var shopper = {
    name: "Stacy",
    age: 25,
    valued: true,
    preferedMember: function() {
        return shopper.name + ": " + "prefered";
    },
    groceryCart: ["Apples", "Oranges", "Paper Towels", "Toothpaste"] 
};

function checkOne () {
    //pub += shopper.name + " " + "is prefered!";
    pub = shopper.preferedMember();
    document.getElementById("answerOne").textContent = pub;
};

function checkTwo () {
    pub = shopper.groceryCart.join(", ");
    document.getElementById("answerTwo").textContent = pub;
};

