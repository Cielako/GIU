class Koło
{
    constructor(R){
        this.promień = R;
    }

    set średnica(R){
        this.promień = R/2;
    }
    set pole(R){
        this.promień = Math.sqrt(R/Math.PI);
    }
    set obwód(R){
        this.promień = R/(2*Math.PI);
    }

    get średnica(){
        return this.promień*2;
    }
    get pole(){
        return Math.PI*Math.pow(this.promień,2);
    }
    get obwód(){
        return 2*Math.PI*this.promień;
    }
}

var k=new Koło(3);
console.log(k.promień, k.średnica, k.pole, k.obwód);

k.promień = 8;
console.log(k.promień, k.średnica, k.pole, k.obwód);

k.średnica = 10;
console.log(k.promień, k.średnica, k.pole, k.obwód);

k.pole = 4;
console.log(k.promień, k.średnica, k.pole, k.obwód);

k.obwód = 7;
console.log(k.promień, k.średnica, k.pole, k.obwód);