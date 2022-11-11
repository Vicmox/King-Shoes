
$("#usuarios").click(function(event){
    fetch('http://localhost:8080/usuarios/lista')
    .then(response => response.json())
    .then(data => mostrarUsuarios(data))
    .catch(error => console.log(error))
    
    const mostrarUsuarios=(data)=>{
        console.log(data)
        let body=''
        for(let i=0;i<data.length;i++){
         body+=`<tr>  <td>${data[i].cedula}</td><td>${data[i].nombre}</td><td>${data[i].apellido}</td> <td>${data[i].correo}</td> <td>${data[i].sexo}</td> <td>${data[i].estado}</td></tr>`
         
        }
        document.getElementById('dataUsuarios').innerHTML=body
    }
});
