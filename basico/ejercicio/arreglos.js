
        let productos = [];
        let listaProductos = document.getElementById('listaElementos')

        function agregarElemento() {
            let newElement = window.prompt('Nuevo elemento: ');
            if (newElement != null) {
                productos.push(newElement); // tenemos que borar el elemento del arreglo

            }
            console.log(productos);


            // se limpia la lista ol totalmente
            while (listaProductos.firstChild)
                listaProductos.removeChild(listaProductos.firstChild);
            //  if(listaProductos.children.leng)
// borrar del arreglo de productos
            productos.forEach((producto) => {
                let nuevoProducto = document.createElement("li"); // estamos creando una lista
                let numeroDeProductos = listaProductos.children.length; // obtenemos el total de productos 
                nuevoProducto.setAttribute('id',numeroDeProductos); // colocalos el set del id del numero de productos total
                nuevoProducto.innerHTML = `${producto} <button onclick = 'eliminarProducto(${numeroDeProductos})'> Eliminar </button>`;// aqui introducimos
                // los el HTML para agregar un boton
                listaProductos.appendChild(nuevoProducto);
            }); 
           
            // productos.forEach(function(producto)
            //  {
            //  let nuevoProducto = document.createElement("li");
            //  nuevoProducto.innerHTML = producto;
            //      listaProductos.appendChild(nuevoProducto);
            //  })

            }
            function eliminarProducto(cual){
                alert(`Eliminar producto ${cual}`);
                listaProductos.removeChild(listaProductos.childNodes[cual]);
                productos.removeChild(listaProductos.childNodes[cual]);
                
            }
