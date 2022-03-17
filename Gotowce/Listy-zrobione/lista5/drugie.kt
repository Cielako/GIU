// zad 2
class Prostokat(var a: Double, var b: Double) {
    
    var pole: Double
        get() = a * b
        set(value){
            b = Math.sqrt(value)
            a = b
        }
    var obw: Double
        get() = 2 * (a + b)
        set(value){
            b = value / 4
            a = b
        }
    val przekatna: Double
        get() = Math.sqrt(a * a + b * b)
    
    override fun toString() = "Prostokat: $a x $b"
        
}

fun main(args: Array<String>) {
    var pro = listOf(Prostokat(10.1, 1.0), Prostokat(2.0, 1.0), Prostokat(2.5, 2.0), Prostokat(1.0, 3.0))
    // podpunkt a
    for(p in pro) println(p.toString())
    println()
    
    // podpunkt b
    pro.forEach { println( it.toString() ) }
    println()
    
    // podpunkt c
    println(pro.sortedBy{it.pole})
    println(pro.sortedBy{it.obw})
    println(pro.sortedBy{it.przekatna})
    println(pro.sortedBy{it.a})
    println(pro.sortedBy{it.b})
}