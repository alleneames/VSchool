let genGrid = function() {
    let grid = [];
    for(let i = 0; i < 5; i++) {
        grid.push([]);
        for(let j = 0; j < 5; j++) {
            grid[i].push("o");
        }
    }
    return grid;
}


module.exports = genGrid