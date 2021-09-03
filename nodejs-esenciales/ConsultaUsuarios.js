// agregar la libreria para el JQuery (para que lea el simbolo $)

$( document ).ready(function() {
   
    // hace la conexion a la ruta api
    // el simbolo $ quiere decir que lo estamos implementando por medio de JQUery esta corriendo en el contexto de jquery
    $.ajax({
        // que url queremos que consuma
        url: "https://jsonplaceholder.typicode.com/posts/50",
        contentType: "application/json", // de que tipo vamos a llamar
        dataType: 'json', // tipo dedato
        type: 'get', // aqui se puede cambiar el tipo de verbo (get,put,delete,update,patch)
        success: function(result){ // cualquier nombre del objeto
            console.log(result.title); // mensaje de si se hizo bien  con result.title solo imprime el titulo
        },
        error: function(result){
            console.log('La llamada no se pudo completar');
            console.log(result);
        }
    });

});
