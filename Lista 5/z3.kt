import kotlin.math.*

class Prostokat(var a : Double, var b : Double){

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

    override fun toString() = "Prostokąt ma wymiary $a x $b"
}

fun main(){
    var lista = listOf(
        Prostokat(4.0, 2.0),
        Prostokat(8.0, 3.0),
        Prostokat(6.5, 3.9),
        Prostokat(23.0, 15.0),
        Prostokat(66.0, 18.0),
        Prostokat(1.0, 1.0)
    )

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