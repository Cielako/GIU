Array.prototype.wspak=function*(){
    for(let x = this.length-1;x>=0;x--){
        yield this[x];
    }
}
for(let x of [2,3,4,5].wspak()) console.log(x);