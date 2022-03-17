function* fibonacci(){
    let a = 0n, b = 1n;
    yield 0n;
    yield 1n;
    while(true) {
        yield BigInt(a + b);
        [a, b] = [b, a+b];
    }
}

function* fragment(iter, skip, limit=1){
    for(let i = 0; i < skip + limit; ++i) {
        if(i >= skip)
            yield "i = " + i + " " + iter.next().value;
        else iter.next().value;
    }
}

for(let x of fragment(fibonacci(), 100, 3))
    console.log(x)
