//A
function* dzielniki(n)
{
    var index = 1;
    while(index <= Math.sqrt(n))
    {
        if(n%index == 0){
            yield index;
            if(index != n/index)
                yield n/index;
            index ++;
        }
        else index++;
    }    
}
// for(let x of dzielniki(15))
//     console.log(x);

//B
function* dzielniki(n)
{
    for(let j = 2; j <= n; j++){
        var index = 1;
        var ile = 2;
        while(index <= Math.sqrt(j))
        {
            if(j%index == 0 && index != 1 && index != j){
                ile++;
                break;
            }
            else index++;
        }    
        if(ile == 2)
            yield j;
    }
}
// for(let x of dzielniki(50))
//    console.log(x);

//C   //działa włączone przez lista2_11C.html
// function* elements(selector)
// {
//     var ile = document.getElementsByTagName(selector);
//     for(let x of ile){
//         yield x;
//     }
// }

// for(let x of elements('p'))
//    console.log(x);