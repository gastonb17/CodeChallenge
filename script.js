function enviarDatos(){
    let nom = document.getElementById("nombre").value;
    let ape = document.getElementById("apellido").value;
    let year = document.getElementById("fecha").value;

    fetch('https://jsonplaceholder.typicode.com/users',{
        headers:{"content-Type": "aplication/json; charset-utf-8"},
        method:"POST",
        body: JSON.stringify({
            nombre: nom,
            apellido: ape,
            fechaDeNacimiento: year
        })
    })
    .then(respuesta => respuesta.json())
    .then(datos=> {
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        alert("se envió correctamente")
    })
}

document.addEventListener('DOMContentLoaded', ()=>{

    document.getElementById("enviar").addEventListener("click",()=>{
        enviarDatos();
    })
})