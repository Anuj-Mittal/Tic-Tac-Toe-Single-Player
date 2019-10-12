class Box{
    constructor(value, x, y){
        this.value = value;
        this.x = x;
        this.y = y;
    }
    show(){
        fill('gray');
        if(this.value == 0){
            fill('black');
        }else if(this.value == 1){
            fill('red');
        }else if(this.value == -1){
            fill('lime');
        }
        stroke('white');
        rect(this.x * SIZE/3, this.y * SIZE/3, SIZE/3, SIZE/3);
    }
    isInside(mx, my){
        //Co-ordinates of mouse : mx, my
        if(mx > this.x * SIZE/3 && my > this.y * SIZE/3 && my < this.y * SIZE/3 + SIZE/3 && mx < this.x * SIZE/3 + SIZE/3){
            return true;
        }
        return false;
    }
}