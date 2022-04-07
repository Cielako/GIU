fun main(){
    class Osoba(var imie:String, var nazwisko:String){
        override fun toString()= "$imie $nazwisko"
    }
    
    var osoby = listOf(
        Osoba("Jan","Kowalski"),
        Osoba("Ewa","Nowak"),
        Osoba("Artur","Kowalski"),
        Osoba("Adam","Nowak")
        )

    // a)
    println("\nPodpunkt a)")    
    val sortedImie = osoby.sortedBy {it.imie}
    sortedImie.forEach{println(it)}
    
    // b)
    println("\nPodpunkt b)") 
    val sortedImie2 = osoby.sortedWith(compareBy<Osoba> {it.imie})
    sortedImie2.forEach{println(it)}

    // c)
    println("\nPodpunkt c)") 
    val sortedNazwiskoImie = osoby.sortedWith(compareBy<Osoba> {it.nazwisko}.thenBy{it.imie})
    sortedNazwiskoImie.forEach{println(it)} 

    // d)
    println("\nPodpunkt d)")    
    var sortedNazwiskoImie2 = osoby.sortedBy{it.nazwisko + it.imie}  
    sortedNazwiskoImie2.forEach{println(it)}
    

} 