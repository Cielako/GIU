
// 2.11 a
function* dzielniki(n) {
    let dzielnikiN = 0;
    while (dzielnikiN < n) {
        if(n % dzielnikiN == 0)
            yield dzielnikiN;
        dzielnikiN++;
    }
}

for(let x of dzielniki(24))
    console.log(x);

// 2.11 b
function* pierwsze(n) {
    let liczba = 0;
    let kw = Math.sqrt(n);
    let tliczby = [];

    for(let i = 0; i < n; i++){
        tliczby[i] = i;
    }

    tliczby[1] = 0;
    for(let i = 2; i < kw; i++){
        let j = i * 2;
        if(tliczby[i] != 0){
            while(j < n){
                tliczby[j] = 0;
                j += i;
            }
        }
    }

    for (let l = 0; l < n; l++) {
        if(tliczby[l] != 0)
            yield tliczby[l];
    }
}

for(let x of pierwsze(50))
    console.log(x);

    