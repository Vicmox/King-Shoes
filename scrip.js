
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




