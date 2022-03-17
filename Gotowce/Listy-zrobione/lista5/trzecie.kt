open class Prostokat(var a: Double, var b: Double) {
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

class Plakat(a: Double = 21.0, b: Double = 29.7, var kolor: String = "kremowy", var tekst: String = "Witaj"): Prostokat(a, b){
    override fun toString()= "'$tekst' (plakat $a x $b w kolorze $kolor)"
}
fun main(args: Array<String>) {
    var pro = listOf(Prostokat(10.1, 1.0), Prostokat(2.0, 1.0), Prostokat(2.5, 2.0), Prostokat(1.0, 3.0), Plakat(tekst="Kotlin rulez!"), Plakat(a = 30.0), Plakat(kolor="czerwony"))
    
    println(pro.sortedBy{it.pole})
    println(pro.sortedBy{it.obw})
    println(pro.sortedBy{it.przekatna})
    println(pro.sortedBy{it.a})
    println(pro.sortedBy{it.b})
}