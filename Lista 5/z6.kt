class Rozklad(var n:Int = 1){
    var i = 2
    operator fun iterator() = this
    operator fun hasNext() = n > 1
    operator fun next(): Int { while(n % i != 0) i++; n /= i; return i}
}

class Dzielniki(var n:Int = 1){
    var i = 1
    operator fun iterator() = this
    operator fun hasNext()= i <= n
    operator fun next(): Int { 
        // Jeśli liczba nie jest podzielna przez i to zwiększ, jeśli jest to zwróć i, oraz dodaj 1
        while(n % i != 0)
           i++
        return i++ 
    }
}

fun main(){
    print("Rozklad liczby 120 = ")
    for(x in Rozklad(120))
        print(" $x")

    println("\n")

    print("Dzielniki liczby 120 = ")
    for(x in Dzielniki(120))
        print(" $x")

}