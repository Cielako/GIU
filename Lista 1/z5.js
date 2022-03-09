// a)
function* dzielniki(n)
{   
    var dzielnik = 1;
    while(dzielnik <= n)
    {   
        if(n % dzielnik === 0) // === żeby sprawdzić czy typ wpisanej zmiennej jest taki sam
        {
            yield dzielnik; // zwraca dzielnik jeśli spełnia warunek
        }
        dzielnik++;
    }
}
//b)
function czy_pierwsza(n)
{   
    for(var i = 2; i < n; i++) // zaczynamy od 2 żeby w momencie kiedy otrzymamy 2 na wejściu pętla się nie wykona bo i < n
    {
        if(n % i === 0) 
        {
            return false;
        }
    }
    return n > 1; // korzystamy z faktu, że każda liczba dzieli się przez 1, jeśli n > 1 to liczba jest pierwsza
}

function * pierwsze(n)
{   // zakładając, że liczby mają być nie większe od n to jeśli n będzie liczbą pierwszą to nie zostanie wypisana, chyba, że warunek w pętli będzie i <= n
    for(var i = 1; i < n; i++ ) 
    {
        if(czy_pierwsza(i))
        {
            yield i;
        }
    }
}

//c
function * rozklad(n)
{
    var gen = pierwsze(n);
    var tab = Array.from(gen);
    var len = tab.length;
    while (n > 1)
    {
        for(var i = 0; i <= len; i++)
        {
            if(n % tab[i] == 0)
            {
                n /= tab[i];
                yield tab[i];
            }            
        } 
    }
}



function wypisz(gen)
{
    for (let x of gen)
    {
        console.log(x) ;
    }
}

function wypisz2(gen)
{
    while (!(x = gen.next()).done)
    {
        console.log(x.value);
    }
}

function sklej(gen, glue=",")
{
    console.log(Array.from(gen).join(glue));
}

function suma(gen)
{
    console.log(Array.from(gen).reduce((sum, x) => sum + x));
}

function iloczyn(gen)
{
    console.log(Array.from(gen).reduce((multiply, x) => multiply * x));
}

// test a)
console.log("zad 5 a):");
var gen1 = dzielniki(10);
var gen2 = dzielniki(10);
var gen3 = dzielniki(10);
var gen4 = dzielniki(10);
var gen5 = dzielniki(10);
var gen6 = dzielniki(10);

console.log("Tablica:",Array.from(gen1));
console.log("Wypisz1:"); 
wypisz(gen2);
console.log("Wypisz2:"); 
wypisz2(gen3);
console.log("sklej:"); 
sklej(gen4);
console.log("suma:"); 
suma(gen5);
console.log("iloczyn:"); 
iloczyn(gen6);

// test b)
console.log("\nzad 5 b):");
var gen7 = pierwsze(99);
var gen8 = pierwsze(10)
var gen9 = pierwsze(99);
var gen10 = pierwsze(10)
var gen11 = pierwsze(99);
var gen12 = pierwsze(10)

console.log("Tablica:",Array.from(gen7));
console.log("Wypisz1:"); 
wypisz(gen8);
console.log("Wypisz2:"); 
wypisz2(gen9);
console.log("sklej:"); 
sklej(gen10);
console.log("suma:"); 
suma(gen11);
console.log("iloczyn:"); 
iloczyn(gen12);

// test c)
console.log("\nzad 5 c):");
var gen13 = rozklad(99);
var gen14 = rozklad(10)
var gen15 = rozklad(99);
var gen16 = rozklad(10)
var gen17 = rozklad(99);
var gen18 = rozklad(4)

console.log("Tablica:",Array.from(gen13).flat());
console.log("Wypisz1:"); 
wypisz(gen14);
console.log("Wypisz2:"); 
wypisz2(gen15);
console.log("sklej:"); 
sklej(gen16);
console.log("suma:"); 
suma(gen17);
console.log("iloczyn:"); 
iloczyn(gen18);


