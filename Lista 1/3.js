//a)
function sum_a(){
    var result = 0;
    for (var i = 0; i < arguments.length; i++)
    {
        if(typeof(arguments[i]) != "number")
        {
           // nic nie rób
        }
        else
        {
            result += arguments[i];
        }
    }
    return result;
}
console.log("a) zwracam sumę wszystkich argumentów które są liczbami:",sum_a(1,2,3,10,[],20,30,"marek",{a:4})); // 66

//b)
function sum_b(){
    var result = 0;
    for (var i = 0; i < arguments.length; i++)
    {
        if(typeof(arguments[i]) == "number")
        {
            result += arguments[i];
        }
        else if (Array.isArray(arguments[i]))
        {
            for (const arr_num of arguments[i])
            {
                if (typeof(arr_num) == "number")
                {
                    result += arr_num;
                }
            }
        } 
    }
    return result;
}
console.log("b) zwracam sumę wszystkich argumentów:",sum_b(1,2,3,[4,5,"aa"], 10, "asda")); // 25

//c
function sum_c(...args){
    var result = 0;
    const flatArray = args.flat(Infinity)
    for (var arg of flatArray)
    {   
        if(typeof(arg) == "number"){
            result += arg;
        }
    }
    return result;
}
console.log("c) zwracam sumę wszystkich argumentów w listach zagnieżdżonych:",sum_c(1,2,3,[4,5,[5,5]],10)); // 35


