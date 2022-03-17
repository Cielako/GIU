// zadanie rozwiazane inaczej niz prowadzacy je rozumial 
class prostokat{
    constructor({ left, right, top, bottom, hwRatio, area, circumference, cx=0, cy=0, width, height }){
        // left / right / top / bottom -> przesuniecie na osi
        
        //przezsuniecia w osi x
        this.width = width;
        this.height = height;
        this.cx = cx;
        this.cy = cy;

        if ((left && right) && (left != right)) {
            this.cx = this.cx + right - left;
        }
        else if((left && right) && (left == right)) {
            this.cx = 0;
        }
        else if(left){
            this.cx = -left;
        }
        else if(right){
            this.cx = right;
        }
        // przesuniecia w osi y
        if ((top && bottom) && (top != bottom)) {
            this.cy = this.cy + top - bottom;
        }
        else if((top && bottom) && (top == bottom)) {
            this.cy = 0;
        }
        else if(top){
            this.cy = -top;
        }
        else if(bottom){
            this.cy = bottom;
        }

        // stosunek bokow i pole
        if(hwRatio && area){
            this.width = Math.sqrt(area / hwRatio);
            this.height = Math.sqrt(area * hwRatio);
        }

        // stosunek bokow i obwod
        if(hwRatio && circumference) {
            this.width = circumference / (2 * hwRatio + 2);
            this.height = circumference / (2 + (2 / hwRatio));
        }

        // pole i obwod
        if(area && circumference){                      // losowa wysokosc i szerokosc (zamienne)
            if(Math.floor(Math.random()*2) == 0){
                this.height = (circumference + Math.sqrt(Math.pow(circumference, 2) - 16 * area)) / 4;
                this.width = (circumference - Math.sqrt(Math.pow(circumference, 2) - 16 * area)) / 4;
            }
            else if(Math.floor(Math.random()*2) == 1){
                this.height = (circumference - Math.sqrt(Math.pow(circumference, 2) - 16 * area)) / 4;
                this.width = (circumference + Math.sqrt(Math.pow(circumference, 2) - 16 * area)) / 4;
            }
        }

        // obwod i bok
        if((width || height) && circumference){
            if(width != 1){
                this.width = width;
                this.height = (circumference - 2 * width) / 2;
            }
            else if (height != 1){
                this.height = height;
                this.width = (circumference - 2 * height) / 2;
            }
        }
        
        // pole i bok
        if((width || height) && area){
            if(width != 1){
                this.width = width;
                this.height = area / width;
            }
            else if (height != 1){
                this.height = height;
                this.width = area / height;
            }
        }
        
        // bok i stosunek bokow
        if((width || height) && hwRatio){
            if(width != 1){
                this.width = width;
                this.height = width * hwRatio;
            }
            else if (height != 1){
                this.height = height;
                this.width = height / hwRatio;
            }
        }
        // gdy po drodze cos nie poszlo
        if(this.height == undefined) this.height = 1;
        if(this.width == undefined) this.width = 1;
    }
}
                                                                            // spodziewane top 1 przesuniecie do gory o 1 top -1 przesuniecie w dol o 1
let p = new prostokat({ left: 12, right: 5, cy: 3, cx: 5, width: 10 });      // width 10    height 1    cx -2   cy 3 
let p1 = new prostokat({ top: -1, cy: 1, cx: 5, width: 2, area: 10 });       // width 2     height 5    cx 5    cy 0 
let p2 = new prostokat({ width: 10 });                                       // width 10    height 1    cx 0    cy 0 
let p3 = new prostokat({ circumference: 10, width: 2 });                     // width 2     height 3    cx 0    cy 0 
let p4 = new prostokat({ hwRatio: 2, area: 10 });                            // width (5)   height (20) cx 0    cy 0 
let p5 = new prostokat({ hwRatio: 2, width: 10 });                           // width 10    height 20   cx 0    cy 0 
let p6 = new prostokat({ circumference: 30, area: 25 });                      
console.log(p)
console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)
console.log(p5)
console.log(p6)
