function bigger(a) {
    return (arg) => {return arg > a;}  
}

function smaller(a){
    return (arg) => {return arg < a;}  
}

function between(a, b){
    return (arg) => {return a <= arg && arg <= b;}  
}

console.log([2, 31, 5, 3, 6].filter(bigger(3))); // 31, 5, 6
console.log([2, 31, 5, 3, 6].find(bigger(2))); // 31
console.log([2, 31, 5, 3, 6].findIndex(bigger(4))); // 1
console.log([2, 31, 5, 3, 6].every(bigger(5))); // false
console.log([2, 31, 5, 3, 6].some(bigger(6))); // true

console.log([2, 31, 5, 3, 6].filter(smaller(3))); // 31, 5, 6
console.log([2, 31, 5, 3, 6].find(smaller(2))); // 31
console.log([2, 31, 5, 3, 6].findIndex(smaller(4))); // 1
console.log([2, 31, 5, 3, 6].every(smaller(5))); // false
console.log([2, 31, 5, 3, 6].some(smaller(6))); // true


console.log([2, 31, 5, 3, 6].filter(smaller(3))); // 31, 5, 6
console.log([2, 31, 5, 3, 6].find(smaller(2))); // 31
console.log([2, 31, 5, 3, 6].findIndex(smaller(4))); // 1
console.log([2, 31, 5, 3, 6].every(smaller(5))); // false
console.log([2, 31, 5, 3, 6].some(smaller(6))); // true


