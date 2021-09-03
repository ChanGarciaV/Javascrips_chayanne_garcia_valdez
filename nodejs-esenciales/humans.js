class Humans{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    
    }

    inf(){
        return console.log(this);
    }
}

let Gaurav = new Humans('Gaurav', 24, 'Male');
let Nishi = new Humans('Nishi', 23, 'Female');
Gaurav.inf();
Nishi.inf();