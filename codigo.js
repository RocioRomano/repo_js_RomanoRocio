// bienvenida
alert("Bienvenido/a a Tienda Roma Libreria")

// usuario
let usuario=prompt("Ingresa tu nombre");
alert( "Bienvenido/a a nuestra tienda " + usuario);



//Crea un algoritmo utilizando un ciclo
let articulo=prompt("Ingresa que articulos te gustarían y te diré su precio\nresaltador\ngoma\ncuaderno\nlapicera\nmarcador\nmicrofibras\nagenda(s- para salir)");
let precio=0;

while(articulo!="s"){
    switch(articulo){

            case "resaltador":
            case "RESALTADOR":
                console.log ("Un resaltador Trabi sale $80") ;
                precio=precio+80
                break;
            case "goma":
            case "GOMA":

                console.log ("Una goma sale $50") ;
                precio=precio+50
                break;  
            case "cuaderno":
                console.log ("Un cuaderno sale $700") ;
                precio=precio+700
                break;  
            case "lapicera":
                console.log ("Una lapicera sale $50") ;
                precio=precio+50
                break;
            case "microfibras":
                console.log ("Una microfibras sale $90") ;
                precio=precio+90
                break;
            case "agenda":
                console.log ("Una agenda sale $580") ;
                precio=precio+580
                break;       
                          
            default:console.log("Ese producto no esta en stock");
    }
    articulo=prompt("Ingresa el articulo que te gustaría y te diré su precio (s-para salir)");
}
alert("Total a pagar $"+precio);

//calcular el total con iva de los productos cargados al carrito

const iva=(precio)=> precio*1.21;
alert(iva(parseFloat(prompt("Ingrese el total de su lista de compras para calcular precio con iva incluido :$"))));

