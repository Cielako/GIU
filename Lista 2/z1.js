function* fibonacci() {
    let fn1 = 0;
    let fn2 = 1;
    while (true) {
      let current = fn1;
      fn1 = fn2;
      fn2 = current + fn1;
      let reset = yield BigInt(current);
      if (reset) {
          fn1 = 0;
          fn2 = 1;
      }
    }
}
  

let sequence = fibonacci();
const limit = 200;
let i = 1;
const limitedInterval = setInterval(() => {
    console.log(` ${i++} : ${sequence.next().value} `);
    if (i > limit) {
      clearInterval(limitedInterval);
      console.log('interval cleared!');
    }
}, 500);