Array.prototype.wspak = function* (){
    let n = this.length - 1;
    for(let i = n; i >= 0; i--){
       yield this[i];
    }
}

let tab_wspak = [1,2,3,4,5].wspak()

for(let elemet of tab_wspak)
    console.log(elemet);