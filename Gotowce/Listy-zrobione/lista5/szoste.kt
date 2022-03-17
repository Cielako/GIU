class Dzielniki(var n: Int = 1){
    var i = 0
    operator fun iterator() = this
    operator fun hasNext() = n > i
    operator fun next(): Int {
        do ++i while(n % i != 0)
        return i
    }
}
fun main(){
    print("120 = ")
    for(x in Dzielniki(120)) print(" $x")
}