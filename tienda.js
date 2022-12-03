$("#verUsuarios").click(function(event){
    $("#contenedorU").load('cuenta/admin.html')
    fetch('http://localhost:8080/usuarios')
    .then(response => response.json())
    .then(data => mostrarUsuarios(data))
    .catch(error => console.log(error))
    
    const mostrarUsuarios=(data)=>{
        console.log(data)
        let body=''
        for(let i=0;i<data.length;i++){
            body+=`<tr> <td>${data[i].id}</td> <td>${data[i].cedula}</td><td>${data[i].nombre}</td><td>${data[i].apellido}</td> <td>${data[i].correo}</td> <td>${data[i].sexo}</td> <td>${data[i].estado}</td><td><button class="btn btn-warning" id="editarUsuarios">Editar</button></td> <td><button class="btn btn-danger" onclick="eliminarU(${data[i].id}) id="eliminarUsuarios">Eliminar</button></td></tr>`
        }
        document.getElementById('dataUsuarios').innerHTML=body
    }
})


$("#verTiendas").click(function(event){
    $("#contenedorU").load('cuenta/admin.html')
    fetch('http://localhost:8080/tiendas')
    .then(response => response.json())
    .then(data => mostrarUsuarios(data))
    .catch(error => console.log(error))
    
    const mostrarUsuarios=(data)=>{
        console.log(data)
        let body=''
        for(let i=0;i<data.length;i++){
            body+=`<tr> <td>${data[i].id_tienda}</td> <td>${data[i].nombre}</td><td>${data[i].descripcion}</td><td>${data[i].apellido}</td> <td>${data[i].correo}</td> <td>${data[i].sexo}</td> <td>${data[i].estado}</td><td><button class="btn btn-warning" id="editarUsuarios">Editar</button></td> <td><button class="btn btn-danger" onclick="eliminarU(${data[i].id}) id="eliminarUsuarios">Eliminar</button></td></tr>`
        }
        document.getElementById('dataUsuarios').innerHTML=body
    }
})


$("#verProductos").click(function(event){
    $("#contenedorU").load('cuenta/admin.html') 
    fetch('http://localhost:8080/productos')
    .then(response => response.json())
    .then(data => mostrarUsuarios(data))
    .catch(error => console.log(error))
    
    const mostrarUsuarios=(data)=>{
        console.log(data)
        let body=''
        for(let i=0;i<data.length;i++){
            body+=`<tr> <td>${data[i].id}</td> <td>${data[i].nombre}</td><td>${data[i].color}</td><td>${data[i].cantidad}</td> <td>${data[i].correo}</td> <td>${data[i].sexo}</td> <td>${data[i].estado}</td><td><button class="btn btn-warning" id="editarUsuarios">Editar</button></td> <td><button class="btn btn-danger" onclick="eliminarU(${data[i].id}) id="eliminarUsuarios">Eliminar</button></td></tr>`
        }
        document.getElementById('dataUsuarios').innerHTML=body
    }
})