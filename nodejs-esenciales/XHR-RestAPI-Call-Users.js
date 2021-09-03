// liberia para el XMLHttpRequest se instala por medio de powershell con el comando npm i xmlhttprequest
//

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; // libreria para que funciona en el nums

// Set up our HTTP request
var xhr = new XMLHttpRequest();

// Setup our listener to process completed requests
// cuando acabe de hablar lo que hace es que marca si es exitosa o fallida

xhr.onload = function () {

	// Process our return data
	if (xhr.status >= 200 && xhr.status < 300) {
		// What do when the request is successful
		console.log('success!', xhr);
		//console.log(xhr.responseText);
		let usuarios = JSON.parse(xhr.responseText);
		usuarios.forEach(post => {
			console.log(`Nombre: ${post.name} Email: ${post.email}`);	
		});
	} else {
		// What do when the request fails
		console.log('The request failed!');
	}

	// Code that should run regardless of the request status
	console.log('This always runs...');
};

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
//https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=CF America
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.send();
console.log('hola!!!!');

//nota tiene que ser en una dirección local