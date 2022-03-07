class Kwadrat {
    constructor(a) { this.a = a; }
    get bok() { return this.a; }
    set bok(a) { this.a = a; }
    get obwod() { return 4 * this.a; }
    set obwod(len) { this.a = len / 4; }
    get pole() { return this.a * this.a; }
    set pole(P) { this.a = Math.sqrt(P); }
    toString() {return `Kwadrat:\na = ${this.bok}\nL = ${this.obwod}\nP = ${this.pole}\n`;}
}

class Kolo {
    constructor(r) {this.r = r;}
    get promien() {return this.r; }
    set promien(r) {this.r = r; }
    get obwod() {return 2 * Math.PI * this.r; }
    set obwod(len) {this.r = (len / 2) / Math.PI; } 
    get pole() {return (Math.pow(Math.PI * this.r, 2)); }
    set pole(p) {return this.r = Math.sqrt(p / Math.PI); }
    get srednica() {return 2 * this.r}
    set srednica(sr) {this.r = sr / 2; }
    toString() {return `Koło\nr = ${this.promien}\nL = ${this.obwod}\nP = ${this.pole}\nŚr=${this.srednica}\n`;}
}

let k = new Kwadrat(1);
k.bok = 12;console.log(k+"");
k.obwód = 12;console.log(k+"");
k.pole=12;console.log(k+"");

let k1 = new Kolo(1);
k1.promien = 12;console.log(k1+"") 
k1.obwod = 12;console.log(k1+"") 
k1.pole = 12;console.log(k1+"") 
k1.srednica = 12;console.log(k1+"") 

//Funkcja licząca całkowite pole i obwód figur
function totalSum()
{
    surf_area = 0;
    circuit_len = 0;

    for (var i = 0; i < arguments.length; i++)
    {
        for(const num_arg of arguments[i])
        {
            surf_area += num_arg.pole;
            circuit_len += num_arg.obwod;
        }
    }
    console.log(`Pole całkowite : ${surf_area}, Obwód całkowity: ${circuit_len}`);
}

fig_array = [new Kolo(1), new Kolo(2), new Kwadrat(3)]
totalSum(fig_array)

