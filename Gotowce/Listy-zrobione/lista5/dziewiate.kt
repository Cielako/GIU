fun gcd(ainput: Int, binput: Int): Int{
    // funkcja skracajaca
    var a = ainput
    var b = binput
	while(true){
        a %= b
        if (a == 0) return b
        
        b %= a
        if (b == 0) return a
    }
}

data class Ułamek(var licznik: Int = 0, var mianownik: Int = 1){
	init{
		val x = gcd(Math.abs(licznik), mianownik)
		licznik /= x
		mianownik /= x
	}
	
    // np (3/5) * (3/5)
	override fun toString() = "$licznik/$mianownik"
	operator fun times(u: Ułamek) = Ułamek(licznik * u.licznik, mianownik * u.mianownik)
	operator fun div(u: Ułamek) = Ułamek(licznik * u.mianownik, mianownik * u.licznik)
	operator fun plus(u: Ułamek) = Ułamek(licznik * u.mianownik + mianownik * u.licznik, mianownik * u.mianownik)
	operator fun minus(u: Ułamek) = Ułamek(licznik * u.mianownik - mianownik * u.licznik, mianownik * u.mianownik)
	operator fun unaryMinus() = Ułamek(-licznik, mianownik)
	operator fun unaryPlus() = this
    
    // np (3/5) * 2
	operator fun times(u: Int): Ułamek = this * Ułamek(u)
	operator fun div(u: Int): Ułamek = this / Ułamek(u)
	operator fun plus(u: Int): Ułamek = this + Ułamek(u)
	operator fun minus(u: Int): Ułamek = this - Ułamek(u)
}
// np 2 * (3/5)
operator fun Int.times(u: Ułamek): Ułamek = Ułamek(this, 1) * u
operator fun Int.plus(u: Ułamek): Ułamek = Ułamek(this, 1) + u
operator fun Int.minus(u: Ułamek): Ułamek = Ułamek(this, 1) - u
operator fun Int.div(u: Ułamek): Ułamek = Ułamek(this, 1) / u

fun main() {
	var a = Ułamek(2, 55)
	var b = Ułamek(3, 10)
	println("$a = $a")
	println("b = $b")
    
	println("$a * $b = ${a*b}")
	println("$a / $b = ${a/b}")
	println("$a + $b = ${a+b}")
	println("$a - $b = ${a-b}")
    
	println("$a + 4 = ${a+4}")
	println("$a - 4 = ${a-4}")
	println("$a * 4 = ${a*4}")
	println("$a / 4 = ${a/4}")
    
	println("4 + $a = ${4+a}")
	println("4 - $a = ${4-a}")
	println("4 * $a = ${4*a}")
	println("4 / $a = ${4/a}")
}