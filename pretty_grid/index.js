let rs = require("readline-sync");
let genGrid = require("./grid.js");
let grid = genGrid();
// console.log(grid)

//prompt user to enter info (x cord, y cord, & character input)



while(true) {
    let coordinates = [0,1,2,3,4];
    let ans1 = rs.keyInSelect(coordinates, "What column do you choose? ");
    let ans2 = rs.keyInSelect(coordinates, "What row do you choose? ");
    let char = rs.question("what character do you choose? ")

    grid[ans1][ans2] = char;
    console.log(grid);
    let keepPlaying = rs.keyInYN("Would you like to continue playing? ")
    if(!keepPlaying) break;
}

