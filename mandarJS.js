// ACA DECLARAMOS UNA FUNCION mostrarDatos que no requiere parametros 
function mostrarDatos() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
//una vez que lo "capturamos" por las variables de la funcion 
    var datos = "Nombre: " +  nombre + "<br>" +
                "Apellido: " + apellido + "<br>" +
                "Correo Electrónico: " + email + "<br>" +
                "Teléfono: " + telefono;

    localStorage.setItem("datosPotenciales", datos); //setItem encontrado en 

    window.location.href = "mostrar_datos_potencial_cliente.html"; // Redirecciona a la página de mostrardatos_potencial_cliente.html
    return false; // Evita el envío normal del formulario
}
