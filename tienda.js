

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
            body+=`<tr> <td>${data[i].id}</td> <td>${data[i].idUsuario}</td><td>${data[i].nombre}</td><td>${data[i].descripcion}</td> <td><button class="btn btn-warning" id="editarUsuarios">Editar</button></td> <td><button class="btn btn-danger" onclick="eliminarU(${data[i].id}) id="eliminarUsuarios">Eliminar</button></td></tr>`
        }
        document.getElementById('dataTiendas').innerHTML=body
    }
})


$("#registrarProducto").click(function(event){
    $("#contenedorT").load('tienda/formularioProducto.html')
})


$("#crearTienda").click(function(event){
    $("#contenedor").load('tienda/formularioTienda.html')
})

function registrarTienda() {

    var id_usuario = document.getElementById('inputIdUserTienda').value;
    var nombre = document.getElementById('inputNombreT').value;
    var descripcion = document.getElementById('inputDescripcionT').value;
    let fecha=new Date();
    const tienda = {
        idUsuario: id_usuario,
        nombre: nombre,
        descripcion: descripcion,
        fechaRegistro:fecha.toLocaleDateString()

    }
    console.log(tienda)
    fetch('http://localhost:8080/tiendas/save', {
        method: 'POST',
        body: JSON.stringify(tienda),
        headers: {
            "Content-type": "application/json"
        }

    }).then(res => res.json())
        .then(tienda => console.log(tienda))

}


function registrarProductos() {

    


    var id_tienda = document.getElementById('inputIdTienda').value;
    var nombreP = document.getElementById('inputNombreP').value;
    var precioP = document.getElementById('inputPrecioP').value;
    var selectCategoria = document.getElementById("categoriaP");
    var idCatego = selectCategoria.value;
    var valorCategoria = selectCategoria.options[selectCategoria.selectedIndex].text;

    var selectMarca = document.getElementById("marcaP").value;

    var selectColor = document.getElementById("colorP");
    var color = selectColor.options[selectColor.selectedIndex].text;
    

    /**
    const Newproducto = {
        tienda : tienda,
        nombre : nombreP
         : color ,


    }
    */
   
    fetch('http://localhost:8080/tiendas/' + id_tienda)
        .then(response => response.json())
        .then(tienda => mostrarTienda(tienda))



    const mostrarTienda = (tienda) => {
        fetch('http://localhost:8080/marca/' + selectMarca)
            .then(response => response.json())
            .then(marca => mostrarMarca(marca))

        const mostrarMarca = (marca) => {
            const newProducto = {
                tienda: tienda,
                nombre: nombreP,
                color: color,
                precio: precioP,
                categoria: {
                    id: idCatego,
                    descripcion: valorCategoria
                },
                marca: marca

            }
            console.log(JSON.stringify(newProducto))
            
           
            
             fetch('http://localhost:8080/productos/save',{
                 method:"POST",
                 body:JSON.stringify(Producto),
                 headers:{
                     "Content-type":"application/json"
                 }
 
 
             }).then(response=>response.json())
                 .then(producto=>console.log(producto))
                 
                

        }
        
    
    }

}






