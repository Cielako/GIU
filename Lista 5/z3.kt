import kotlin.math.*

open class Prostokat(var a : Double, var b : Double){ // Klasa musi być otwarta, żeby móc z niej dziedziczyć

    var pole: Double
        get() = a * b
        set(value){
            a = sqrt(value)
            b = a;
        }

    var obwod: Double
        get() = 2*a + 2*b
        set(value){
            a = value / 4
            b = a
        }

    val przekatna: Double
        get() = sqrt(a.pow(2.0) + b.pow(2.0));

    override fun toString() = "Prostokat ma wymiary $a x $b"
}
// Dziedziczymy Pola i metody z klasy Prostokat
class Plakat(a: Double = 21.0, b: Double = 29.7, var kolor: String = "#FFF", var tekst: String = "Witaj !"): Prostokat(a, b){
    // Przeciążamy funkcję to String()
    override fun toString() = "'$tekst' (plakat $a x $b w kolorze $kolor)"
}

fun main(){
    val lista = listOf(
        Prostokat(4.0, 2.0),
        Prostokat(8.0, 3.0),
        Prostokat(6.5, 3.9),
        Prostokat(23.0, 15.0),
        Prostokat(66.0, 18.0),
        Prostokat(1.0, 1.0),
        Plakat(tekst="Kotlin rulez!"),
        Plakat(kolor = "#DA0", tekst="Kotlin challange"),
        Plakat(kolor = "#FA2", tekst="Kotlin TEST"))

    // a)
    for( l in lista ) {
        println(l.toString())
    }
    println("\n");
    // b)
    lista.forEach{println(it.toString())}

    //sortedBy
    println("\n")
    println(lista.sortedBy{it.pole})
    println(lista.sortedBy{it.obwod})
    println(lista.sortedBy{it.przekatna})
    println(lista.sortedBy{it.a})
    println(lista.sortedBy{it.b})
}
