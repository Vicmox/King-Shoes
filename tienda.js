

$("#verTiendas").click(function(event){
    $("#contenedorU").load('tienda/tienda.html')
    fetch('http://localhost:8080/tiendas')
    .then(response => response.json())
    .then(data => mostrarTiendas(data))
    .catch(error => console.log(error))
    
    const mostrarTiendas=(data)=>{
        console.log(data)
        let body=''
        for(let i=0;i<data.length;i++){
            body+=`<tr> <td>${data[i].id_tienda}</td> <td>${data[i].id_usuario}</td><td>${data[i].nombre}</td><td>${data[i].descripcion}</td> <td><button class="btn btn-warning" id="editarUsuarios">Editar</button></td> <td><button class="btn btn-danger" onclick="eliminarU(${data[i].id}) id="eliminarUsuarios">Eliminar</button></td></tr>`
        }
        document.getElementById('dataTiendas').innerHTML=body
    }
})


