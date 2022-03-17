fun gcd(a:Int,b:Int):Int{
    var a2 = a
    var b2 = b
    while(a2!=0 && b2!=0) {
        if(a2>b2) a2%=b2
        else b2%=a2
    }
    return a2+b2
}
data class Ułamek(var licznik:Int=0, var mianownik:Int=1){
    init{
        val x=gcd(Math.abs(licznik),mianownik)
        licznik/=x
        mianownik/=x
    }

    override fun toString()="$licznik/$mianownik"
    operator fun times(u:Ułamek)=Ułamek(licznik*u.licznik,mianownik*u.mianownik)     // mnożenie ułamek razy ułamek
    operator fun div(u:Ułamek)=Ułamek(licznik*u.mianownik, mianownik*u.licznik)      // dzielenie ułamek przez ułamek
    operator fun plus(u:Ułamek)=Ułamek(licznik*u.mianownik+mianownik*u.licznik, mianownik*u.mianownik) // dodawanie ułamków
    operator fun minus(u:Ułamek)=Ułamek(licznik*u.mianownik-mianownik*u.licznik,mianownik*u.mianownik) // odejmowanie ułamków
    operator fun unaryMinus()=Ułamek(-licznik, mianownik)   // zamienia wszystkie ujemne wartości na dodatnie
    operator fun unaryPlus()=this
    operator fun times(u:Int):Ułamek=this*Ułamek(u) // mnożenie liczby całkowitej i ułamka
    operator fun div(u:Int):Ułamek=this/Ułamek(u) // dzielenie liczby całkowitej i ułamka
    operator fun plus(u:Int):Ułamek=this+Ułamek(u) // dodawanie liczby całkowitej i ułamka
    operator fun minus(u:Int):Ułamek=this-Ułamek(u) // odejmowanie liczby całkowitej i ułamka
}
//operator fun Int.times(u:Ułamek):Ułamek=Ułamek(this,1)*u  // mnożenie ułamka i liczby całkowitej
operator fun Int.times(u:Ułamek):Ułamek=Ułamek(this*u.licznik,u.mianownik)  // mnożenie ułamka i liczby całkowitej
operator fun Int.plus(u:Ułamek):Ułamek=Ułamek(this,1)+u   //dodawanie ułamka i liczby całkowitej
operator fun Int.minus(u:Ułamek):Ułamek=Ułamek(this,1)-u  // odejmowanie ułamka i liczby całkowitej
operator fun Int.div(u:Ułamek):Ułamek=Ułamek(this,1)/u    // dzieleni ułamka i liczby całkowitej

fun main() {
    var a = Ułamek(2, 5)
    var b = Ułamek(3, 10)
    println("a=$a")
    println("b=$b")
    println("$a * $b = ${a * b}")
    println("$a / $b = ${a / b}")
    println("$a + $b = ${a + b}")
    println("$a - $b = ${a - b}")
    println("$a + 4 = ${a + 4}")
    println("$a - 4 = ${a - 4}")
    println("$a * 4 = ${a * 4}")
    println("$a / 4 = ${a / 4}")
    println("4 + $a = ${4 + a}")
    println("4 - $a = ${4 - a}")
    println("4 * $a = ${4 * a}")
    println("4 / $a = ${4 / a}")
}