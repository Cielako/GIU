fun rozkład(n:Int = 1, wypluj:(Int)->Unit){
    var dz = 2
    var a = n
    while(a >= dz){
        if(a%dz == 0){
            a/=dz
            wypluj(dz)
        }
        else dz++
    }
}

fun dzielniki(n:Int = 1, wypluj: (Int) -> Unit){
    var dz=1
    val a=n
    while(a>=dz){
        if(a%dz == 0) wypluj(dz++)`
        else dz++
    }
}
fun main(){
    print("rozkład na czynniki liczby 120 =")
    rozkład(120){ print(" $it") }
    println()
    print("suma dzielników liczby 144 = ")
    var suma = 0
    dzielniki(144){suma += it}
    println(suma)

}