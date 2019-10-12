class Box{
    constructor(value, x, y){
        this.value = value;
        this.x = x;
        this.y = y;
    }
    show(){
        fill(color('rgba(0, 0, 0, 0)'));
        if(this.value == 0){
            fill(color('rgba(0, 0, 0, 0)'));
        }else if(this.value == 1){
            stroke('white');
            strokeWeight(2);
            strokeCap(ROUND);
            let shift = SIZE/4.3;
            line(this.x * SIZE/3 + shift, this.y * SIZE/3+shift, this.x*SIZE/3 + SIZE/3 - shift, this.y*SIZE/3 + SIZE/3-shift);
            line(this.x * SIZE/3 + SIZE/3-shift, this.y * SIZE/3+shift, this.x*SIZE/3+shift, this.y*SIZE/3 + SIZE/3-shift);
            line(this.x * SIZE/3 + shift, this.y * SIZE/3+shift, this.x * SIZE/3 + SIZE/3-shift, this.y * SIZE/3+shift);
            line(this.x*SIZE/3 + SIZE/3 - shift, this.y*SIZE/3 + SIZE/3-shift, this.x*SIZE/3+shift, this.y*SIZE/3 + SIZE/3-shift);
        }else if(this.value == -1){
            stroke('white');
            strokeWeight(3);
            strokeCap(ROUND);
            circle(this.x * SIZE/3 + SIZE/6, this.y * SIZE/3 + SIZE/6, SIZE/6);
        }
        stroke(200);
        strokeWeight(3);
        strokeCap(ROUND);
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