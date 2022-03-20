function zakres(a,b){
    this.a = a;
    this.b = b;
}

zakres.prototype[Symbol.iterator] = function*() {
                                            for(let i = this.a; i <= this.b; i++)
                                                yield i;
                                        };
zakres.prototype[Symbol.toPrimitive] = function(hint) {
                                            return hint == "number" ? (this.a + this.b) * (this.b - this.a + 1) / 2 : this.a + "..." + this.b;
                                        };
z = new zakres(10,15);
console.log(z);
for(let x of z)
    console.log(x);
console.log("suma(" + z + ") = " + +z)
console.log(Array.from(z))