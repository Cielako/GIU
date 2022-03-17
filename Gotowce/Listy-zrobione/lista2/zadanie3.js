function* fibonacci() {
    var a = 0n;
    var b = 1n;
    while(true){
        yield a;
        [a,b] = [b,a+b];
    }
}

// function* fragment(iter, skip, limit=1){
//     let i = 0;
//     let j = 0;
//     while(true){
//         if(i>=skip){
//             if(j < limit)
//                 yield iter.next(j++).value;
//             if(j == limit) break;
//         }
//         else iter.next(i);
//         i++;
//     }
// }

function* fragment(iter, skip, limit=1){
    for(let n of iter){
        if(skip!=0){
            skip--;
        }
        else if(limit!=0){
            yield n;
            limit--;
        }
        if(limit==0) break;
    }
}

for(let x of fragment(fibonacci(),100,3)) console.log(x);