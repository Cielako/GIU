class Osoba(var imie:String, var nazwisko: String){
    override fun toString()="$imie $nazwisko"
}
var osoby=listOf(
    Osoba("Jan","Kowalski"),
    Osoba("Ewa","Nowak"),
    Osoba("Artur","Kowalski"),
    Osoba("Adam","Nowak")
)
fun main() {

    //A
    println(osoby.sortedBy {it.imie})
    //B
    println(osoby.sortedWith(Comparator<Osoba>{
        x, y ->
            when {
                x.imie > y.imie -> 1
                x.imie < y.imie -> -1
                else -> 0
            }
    }))
    //C
    println(osoby.sortedWith(Comparator<Osoba>{
            x, y ->
        when {
            x.nazwisko > y.nazwisko -> 1
            x.nazwisko < y.nazwisko -> -1
            x.imie > y.imie -> 1
            x.imie < y.imie -> -1
            else -> 0
        }
    }))
    //D
    println(osoby.sortedBy {it.nazwisko+" "+it.imie})

}