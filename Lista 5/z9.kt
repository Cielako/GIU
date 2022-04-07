fun gcd(a: Int, b: Int): Int{
    var a1 = a
    var b1 = b
    while (a1 != b1) {
        if (a1 > b1)
            a1 -= b1
        else
            b1 -= a1
    }
    return a1
}
data class Ułamek(var licznik:Int=0, var mianownik:Int=1){
    init{
        val x=gcd(Math.abs(licznik),mianownik)
        licznik /= x
        mianownik /= x
    }
    override fun toString()="$licznik/$mianownik"
    operator fun plus(u:Ułamek) = Ułamek(licznik * u.mianownik + mianownik * u.licznik, mianownik * u.mianownik) // Dodajemy ułamki
    operator fun minus(u:Ułamek)= Ułamek(licznik * u.mianownik - mianownik * u.licznik, mianownik * u.mianownik) // Odejmujemy ułamki
    operator fun times(u:Ułamek) = Ułamek(licznik * u.licznik, mianownik * u.mianownik) // Wymnażamy ułamki
    operator fun div(u:Ułamek) = Ułamek(licznik * u.mianownik, mianownik * u.licznik) // Dzielimy ułamki
    operator fun unaryMinus() = Ułamek(-licznik, mianownik) // zamieniamy liczby ujemne na dodatnie
    operator fun unaryPlus() = this
    operator fun times(u: Int): Ułamek = this * Ułamek(u)   // liczba całkowita * ułamek
    operator fun div(u: Int): Ułamek = this / Ułamek(u)     // liczba całkowita  / ułamek
    operator fun plus(u: Int): Ułamek = this + Ułamek(u)    // liczba całkowita + ułamek
    operator fun minus(u: Int): Ułamek=this - Ułamek(u)     // liczba całkowita - ułamek
}

operator fun Int.plus(u:Ułamek):Ułamek = Ułamek(this,1) + u   // ułamek + liczba całkowita
operator fun Int.minus(u:Ułamek):Ułamek = Ułamek(this ,1) - u // ułamek - liczba całkowita
operator fun Int.times(u:Ułamek):Ułamek = Ułamek(this, 1) * u // ułamek * liczba całkowita
operator fun Int.div(u:Ułamek):Ułamek = Ułamek(this,1) / u // ułamek / liczbe całkowita

fun main()
{
    var a = Ułamek(2,5) // definiujemy nowe ułamki
    var b = Ułamek(3,10)

    println("a = $a")
    println("b = $b")

    println("$a * $b = ${a * b}")
    println("$a / $b = ${a / b}")
    println("$a + $b = ${a + b}")
    println("$a - $b = ${a - b}")

    println("$a + 4 = ${a + 4}")
    println("4 + $a = ${4 + a}")

    println("$a - 4 = ${a - 4}")
    println("4 - $a = ${4 - a}")

    println("$a * 4 = ${a * 4}")
    println("4 * $a = ${4 * a}")

    println("$a / 4 = ${a / 4}")
    println("4 / $a = ${4 / a}")
}
