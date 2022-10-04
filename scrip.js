$("#registrase").click(function(event){
    $("#contenedor").load('loginyregister.html')
});

$("#cuentaAdmin").click(function(event){
    $("#contenedor").load('cuenta/admin.html')
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
 


  




