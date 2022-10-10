
//Este boton hace que el formulario de registro aparezca en vez del de inicio de sesion

var btnCambioARegistro = document.getElementById('btnCambioARegistro');

btnCambioARegistro.onclick=function(){
    let textIniciarSesion=document.getElementById('textIniciarSesion');
    textIniciarSesion.textContent='Registrarse';
    let confirmarContraseñaDiv = document.getElementById('confirmarContraseñaDiv');
    confirmarContraseñaDiv.style.display = "block";
    let nombresDiv = document.getElementById('nombresDiv');
    nombresDiv.style.display="block";
    let apellidosDiv = document.getElementById('apellidosDiv');
    apellidosDiv.style.display="block";
    let btnEntrar = document.getElementById('btnEntrar');
    btnEntrar.style.display="none";
    let btnRegistrarme = document.getElementById('btnRegistrarme');
    btnRegistrarme.style.display="block";
    let btnCambioInicioSesion = document.getElementById('btnCambioInicioSesion');
    btnCambioInicioSesion.style.display="block";
    let btnCambioARegistro = document.getElementById('btnCambioARegistro');
    btnCambioARegistro.style.display="none";
}

//Este boton hace que el formulario de inicio de sesion aparezca en vez del de registro

var btnCambioInicioSesion = document.getElementById('btnCambioInicioSesion');

btnCambioInicioSesion.onclick=function(){
    let textIniciarSesion=document.getElementById('textIniciarSesion');
    textIniciarSesion.textContent='Iniciar Sesion';
    let confirmarContraseñaDiv = document.getElementById('confirmarContraseñaDiv');
    confirmarContraseñaDiv.style.display = "none";
    let nombresDiv = document.getElementById('nombresDiv');
    nombresDiv.style.display="none";
    let apellidosDiv = document.getElementById('apellidosDiv');
    apellidosDiv.style.display="none";
    let btnEntrar = document.getElementById('btnEntrar');
    btnEntrar.style.display="block";
    let btnRegistrarme = document.getElementById('btnRegistrarme');
    btnRegistrarme.style.display="none"; 
    let btnCambioInicioSesion = document.getElementById('btnCambioInicioSesion');
    btnCambioInicioSesion.style.display="none";
    let btnCambioARegistro = document.getElementById('btnCambioARegistro');
    btnCambioARegistro.style.display="block";
}
$("#cuentaAdmin").click(function(event){
    $("#contenedor").load('cuenta/admin.html')
    $("#menu").load('cuenta/menuAdmin.html')
});
var boton = document.getElementById('agregar_p');
var guardar = document.getElementById('guardar');
var lista = document.getElementById('lista');
var data = [];
var cant = 0;
boton.addEventListener("click", agregar_producto);
guardar.addEventListener("click", save);

function agregar_producto() {
    var nombre = document.getElementById('nombre').value;
    var precio = parseFloat(document.getElementById('precio').value);
    var cantidad = parseFloat(document.getElementById('cantidad').value);

    var total = precio * cantidad;
    data.push(
        {
            "id": cant,
            "nombre": precio,
            "cantidad": cantidad,
            "total": total
        }
    );
    var id_row = 'row' + cant;
    var fila = '<tr id=' + id_row + '><td>' + nombre + '</td><td>' + precio + '</td><td>' + cantidad + '</td><td>' + total + '</td><td><a hrf="#" class="btn btn-danger" onclick="eliminar('
        + cant + ')";>Eliminar</a><a href"#" class="btn btn-warning" onclick="cantidad(' + cant + ')";>Cantidad</a></td></tr>';

    $("#lista").append(fila);
    $("#nombre").val('');
    $("#precio").val('');
    $("#cantidad").val('');
    $("#nombre").focus();
    cant++;
    sumar();

}
function save() {

}
function sumar(){
    var tot=0;
    for(x of data){
        tot=tot+x.total;
        document.getElementById('total').innerHTML="total "+tot;
    }
}
function eliminar(row){
    $("#row"+row).remove();
    var i=0;
    var pos=0;
    for(x of data){
        if(x.id==row){
            pos=i;
        }
        i++;
    }
    data.splice(pos,1);
    sumar();
}
function cantidad(row){
    var canti=parseFloat(prompt("Nueva Cantidad"));
    data[row].cantidad=canti;
    data[row].total=data[row].cantidad*data[row].precio;
    var filaid=document.getElementById("row"+row);
    celda=filaid.getElementsByTagName('td');
    celda[2].innerHTML=canti;
    celda[3].innerHTML=data[row].total;
    sumar();
}




