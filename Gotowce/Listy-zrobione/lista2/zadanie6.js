class prostokat
{
    constructor({cx, cy, width, height, left, right, top, bottom, hwRatio, area, circumference}){

        if(width) this.width = width;       //jezeli byly wprowadzone wartosci to je przypisz
        if(height) this.height = height;
        if(cx) this.cx = cx;
        if(cy) this.cy = cy;

        if((left || right) && cx == undefined)
            if(left == right) this.cx = 0;
            else if(right) this.cx = right;
            else if(left) this.cx = -left;
        if((left && right) && (left != right)) this.cx = this.cx + right - left;

        if((top || bottom) && cy == undefined)
            if(top == bottom) this.cy = 0;
            else if(top) this.cy = top;
            else if(bottom) this.cy = -bottom;
        if((top && bottom) && (top != bottom)) this.cy = this.cy + top - bottom;
        
        if((hwRatio && area) && (height == undefined && width == undefined)){
            this.width = Math.sqrt(area / hwRatio);
            this.height = Math.sqrt(area * hwRatio);
        }
        if((hwRatio && circumference) && (height == undefined && width == undefined)){
            this.width = circumference / ( 2*(1+hwRatio) );
            this.height = ( circumference * hwRatio ) / ( 2*(1+hwRatio));
        }
        if((area && circumference) && ( height == undefined && width == undefined)){ //randomowe przyznanie wartosci width i height
            if(Math.floor(Math.random()*2) == 0){
                this.height = (circumference + Math.sqrt(Math.pow(circumference,2)-16*area))/4;
                this.width = (circumference - Math.sqrt(Math.pow(circumference,2)-16*area))/4;
            }
            else if(Math.floor(Math.random()*2) == 1){
                this.height = (circumference - Math.sqrt(Math.pow(circumference,2)-16*area))/4;
                this.width = (circumference + Math.sqrt(Math.pow(circumference,2)-16*area))/4;
            }
        }
        if((height && hwRatio) && width == undefined ) this.width = height/hwRatio;
        if((height && area) && width == undefined )  this.width = area/height;
        if((height && circumference) && width == undefined )  this.width = (circumference - 2*height) / 2;

        if((width && hwRatio) && height == undefined )  this.height = width * hwRatio;
        if((width && area) && height == undefined ) this.height = area/width;
        if((width && circumference) && height == undefined ) this.height = (circumference - 2*width) / 2;
        
        if(this.cx == undefined) this.cx = 0;
        if(this.cy == undefined) this.cy = 0;
        if(this.height == undefined) this.height = 1;
        if(this.width == undefined) this.width = 1;
    }
}
var k = new prostokat({cx: 1, cy: 1, width: 1, height: 1, left: 1, right: 1, top: 1, bottom: 1, hwRatio: 1, area: 1, circumference: 1, });
console.log(k);
var k = new prostokat({width: 5, height: 3, left: 2, right: 4, top: 8, area: 25, circumference: 30, });
console.log(k);
var k = new prostokat({area: 25, circumference: 30});
console.log(k);
var k = new prostokat({cx: 5, height: 1, left: 1, right: 1, top: 1, bottom: 5, circumference: 17, });
console.log(k);