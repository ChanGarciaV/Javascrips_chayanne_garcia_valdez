// OOP Object Oriented Programming

class Animal {
    constructor(categoria) {
        this.categoria = categoria;

    }
}

// aqui inicia una clase
class CuentaBancaria {
    // fuera del contrustor no se pueden crear variables
    // la OOP tiene 4 propiedades, autosuficiente, metodos,constuctor parametros
    // este constructor 
    constructor(saldo=0,tipo = 'M') {
        this.saldo = saldo;
        this.tipo = tipo;
    }
    // esta es una funcion (metodo)
    deposito(cantidad) {
        this.saldo += cantidad;

    }
    retiro(cantidad){
        this.saldo -= cantidad;
    }
}

//Tarjeta de Credito hereda de la clase CuentaBancaria
class TarjetaDeCredito extends CuentaBancaria{
    constructor(s,t,fc="xx/xx/xx", pm=0){
        super(s,t); // con la palabra super pasa los parametros al constructor padre
        this.fechaDeCorte = fc; // los nuevos parametros de constructor asignados
        this.pagoMinimo = pm;
    }

    imprimeFechaDeCorte(){
        console.log(`La fecha de corte es: ${this.fechaDeCorte} `);

    }

    imprimePagoMinimo(){

        console.log(`El pago minumo es: ${this.pagoMinimo} `);
    }
}
// dentro de funciones no detecta el error
// para que diga el numero tiene que estar en primer nivel

let perro = new Animal('perro');
    let gato = new Animal('gato');
    console.log(perro.categoria);
    console.log(gato.categoria);

    let cuenta1 = new CuentaBancaria(5000,'M');
    cuenta1.deposito(2000);
    cuenta1.deposito(4000);
    console.log(cuenta1.saldo);
    cuenta1.retiro(2000);
    console.log(cuenta1.saldo);
    let cuenta2 = new CuentaBancaria(10000,'E');
    console.log(cuenta1.saldo);
    console.log(cuenta1.tipo);
    console.log(cuenta2.saldo);
    console.log(cuenta2.tipo);
    console.log(true)
    let cuenta3 = new CuentaBancaria();
    console.log(cuenta3.saldo);
    console.log(cuenta3.tipo);
    let cuenta4 = new TarjetaDeCredito(20000,'TC',"08/06/2021",1000);
    console.log(cuenta4.saldo);
    console.log(cuenta4.tipo);
    cuenta4.imprimeFechaDeCorte();
    cuenta4.imprimePagoMinimo();
var main = function () {
    // let perro = new Animal('perro');
    // let gato = new Animal('gato');
    // console.log(perro.categoria);
    // console.log(gato.categoria);

    // let cuenta1 = new CuentaBancaria(5000,'M');
    // cuenta1.deposito(2000);
    // cuenta1.deposito(4000);
    // console.log(cuenta1.saldo);
    // cuenta1.retiro(2000);
    // console.log(cuenta1.saldo);
    // let cuenta2 = new CuentaBancaria(10000,'E');
    // console.log(cuenta1.saldo);
    // console.log(cuenta1.tipo);
    // console.log(cuenta2.saldo);
    // console.log(cuenta2.tipo);
    // console.log(true)
    // let cuenta3 = new CuentaBancaria();
    // console.log(cuenta3.saldo);
    // console.log(cuenta3.tipo);
    // let cuenta4 = new TarjetaDeCredito(20000,'TC',"08/06/2021",1000);
    // console.log(cuenta4.saldo);
    // console.log(cuenta4.tipo);
    // cuenta4.imprimeFechaDeCorte();
    // cuenta4.imprimePagoMinimo();

}

main();