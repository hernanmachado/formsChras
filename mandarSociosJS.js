function mostrarDatos() {
    var numeroSocio = document.getElementById("numeroSocio").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var cantidadAutos = document.getElementById("cantidadAutos").value;

    // Construir la cadena de datos
    var datos = "Número de Socio: " + numeroSocio + "<br>" +
                "Nombre: " + nombre + "<br>" +
                "Apellido: " + apellido + "<br>" +
                "Cantidad de Autos: " + cantidadAutos;

    // Almacenar los datos en localStorage
    localStorage.setItem("datosSocios", datos);

    // Redirigir a la página para mostrar los datos
    window.location.href = "mostrarSocios.html";

    // Evitar el envío del formulario
    return false;
}