
function mostraFormuralioRegistro(){
    document.getElementById('fromInicio').style.display='block'
}

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
})


const guardar=document.getElementById('btnRegistrarU')

var select=document.getElementById("inlineFormSelectPref");
var value=select.value;
var sexo=select.options[select.selectedIndex].text;

guardar.addEventListener('click',()=>{
    var cedula=document.getElementById("inputCedula").value;
    var nombre=document.getElementById("inputNombre").value;
    var apellido=document.getElementById('inputApellidos').value;
    var correo=document.getElementById('inputEmail').value;
    var contraseña=document.getElementById('inputPassword').value;
    const newUser={
        cedula: cedula,
        nombre: nombre,
        apellido:apellido,
        correo:correo,
        contraseña:contraseña,
        sexo:sexo,

        estado:'activo',
        idrol:'1'
    }
    fetch('http://localhost:8080/usuarios',{
        method:'POST',
        body:JSON.stringify(newUser),
        headers:{
            "Content-type":"application/json"
        }

    }).then(res=>res.json())
    .then(user=>console.log(user))
    console.log(JSON.stringify(newUser))
})


