var table = [];
var turn = 0;//even red turn, odd green(computer) turn
var SIZE = 600;
//0 - blank (1 value) - red (-1 value)  - green
function setup(){
    var canvas = createCanvas(SIZE, SIZE);
    for(var i = 0; 3>i; i++){
        for(var j = 0; 3>j; j++){
            table.push(new Box(0, j, i));
        }
    }
}
function draw(){
    background('black');
    for(var i = 0;table.length>i;i++){
        table[i].show();
    }
}
function check(a, b, c){
    if( a != 0 && a == b && a ==c && b == c){
        return true;
    }
    return false;
}
function gameOver(grid){
    var winner = 0;
    for(let i = 0; 7 > i; i+=3){
        if(check(grid[i].value, grid[i+1].value, grid[i+2].value)){
            winner = grid[i].value;
            return winner;
        }
    }
    for(let i = 0; 3 > i; i++){
        if(check(grid[i].value, grid[i+3].value, grid[i+6].value)){
            winner = grid[i].value;
            return winner;
        }
    }
    if(check(grid[0].value, grid[4].value, grid[8].value)){
        winner = grid[0].value;
        return winner;
    }
    if(check(grid[2].value, grid[4].value, grid[6].value)){
        winner = grid[2].value;
        return winner;
    }
    var draw = true;
    for(var i = 0; 9>i; i++){
        if(grid[i].value == 0){
            draw = false;
        }
    }
    if(draw){
        return 'draw';
    }
    return winner;
}
function mouseClicked(){
    for(var i = 0;table.length>i;i++){
        if(table[i].isInside(mouseX, mouseY)){
            if(table[i].value == 0){
                if(turn % 2 == 0){
                    table[i].value = 1;
                }else{
                    table[i].value = -1;
                }
                turn++;
                if(turn % 2 == 1){
                    let tempGrid = [];
                    for(let j = 0; 9>j;j++){
                        tempGrid.push({value : table[j].value, x : table[j].x , y : table[j].y});
                    }
                    let temp = comp(tempGrid, turn);
                    console.log(temp);
                    table[temp.place].value = -1;
                    turn++;
                }
                var winner = gameOver(table);
                if(winner != 0){
                    noLoop();
                    if(winner == 1){
                        console.log('X - RED WINs !!');
                    }else if(winner == -1){
                        console.log('O - GREEN WINs !!');
                    }else{
                        console.log('draw');
                    }
                }
            }
        }
    }
}
function comp(grid, turn){
    var win = [];
    var draw = [];
    var loose = [];
    for(let i = 0; 9>i; i++){
        if(grid[i].value == 0){
            var toSet;
            if(turn % 2 == 1){
                toSet = -1;
            }else{
                toSet = 1;
            }
                let tempGrid = [];
                for(let j = 0; 9>j; j++){
                    tempGrid.push({value : grid[j].value, x : grid[j].x , y : grid[j].y});
                }
                tempGrid[i].value = toSet;
                let gameCheck = gameOver(tempGrid);
                if(gameCheck != 0){
                    if(gameCheck == toSet){
                        return {value : toSet , place : i};
                    }else{
                        continue;
                    }
                }
                let temp = comp(tempGrid, turn+1);
                if(temp.value == toSet){
                    win.push(i);
                }else if(temp.value == 'draw'){
                    draw.push(i);
                }else if(temp.value == (toSet == -1)?1:-1){
                    loose.push(i);
                }
            }
    }
    if(win.length > 0){
        if(turn % 2 == 1){
            return {value : -1, place: win[floor(random()*(win.length-1))]};
        }else{
            return {value : 1, place: win[floor(random()*(win.length-1))]};
        }
    }
    if(draw.length > 0){
        if(turn % 2 == 1){
            return {value : 'draw', place: draw[floor(random()*(draw.length-1))]};
        }else{
            return {value : 'draw', place: draw[floor(random()*(draw.length-1))]};
        }
    }
    if(turn % 2 == 1){
        return {value : 1, place: loose[floor(random()*(loose.length-1))]};
    }else{
        return {value : -1, place: loose[floor(random()*(loose.length-1))]};
    }
}