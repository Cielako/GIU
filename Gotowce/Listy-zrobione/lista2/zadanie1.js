function* fibonacci() {
    var a = 0n;
    var b = 1n;
    while(true){
        yield a;
        [a,b] = [b,a+b];
    }
}

var wyraz = fibonacci()[Symbol.iterator](); // [Symbol.iterator]() chyba nie jest potrzebne  

for(let i=0;i<200;i++){
    console.log(wyraz.next(i).value);
}

// let i = 0;
// for(let wyr of wyraz){
//     if(i > 200) break;
//     console.log(wyr);
//     i++;
// }

