class Kolo{
    constructor(r){
        this.r = r;
    }
    get pole() {
        return this.r * this.r * Math.PI;
    }
    set pole(n) {
        this.r = Math.sqrt(n / Math.PI);
    }
    
    get srednica() {
        return 2 * this.r;
    }
    set srednica(n) {
        this.r = n / 2;
    }

    get promien() {
        return this.r;
    }
    set promien(n) {
        this.r = n;
    }

    get obwod() {
        return this.r * 2 * Math.PI;
    }
    set obwod(n) {
        this.r = n / (2 * Math.PI);
    }
}

let k1 = new Kolo(3);
console.log(k1.r, k1.pole, k1.obwod);
k1.pole = 12;
console.log(k1.r, k1.pole, k1.obwod);
k1.obwod = 12;
console.log(k1.r, k1.pole, k1.obwod);
