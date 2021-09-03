class Persona{
    constructor(nombre,apPaterno, ApMaterno, email)
    {
        this.nombre = nombre;
        this.apPaterno = apPaterno;
        this.ApMaterno = ApMaterno;
        this.email = email;
    }
    imprimePersona = function(){
        console.log(this);
    }
}


let persona1 = new Persona("Chayanne","Garcia","Valdez","chayanne@gmail.com");
persona1.imprimePersona();
let persona2 = new Persona("Marycruz","Blas","Hernandez","mary@gmail.com");
persona2.imprimePersona();
let persona3 = new Persona("Exxon","Garcia","Valdez","exxon@gmail.com");
persona3.imprimePersona();

let personas = []; // creamos un arreglo en blanco
personas.push(persona1);
personas.push(persona2);
personas.push(persona3);

console.log(JSON.stringify(personas)); // pasamos el objeto a formato JSON

var persona4 =   '{"nombre": "Exxon","apPaterno": "Garcia","ApMaterno": "Valdez","email": "exxon@gmail.com"}';
console.log("Imprimiendo la validación");
console.log(JSON.parse(persona4)); // valida si una cadena contiene JSON