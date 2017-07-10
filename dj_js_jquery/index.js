$("#box").on("mouseenter", () => {
    $("#box").css("background-color", "red");
});

$("#box").on("mouseleave", () => {
    $("#box").css("background-color", "blue");
})

$("#box").on("click", () => {
    $("#box").fadeOut("slow");
})
