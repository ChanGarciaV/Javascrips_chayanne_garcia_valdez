class FigurasGeometrica{
    constructor(base = 0, altura = 0){
        this.base = base;
        this.altura = altura;
        this.resultado=0;
    }
}

// primera clase deribada de FigurasGeometrica

class Triangulo extends FigurasGeometrica{
    calcularArea(){
        this.resultado=  (this.base * this.altura)/2;
        console.log('Resultado de triangulo:' + this.resultado);
    }
}

class Cuadrado extends FigurasGeometrica{
    constructor(lado){
        super(); // solo para que no marque error
        // en java solo puedes tener 1 solo constructor
        this.lado = lado;
    }
    calcularArea(){
        this.resultado = this.lado* this.lado;
        console.log('Resultado de cuadrado: '+ this.resultado);
    }
}

class Rectangulo extends FigurasGeometrica{
    calcularArea(){
        this.resultado= this.base*this.altura;
        console.log('Resultado de rectangulo:' + this.resultado);
    }
}


let triangulo = new Triangulo(2,4);
triangulo.calcularArea();
let cuadrado = new Cuadrado(4);
cuadrado.calcularArea();
let rectangulo = new Rectangulo(2,4);
rectangulo.calcularArea();
