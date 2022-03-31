function Fibo(){
    this.a = 0;
    this.b = 1;
}
Fibo.prototype.next = function(){
    let current = this.a;
    this.a = this.b;
    this.b = current + this.b;
    return {value : BigInt(current), done : false}
}
let z2 = new Fibo();


const limit = 200;
let i = 1;
const limitedInterval = setInterval(() => {
    console.log(` ${i++} : ${z2.next().value} `);
    if (i > limit) {
      clearInterval(limitedInterval);
      console.log('interval cleared!');
    }
}, 500);