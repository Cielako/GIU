// function zakres(a,b){this.a=a;this.b=b}
// zakres.prototype[Symbol.iterator]=
//     function*(){
//         for(let i=this.a;i<=this.b;i++) yield i;
//     }
// zakres.prototype[Symbol.toPrimitive]=
//     function(hint){return hint=="number"?
//         (this.a+this.b)*(this.b-this.a+1)/2 : this.a+"..."+this.b;}
//z=new zakres(10,15); console.log(z);
// for(let x of z)
//     console.log(x);
// console.log("suma("+z+")="+ +z)
// console.log(Array.from(z))

class Zakres {
    constructor(a, b){
        this.a = a;
        this.b = b;
    } 
    name(params) { // można zapisywać metody bez function;
        return 5;
    }
    *[Symbol.iterator]()   //funkcje z * zapisujemy również bez function
    { 
        for(let i=this.a;i<=this.b;i++) 
            yield i;
    }
    *parzyste()   //funkcje z * zapisujemy również bez function
    { 
        for(let i=this.a;i<=this.b;i++) 
            if(i % 2 == 0)
                yield i;
    
    }


    // toString() // ma priorytet dla stringów 
    // {
    //     return this.a + "..." + this.b;
    // }
    // valueOf() // priorytet dla liczb
    // {
    //     return (this.a + this.b) * (this.b - this.a + 1) / 2;
    // }

    [Symbol.toPrimitive](hint) // sprawdza dla nas jakie
    {
        if( hint == "number"){ // sprawdza jakiego typu jest i zwraca wynik w zależności od zapisu 
            return (this.a + this.b) * (this.b - this.a + 1) / 2;
        }
        else
        {
            return this.a + "..." + this.b;
        }
        
    }    
}
z=new Zakres(9,15);

console.log(z); // wyświetla składowe klasy 

for(let x of z)
    console.log(x);
console.log("\nParzyste:");    
for(let x of z.parzyste())
    console.log(x);

console.log("suma("+ z +")="+ +z)
console.log( 1 + Number ("1")+ 1) // zapis + + dotyczy konwersji na liczbę
console.log(Array.from(z))


