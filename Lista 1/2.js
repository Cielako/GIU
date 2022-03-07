
function fa(a, b) {
    return b - a;
}
console.log("a) sotruję malejąco",[1,2,3,271,12313,123,21313,541,42].sort(fa))

function fb(a, b) {
    return a % 10 - b % 10;  
}
console.log("b) sotruję cyfry jedności",[1,2,3,271,12313,123,21313,541,42].sort(fb))

function fc(a, b) {
    if(a >= 10 || b >= 10){
        return a % 100 - b % 100;  
    }
}
console.log("c) sotruję cyfry dziesiątek", [1,2,3,271,12313,123,21313,541,42].sort(fc))


function fd(a, b) {
    var result = 0;
    var sum_of_A = 0;
    var sum_of_B = 0;
    while(a) // działa dopóki a = 0;
    {
        sum_of_A += a % 10;
        a = Math.floor(a / 10);
    }

    while(b) // działa dopóki b = 0
    {
        sum_of_B += b % 10;
        b = Math.floor(b / 10);
    }
    result = sum_of_A - sum_of_B;
    return result;
    
}
console.log("d) sotruję po sumie cyfr", [2,1,3,271,12313,123,21313,541,42].sort(fd))
