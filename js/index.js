//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded",function(e){
  
});

function validar(){
    let usuario = document.getElementById("usuar").value;
    let contrasenia = document.getElementById("contra").value;
    if((usuario !== "") && (contrasenia !== "")){
        window.location.href= "index1.html";
    } 
    else{
        alert("Usuario y/o Contraseña incorrecto");
        alert("Ingrese usuario y contraseña nuevamente!");
    }
}

document.addEventListener("DOMContentLoaded",function(e){
    document.getElementById("botonIngresar").addEventListener("click",
    function(event){
        validar();
    })
})