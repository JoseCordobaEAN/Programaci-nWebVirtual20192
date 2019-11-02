var actualizarHora = function (){
    var campo = document.getElementById("hora");
    var hora = new Date();
    var cadena = hora.getHours() + ":" + hora.getMinutes() + ":" + hora.getSeconds();

    campo.innerHTML = cadena;
}
setInterval(actualizarHora, 1000);
