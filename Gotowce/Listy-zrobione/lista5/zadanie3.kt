open class prostokatt(var a:Double, var b:Double){

    var pole: Double
        get() = a * b
        set(value){
            a = Math.sqrt(value)
            b = a
        }
    var obwod: Double
        get() = 2*a + 2*b
        set(value){
            a = value/4
            b = a
        }
    val przekatna: Double
        get() = Math.sqrt( a*a + b*b)
        override fun toString() = "Prostokąt o wymiarach $a x $b"
}

class Plakat(a: Double = 10.0,b: Double = 20.0, var kolor:String = "#FFF", var tekst:String = "Witaj!"):
    prostokatt(a,b){
        override fun toString()= "'$tekst' (plakat $a x $b w kolorze $kolor)"
    }


fun main(){

    var lista = listOf(
        prostokatt(5.0,6.0),
        prostokatt(7.0,8.0),
        prostokatt(10.5,7.9),
        prostokatt(8.0,10.0),
        prostokatt(66.0, 11.0),
        Plakat(tekst="Kotlin rulez!"),
        Plakat(kolor="#F00", tekst="Niskie Ceny"),
        Plakat(kolor="#DDD", tekst="Super wycieczka!")
    )
    for( l in lista ) println(l)
    println()
    lista.forEach{println(it)}
    var suma:Double = 0.0
    lista.forEach{suma += it.obwod}
    println(suma)
    println()
    println(lista.sortedBy{it.pole})
    println(lista.sortedBy{it.obwod})
    println(lista.sortedBy{it.przekatna})
    println(lista.sortedBy{it.a})
    println(lista.sortedBy{it.b})
}