operator fun Int.times(text:String):String{
    var wyjscie = ""
    text.forEach {
        var znak = it
        repeat(this){wyjscie+=znak}
    }
    return wyjscie
}
operator fun String.times(times:Int):String{
    var wyjscie = ""
    this.forEach {
        var znak = it
        repeat(times){wyjscie+=znak}
    }
    return wyjscie
}
fun main() {
   // 3*{println("Ala ma kota".forEach { print(3*it.toString()) })}
    println(3*"Ala ma kota")
    println("Ala ma kota"*3)
}