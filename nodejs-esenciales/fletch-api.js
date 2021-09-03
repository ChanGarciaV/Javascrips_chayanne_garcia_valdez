
// sirve para hacer conexiones más rapidas por https
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())  // lo obtenermos en una variable response el . json es para indicar que lo queremos en formato json
    .then(json => console.log(json)) // en una variable json asignamos y imprimimos el json

fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify({
        title: "Wash the dishes",
        complete: false
    }),
    headers: {
        "Content-type": "application/json"
    }
})
    .then(response => response.json())
    .then(json => console.log(json))

    // para llamar los datos tiene que ser de forma asincrona para utilizar el then y que la promesa pueda devolver los datos
async function getUser(id) { // tiene que ir afuersa un async para funciones acincronas
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if(response.ok)
    {

    }
    else{
        throw Error(response.status);
    }
    let data = await response.json()
    return data;
} // esto es una funcion asincrona con el await y el then se espera a que de los resultados

let data = getUser(5);
// esta forma solo da un mensaje que que hay una promesa pero no resuelta
console.log(`datos: ${data}`); // si obtenemos el resultado con sincrono no podemos acceder al resultado 
 getUser(10).then((data)=> console.log(data)).catch((error)=> console.log('Error!!!')); // forma correnta porque se despliega hasta que resuleve la promesa
// let usuario = getUser(10);
// console.log(usuario.name);
