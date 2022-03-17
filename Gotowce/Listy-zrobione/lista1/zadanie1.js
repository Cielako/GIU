function bigger(a)
{
    return (x)=>x>a;
}

console.log([2,31,5,3,6].filter(bigger(3))); // 31, 5, 6


function between(a,b)
{
    return (x)=>x>=a && x<=b;
}

console.log([2,31,5,3,6].filter(between(3,31))); // 31, 5, 6
