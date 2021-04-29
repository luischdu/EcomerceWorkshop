function login (){
    if (localStorage.getItem('datosLogin', datosUsuario) == null){
        alert ('Por favor inicie sesion')
        
        let usuario
        let correo
        let contraseña
        
        let datosUsuario ={}
        //----------Recepcion de datos desde interfaz 
        //ingresar id
        usuario = document.getElementById (//ingresar id)
        usuario = usuario.value
        correo = document.getElementById(//ingresar id)
        correo = usuario.value
        contraseña = document.getElementById(//ingresar id)
        contraseña = usuario.value
        //---------------------------------------
        //datos hacia el json
        datosUsuario.usuario = usuario
        datosUsuario.correo = correo
        datosUsuario.contraseña = contraseña
        
        //---------------------------------
        // localStorage    
        
        localStorage.setItem('datosLogin', JSON.stringify(datosUsuario))
        
        // --------------------------------
        }else{ console.log ('Sesion iniciada')}
        
    }
    
    
    export default login
    
    
    
    
    
    
    
    