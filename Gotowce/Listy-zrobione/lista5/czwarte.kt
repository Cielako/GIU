interface Masywny {
    val masa: Double
}

class Osoba(override val masa:Double): Masywny{
    
    override fun toString() = "Osoba o masie $masa"
}
class Zwierze(override val masa:Double): Masywny {
    override fun toString() = "Zwierze o masie $masa"
}
class Bagaz(override val masa:Double): Masywny {
    override fun toString() = "Bagaz o masie $masa"
}
class Auto(override val masa:Double): Masywny {
    override fun toString() = "Auto o masie $masa"
}
fun main(args: Array<String>) {
    var cargo = listOf(Osoba(53.4), Auto(704.9), Bagaz(25.0), Auto(1090.1), Zwierze(310.5), Osoba(87.2))
    
    println("Podpunkt A " + cargo.sortedWith{ a, b -> b.masa.compareTo(a.masa) } )
    println("Podpunkt A " + cargo.sortedByDescending{it.masa})
    
    println("Podpunkt B Łączna masa: " + cargo.fold(0.0, {suma, b -> suma + b.masa}))
    println("Podpunkt B Średnia masa: " + cargo.fold(0.0, {suma, b -> suma + b.masa}) / cargo.size)
    
    println("Podpunkt C ")
    var sr_masa = cargo.fold(0.0, {suma, b -> suma + b.masa}) / cargo.size
    cargo.filter {it.masa > sr_masa}.forEach{ println(it) }
}