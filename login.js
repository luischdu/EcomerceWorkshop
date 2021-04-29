
document.querySelector('#loginBtn').addEventListener('click',login)
function login (){
    
        
        let correo
        let contraseña
        
        let datosUsuario ={}
        //----------Recepcion de datos desde interfaz 
        //ingresar id
        correo = document.getElementById('email')
        correo = correo.value
        contraseña = document.getElementById('pass')
        contraseña = contraseña.value
        
        //---------------------------------------
        //datos hacia el json
        
        datosUsuario.correo = correo
        datosUsuario.contraseña = contraseña
        console.log(datosUsuario)
        //---------------------------------
        // localStorage    
        
        localStorage.setItem('datosLogin', JSON.stringify(datosUsuario))
        alert ("Sesion iniciada")
     
        
    }
    
    
    
    
    
    
    
    
    
    
    