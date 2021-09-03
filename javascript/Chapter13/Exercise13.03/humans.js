class Humans {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  info() {
    return console.log(this);
  }
}

// Encapsulation
class Teacher extends Humans {
  constructor(name, age, gender, subject, grade) {
    super(name, age, gender); // estos parametros se le pasan al padre
    this.subject = subject; // nuevos parametro a construir
    this.grade = grade; // nuevo paramentro a construir
  }
// si no esta esto se va a buscar un info no se ocupa
  info() {
    console.log('Teacher:')
    console.log(this); // el this imprime todas las variables de la clase
  }
}

let Gaurav = new Humans('Gaurav', 24, 'Male');
let Nishi = new Humans('Nishi', 23, 'Female');
let teacher = new Teacher('Gaurav Mehla', 24, 'Male', 'Math', 'A');
Gaurav.info();
Nishi.info();
teacher.info();