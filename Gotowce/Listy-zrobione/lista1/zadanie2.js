function suma1()
{
    let s= 0;
    for(let arg of arguments){
        if(typeof arg == 'number')
            s+=arg;
    }
    return s;
}

function suma2()
{
    let s= 0;
    for(let arg of arguments){
        if(typeof arg == 'number')
        s += arg;
        else if(Array.isArray(arg))
        s += suma2(...arg); /// ...arg przyjmuje wartości z tablicy 
    }
    return s;
}


// A
console.log(suma1(1,2,3,10,20,30)); // 66
// B
console.log(suma2(1,2,3,[4,5,"aa"],10,"asda")); // 25
// C
console.log(suma2(1,2,3,[4,5,[5,5]],10)); // 35


