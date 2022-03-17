// zad 3 a
let f = (a,b) => b - a;
console.log([1,2,3,271,12313,123,21313,541,42].sort(f));

// zad 3 b
let f = (a,b) => {
    return a%10 - b%10;
};
console.log([1,2,3,271,12313,123,21313,541,42].sort(f));

// zad 3 c
let f = (a,b) => {
    return (a%100 - a%10) - (b%100 - b%10); // przy liczbach mniejszych od 10 uznaje ze liczba ma 0 za cyfre dziesiatek
};
console.log([1,2,3,271,12313,123,21313,541,42].sort(f));

// zad 3 d
let f = (a,b) => {
    let sumaA = 0, sumaB = 0;

    do {
        let cyfraA =  a % 10;   // bierzemy jednosci
        sumaA += cyfraA;        // dodajemy do sumy
        a -= cyfraA;            // odejmujemy bo juz dadalismy do sumy
        a /= 10;                // ucinamy jednosci
    }while(a != 0);

    do {
        let cyfraB =  b % 10; 
        sumaB += cyfraB;       
        b -= cyfraB;
        b /= 10;               
    }while(b != 0);

    return sumaA - sumaB;
};

console.log([1,2,3,271,12313,123,21313,541,42].sort(f));