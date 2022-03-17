//class Rozkład(var n:Int=1){
//    var i=2
//    operator fun iterator()=this
//    operator fun hasNext()=n>1
//    operator fun next():Int { while(n%i!=0) i++; n/=i; return i}
//}

class Dzielniki(var n:Int=1){
    var dz=1
    operator fun iterator()=this
    operator fun hasNext()= n > dz
    operator fun next():Int {
        while( n%dz != 0 ) {
            dz++
        }
        return dz++
    }
}

fun main(){
    print("120=")
    for(x in Dzielniki(120))
        print(" $x")
}