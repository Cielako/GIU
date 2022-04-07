/* Interfejsy mogą zawierać deklaracje metod abstrakcyjnych(takich bez implementacji)
   jak i implementacje metod. Różnica pomiędzy klasami abstrakcyjnymi a interfejsami, jest taka
   , że interfejsy nie mogą przechowywać żadnego stanu. Mogą mieć właściwości, ale muszą być
   abstrakcyjne lub zapewnić implementacje akcesorów
*/
interface Masywny {val masa: Double} // val abstrakcyjne

class Osoba(override val masa: Double): Masywny{
    override fun toString() = "Osoba o masie $masa kg"
}
class Zwierze(override val masa: Double): Masywny{
    override fun toString() = "Zwierze o masie $masa kg"
}
class Bagaz(override val masa: Double): Masywny{
    override fun toString() = "Bagaz o masie $masa kg"
}
class Auto(override val masa: Double): Masywny{
    override fun toString() = "Auto o masie $masa kg"
}

fun main(){
    var cargo = listOf(
        Osoba(140.0),
        Zwierze(40.0),
        Bagaz(10.0),
        Auto(1500.0),
        Auto(800.0),
        Zwierze(500.0)
    )
    println("a) " + cargo.sortedByDescending{ it.masa })
    val totalMass = cargo.fold(0.0){sum, element -> sum + element.masa}
    println("b) masa calkowita: " + totalMass)

    val massAvr = cargo.fold(0.0) {sum, element -> sum + element.masa} / cargo.size
    println("b) masa srednia: " + massAvr)

    println("c) elementy powyzej sredniej: ")
    cargo.filter { it.masa > massAvr }.forEach{ println(it)}

}