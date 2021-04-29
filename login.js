
document.querySelector('#loginBtn').addEventListener('click',login)
function login (){
    
        let usuario
        let correo
        let contraseña
        
        let datosUsuario ={}
        //----------Recepcion de datos desde interfaz 
        //ingresar id
        usuario = document.getElementById ('username')
        usuario = usuario.value
        correo = document.getElementById('email')
        correo = correo.value
        contraseña = document.getElementById('pass')
        contraseña = contraseña.value
        
        //---------------------------------------
        //datos hacia el json
        datosUsuario.usuario = usuario
        datosUsuario.correo = correo
        datosUsuario.contraseña = contraseña
        console.log(datosUsuario)
        //---------------------------------
        // localStorage    
        
        localStorage.setItem('datosLogin', JSON.stringify(datosUsuario))
        alert ("Sesion iniciada")
     
        
    }
    
    
    
    
    
    
    
    
    
    
    