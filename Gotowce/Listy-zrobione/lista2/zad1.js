function* fibonacci(){
    let a = 0n, b = 1n;
    yield 0n;
    yield 1n;
    while(true) {
        yield BigInt(a + b);
        [a, b] = [b, a+b];
    }
}
let fib = fibonacci()[Symbol.iterator]();

for(var i = 0; i < 200; ++i) {
    console.log(i, "  ", fib.next().value);
}