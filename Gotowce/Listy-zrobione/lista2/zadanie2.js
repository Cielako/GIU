function Fibo(){
    this.a = 0n;
    this.b = 1n;
}
Fibo.prototype.next=function(){
    let pomoc = this.a;
    [this.a,this.b] = [this.b,this.a+this.b];
    return {done: false, value: pomoc}
}
let z2 = new Fibo();

for(let i=0; i<200; i++){
    console.log(z2.next(i).value);
}
// console.log(z2);