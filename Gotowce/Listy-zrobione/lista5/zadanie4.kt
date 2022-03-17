interface Masywny {val masa:Double}

class Osobaa(override val masa:Double, var imie: String):
        Masywny{
            override fun toString() = "$imie o masie $masa"
        }
class Zwierze(override val masa:Double, var gatunek: String):
        Masywny{
            override fun toString() = "$gatunek o masie $masa"
        }
class Bagaz(override val masa:Double):
        Masywny{
            override fun toString() = "Bagaz o masie $masa"
        }
class Auto(override val masa:Double, var marka: String):
    Masywny{
    override fun toString() = "$marka o masie $masa"
}

fun main(){
    var cargo = listOf(
        Osobaa(88.8, "Gracjan"),
        Zwierze(20.0, "Dziobak"),
        Bagaz(14.6),
        Auto(970.0, "BMW"),
        Auto(555.0, "Audi"),
    )
    //A
    println("A - "+cargo.sortedWith(Comparator{
        a, b ->
        when {
            a.masa > b.masa -> -1
            a.masa < b.masa -> 1
            else -> 0
        }
    }))
    //B-1
    println("B1 - suma = "+cargo.fold(0.0, {suma, a -> suma + a.masa}))   // {wynik, dzialanie na wyniku}
    //B-2
    println("B2 - średnia = "+cargo.fold(0.0, {suma, a -> suma + a.masa / cargo.size}))
    //C
    var srednia = cargo.fold(0.0, {suma, a -> suma + a.masa / cargo.size})
    cargo.filter{it.masa > srednia}.forEach{println("C - "+it)}

}