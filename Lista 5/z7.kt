fun Rozklad(n: Int, operations: (Int) -> Unit){
    var liczba = n;
    var i = 2;
    while (i <= liczba)
        if(liczba % i != 0)
            i++
        else {
            operations(i)
            liczba /= i
        }
}

fun Dzielniki(n: Int, operations: (Int) -> Unit){
    var liczba = n;
    var i = 1;
    while (i <= liczba)
        if(liczba % i != 0)
            i++
        else {
            operations(i++)
        }
}


fun main() {
    print("Rozklad liczby 120 =")
    Rozklad(120){print(" $it")}
    println("\n")
    print("Dzielniki liczby 120 =")
    Dzielniki(120){print(" $it")}
}