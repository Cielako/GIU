function* fibonacci() {
    let fn1 = 0;
    let fn2 = 1;
    while (true) {
      let current = fn1;
      fn1 = fn2;
      fn2 = current + fn1;
      yield BigInt(current);
    }
}
function* fragment(iter, skip, limit){
    for(let i of iter){
        if(skip == 0){
            if(limit == 0)
                break;
            else if(limit < 0)
                break;
            else{
                yield i;
                limit--;
            }     
        }
        else if(skip < 0){
            skip = 0;
        }
        else{
            console.log(`elementy do pominięcia: ${skip} `);
            skip--;
        }
    }
}

for(let fib of fragment(fibonacci(), 1, 10)) 
    console.log(fib);