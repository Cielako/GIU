console.log([1,2,3,271,12313,123,21313,541,42].sort((a,b)=>b-a));
console.log([1,2,3,271,12313,123,21313,541,42].sort((a,b)=>a%10-b%10));
console.log([1,2,3,271,12313,123,21313,541,42].sort((a,b)=>(a%100-a%10)-(b%100-b%10)));
console.log([1,2,3,271,12313,123,21313,541,42].sort(f));

function f(a,b)
{
    let sumA = 0;
    let sumB = 0;
    var aa = a;
    var bb = b;
    let dzielnik = 10;
    for(let i=0; i<String(a).length;i++)
    {
        sumA += aa%dzielnik;
        aa = (aa - aa%dzielnik) / dzielnik;
    }
    dzielnik = 10;
    for(let i=0; i<String(b).length;i++)
    {
        sumB += bb%dzielnik;
        bb = (bb - bb%dzielnik) / dzielnik;
    }
    return sumA-sumB;
}