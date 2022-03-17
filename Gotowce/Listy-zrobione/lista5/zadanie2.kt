import kotlin.math.sqrt

open class Prostokat(var a:Double, var b:Double){

    var pole: Double
        get() = a * b
        set(value){
            a = sqrt(value)
            b = a
        }
    var obwod: Double
        get() = 2*a + 2*b
        set(value){
            a = value/4
            b = a
        }
    val przekatna: Double
        get() = sqrt( a*a + b*b)
    override fun toString() = "Prostokąt o wymiarach $a x $b"
}
fun main(){

    var lista = listOf(
        Prostokat(5.0,6.0),
        Prostokat(7.0,8.0),
        Prostokat(10.5,7.9),
        Prostokat(8.0,10.0),
        Prostokat(66.0, 11.0)
    )

    for( l in lista ) println(l.toString())
    println()
    println(lista.forEach{it.toString()})
    println()
    println(lista.sortedBy{it.pole})
    println(lista.sortedBy{it.obwod})
    println(lista.sortedBy{it.przekatna})
    println(lista.sortedBy{it.b})
    println(lista.sortedBy{it.a})

}