


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
            body+=`<tr> <td>${data[i].id}</td> <td>${data[i].nombre}</td><td>${data[i].email}</td><td>${data[i].username}</td> <td>${data[i].password}</td>  <td><button class="btn btn-warning" id="editarUsuarios">Editar</button></td> <td><button class="btn btn-danger" onclick="eliminarU(${data[i].id}) id="eliminarUsuarios">Eliminar</button></td></tr>`
        }
        document.getElementById('dataUsuarios').innerHTML=body
    }
})

$("#btnVerifcarCuenta").click(function(event){
    fetch('http://localhost:8080/usuarios')
    .then(response => response.json())
    .then(data => enviarCorreo(data))
    .catch(error => console.log(error))
    
    const enviarCorreo =(data)=>{
        console.log(data)
    
        fetch('http://localhost:8080/usuarios/enviarCorreo/' + id, {
            method: "POST",
            body: JSON.stringify(""),
            headers: {
              "Content-type": "application/json"
            }
  
  
          }).then(response => response.json())
  
    }

 

})




$("#editarUsuarios").click(function(event){
    $("#contenedorU").load('login/login.html')
});


/**
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
*/


$("#verProductos").click(function(event){
    $("#contenedorU").load('productos/producto.html') 
    fetch('http://localhost:8080/productos')
    .then(response => response.json())
    .then(data => mostrarProductos(data))
    .catch(error => console.log(error))
    
    const mostrarProductos=(data)=>{
        console.log(data)
        let body=''
        for(let i=0;i<data.length;i++){
            body+=`<tr> <td>${data[i].id}</td> <!--  <td>${data[i].id_tienda}</td> --> <td>${data[i].nombre}</td><td>${data[i].color}</td> <td>${data[i].talla}</td> <td>${data[i].precio}</td> <td><button class="btn btn-warning" id="editarUsuarios">Editar</button></td> <td><button class="btn btn-danger" onclick="eliminarU(${data[i].id}) id="eliminarUsuarios">Eliminar</button></td></tr>`
        }
        document.getElementById('dataProductos').innerHTML=body
    }
})


$("#mostrarProductosT").click(function(event){
    fetch('http://localhost:8080/productos')
    .then(response => response.json())
    .then(data => mostrarProductosT(data))
    .catch(error => console.log(error))
    
    const mostrarProductosT=(data)=>{
        console.log(data)
        let body=''
        for(let i=0;i<data.length;i++){
            body+= `<div class="col ">  
            <div class="abs-center" > 
                <div class="card border-dark mb-3 text-bg-light" style="width: 21rem;">
                    <div class="card-body text-center">
                        <h5 class="card-title">${data[i].nombre} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-up-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"/>
                        <path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"/>
                      </svg></h5>
                       <a  href="#"  >
                        <img src="" height="250px"  width="225px" alt="" id="img${data[i].id}" onclick="cargarProducto(${data[i].id})"></a>
                      
                     <div>
                        <p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cash-coin" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
                            <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
                            <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
                            <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
                            </svg>  Precio : ${data[i].precio} 
                        <p> 
                    </div>
                       
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-palette" viewBox="0 0 16 16">
                    <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                    <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"/>
                  </svg>
                     Color: ${data[i].color}</p>
                    <div> 
                        <p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shop" viewBox="0 0 16 16">
                        <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
                      </svg> Tienda: ${data[i].tienda.nombre}
                        </p>
                    </div>
                    
                    </div>
                </div> 
            </div>
        </div>`
        }
        document.getElementById('dataProductos').innerHTML=body
    }
})












