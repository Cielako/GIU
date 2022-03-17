class Osoba(var imie: String, var nazwisko: String){
    override fun toString()="$imie $nazwisko"
}
var osoby = listOf(
    Osoba("Jan","Kowalski"),
    Osoba("Ewa","Nowak"),
    Osoba("Artur","Kowalski"),
    Osoba("Adam","Nowak"))

fun main(args: Array<String>) {
    // podpunkt A
    osoby.sortedBy { it.imie }.forEach { println(it) }


    // podpunkt b
    osoby.sortedWith(Comparator<Osoba>{ a, b ->
        when {
            a.imie > b.imie -> 1
            a.imie < b.imie -> -1
            else -> 0
        }
    }).forEach { println(it) }


    // podpunkt c
    osoby.sortedWith(Comparator<Osoba>{a, b ->
        when {
            a.nazwisko > b.nazwisko -> 1
            a.nazwisko < b.nazwisko -> -1
            a.imie > b.imie -> 1
            a.imie < b.imie -> -1
            else -> 0
        }
    }).forEach { println(it) }


    // podpunkt d
    osoby.sortedBy{ it.imie + " " + it.nazwisko}.forEach{ println(it) }

}