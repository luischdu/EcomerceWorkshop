let bodega = 
     [{
            imagenNo1:'https://imagizer.imageshack.com/img922/6082/PRGgVV.png',
            imagenNo2:'https://imagizer.imageshack.com/img924/2289/7aHA06.png',
            imagenNo3:'https://imagizer.imageshack.com/img923/5338/yDweCx.png',
            imagenNo4:'https://imagizer.imageshack.com/img924/1899/CAZZuK.png',
            tallaS: 75000 ,
            tallaM: 80000 ,
            tallaL: 85000 ,
            tallaXL: 90000 ,
            tallaXXL: 100000 ,
            inventario: 7,
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh venenatis cras sed felis eget. At in tellus integer feugiat scelerisque varius morbi. Morbi tempus iaculis urna id volutpat. Eget nunc scelerisque viverra mauris in aliquam. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Et sollicitudin ac orci phasellus. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Pharetra convallis posuere morbi leo urna molestie. Malesuada nunc vel risus commodo viverra. Eleifend donec pretium vulputate sapien. Mattis molestie a iaculis at erat pellentesque. Tortor pretium viverra suspendisse potenti nullam ac. Vehicula ipsum a arcu cursus. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non.'
                }
             ,
            
                {
            imagenNo1:'https://imagizer.imageshack.com/img924/925/TDrFPi.png',
            imagenNo2:'https://imagizer.imageshack.com/img923/7853/Qri38y.png',
            imagenNo3:'https://imagizer.imageshack.com/img922/6748/Jmu58N.png',
            tallaS: 80000 ,
            tallaM: 82000 ,
            tallaL: 85000 ,
            tallaXL: 90000 ,
            tallaXXL: 93000 ,
            inventario: 2,
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh venenatis cras sed felis eget. At in tellus integer feugiat scelerisque varius morbi. Morbi tempus iaculis urna id volutpat. Eget nunc scelerisque viverra mauris in aliquam. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Et sollicitudin ac orci phasellus. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Pharetra convallis posuere morbi leo urna molestie. Malesuada nunc vel risus commodo viverra. Eleifend donec pretium vulputate sapien. Mattis molestie a iaculis at erat pellentesque. Tortor pretium viverra suspendisse potenti nullam ac. Vehicula ipsum a arcu cursus. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non.'
            }
         ,
            
        {   imagenNo1:'https://imagizer.imageshack.com/img923/539/Fj2CQP.png',
            imagenNo2:'https://imagizer.imageshack.com/img922/3017/IrsV0Q.png',
            imagenNo3:'https://imagizer.imageshack.com/img922/4887/7Y9qeW.png',
            
            tallaS: 60000 ,
            tallaM: 70000 ,
            tallaL: 75000 ,
            tallaXL: 80000 ,
            tallaXXL: 90000 ,
            inventario: 6,
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh venenatis cras sed felis eget. At in tellus integer feugiat scelerisque varius morbi. Morbi tempus iaculis urna id volutpat. Eget nunc scelerisque viverra mauris in aliquam. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Et sollicitudin ac orci phasellus. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Pharetra convallis posuere morbi leo urna molestie. Malesuada nunc vel risus commodo viverra. Eleifend donec pretium vulputate sapien. Mattis molestie a iaculis at erat pellentesque. Tortor pretium viverra suspendisse potenti nullam ac. Vehicula ipsum a arcu cursus. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non.' 
        }
    ,
     
        {
            imagenNo1:'https://imagizer.imageshack.com/img923/7109/1Bc1h0.png',
            imagenNo2:'https://imagizer.imageshack.com/img924/8972/0zBQMN.png',
            imagenNo3:'https://imagizer.imageshack.com/img923/3486/ofR9Ai.png',
            tallaS: 55000 ,
            tallaM: 60000 ,
            tallaL: 62000 ,
            tallaXL: 70000 ,
            tallaXXL: 75000 ,
            inventario: 20,
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh venenatis cras sed felis eget. At in tellus integer feugiat scelerisque varius morbi. Morbi tempus iaculis urna id volutpat. Eget nunc scelerisque viverra mauris in aliquam. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Et sollicitudin ac orci phasellus. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Pharetra convallis posuere morbi leo urna molestie. Malesuada nunc vel risus commodo viverra. Eleifend donec pretium vulputate sapien. Mattis molestie a iaculis at erat pellentesque. Tortor pretium viverra suspendisse potenti nullam ac. Vehicula ipsum a arcu cursus. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non.' 
        }
    ]


function compraRealizada(productoNumero, cantidad){
    productoNumero.inventario = productoNumero.inventario - cantidad
}
export default bodega