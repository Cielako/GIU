operator fun Int.times(text:String):String{ // Mnożymy Liczbę * String
    var res = ""
    text.forEach {
        var char = it;
        repeat(this){res += char} // powtarza tyle razy ile wynosi liczba przez którą mnożymy
    }
    return res
}

operator fun String.times(times: Int):String { // Mnożymy String * Liczbę
    var res = ""
    this.forEach {
        var char = it;
        repeat(times){res += char} // powtarza tyle razy ile wynosi liczba przez którą mnożymy
    }
    return res
}


fun main() {
    println(3 * "Kot ma Ale ")
    println("Ala ma kota " * 3)
}