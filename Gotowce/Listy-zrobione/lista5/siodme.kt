fun rozklad(n: Int = 1, doing: (Int) -> Unit){
    var i = 2
    var dz = n
    while(dz > 1) {
        if(dz % i == 0){
            dz /= i
            doing(i)
        }
        else i++
    }
}

fun dzielniki(n: Int = 1, doing: (Int) -> Unit){
    var i = 0
    do {
        ++i
        if(n % i == 0)
            doing(i)
    } while(i != n)
}

fun main(){
    print("Rozkład: 144 => ")
    rozklad(144, { print(" $it") })
    print("\nDzielniki: 144 => ")
    dzielniki(144, { print(" $it") })
    
    print("\n suma tych dzielników: ")
    var suma = 0
    val a = 144
    dzielniki(a, { 
        suma += it
        if(it == a) println(suma)
    })
}