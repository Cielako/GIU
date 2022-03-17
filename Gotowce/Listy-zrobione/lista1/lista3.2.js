// 2 a
function suma() {
    let suma = 0;
    for(let x of arguments) {
        if(typeof x == "number") {
            suma += x;
        }
    }
    return suma;
}
console.log(suma(1,2,3,10,20,30));

// 2 b i c
function sumowanie() {
    let suma = 0;
    for(let x of arguments) {
        if(typeof x == "number") {
            suma += x;
        }
        else if(Array.isArray(x)){
            suma += sumowanie(...x);
        }
    }
    return suma;
}
console.log("B ", sumowanie(1,2,3,[4,5,"aa"], 10,20,30)); // b
console.log("C ", sumowanie(1,2,3,[4,5,[5,5]],10));       // c