operator fun Int.times(text: String):String{
    var output = ""
    text.forEach {
        var char = it
        repeat(this){ output += char }
    }
    return output
}

fun main() {
    // println("Ala ma kota".forEach { println(it)})
    println(3*"Ala ma kota")
}