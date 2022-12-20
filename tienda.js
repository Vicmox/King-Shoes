

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
            body+=`<tr> <td>${data[i].id}</td><td>${data[i].nombre}</td> <td> <button class="btn btn-warning" id="editarUsuarios">Editar</button></td> <td><button class="btn btn-danger" id="eliminarUsuarios">Eliminar</button></td></tr>`
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

$("#registrarTienda").click(function(event){
    $("#contenedorT").load('tienda/formularioTienda.html')
})

function registrarTienda() {

    var id_usuario = document.getElementById('inputIdUserTienda').value;
    var nombre = document.getElementById('inputNombreT').value;
    var descripcion = document.getElementById('inputDescripcionT').value;
    let fecha=new Date();
    const tienda = {
        idUsuario: id_usuario,
        nombre: nombre,
    }
    console.log(tienda)
    fetch('http://localhost:8080/tiendas', {
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
    var selectColor = document.getElementById("colorP");
    var color = selectColor.options[selectColor.selectedIndex].text;

    /**
    const Newproducto = {
        tienda : tienda,
        nombre : nombreP
         : color ,


    }
    */
   
    fetch('http://localhost:8080/categorias/' + idCatego)
        .then(response => response.json())
        .then(categoria => mostrarCategoria(categoria))

        const mostrarCategoria = (categoria) => {
            const newProducto = {
                tienda: tienda,
                nombre: nombreP,
                color: color,
                precio: precioP,
                categoria: {
                    id: idCatego,
                    descripcion: valorCategoria
                },
                

            }
            console.log(JSON.stringify(newProducto))
            
           
            
             fetch('http://localhost:8080/productos',{
                 method:"POST",
                 body:JSON.stringify(Producto),
                 headers:{
                     "Content-type":"application/json"
                 }
 
 
             }).then(response=>response.json())
                 .then(producto=>console.log(producto))
                 
                

        }
        
    
    }








