// bienvenida
alert("Bienvenido/a a Tienda Roma Libreria")

// usuario
let usuario=prompt("Ingresa tu nombre");
alert( "Bienvenido/a a nuestra tienda " + usuario);




//carrito

const libreria=[
    {
        articulo:"Resaltador Trabi",
        seccion:"Marcadores",
        precio: 70
    },
    {
        articulo:"Resaltador Filgo TextMarket",
        seccion:"Marcadores",
        precio: 90
    },
    {
        articulo:"Resaltador Trabi texting x6",
        seccion:"Marcadores",
        precio: 350
    },
    {
        articulo:"Resaltador Filgo Fine Ligther x 1",
        seccion:"Marcadores",
        precio: 60
    },
    {
        articulo:"Marcadores Duo brush",
        seccion:"Marcadores",
        precio: 150
    },
    {
        articulo:"Marcadores Filgo metalizados x4",
        seccion:"Marcadores",
        precio: 700
    },
    {
        articulo:"Lapices de colores Filgox 12",
        seccion:"Lapices, lapiceras y mas",
        precio: 200
    },
    {
        articulo:"Lapiz filgo pastel color negro x1",
        seccion:"Lapices, lapiceras y mas",
        precio: 50
    },
    {
        articulo:"Cuaderno a4 Escolar",
        seccion:"Cuadernos",
        precio: 700
    },
    {
        articulo:"Cuaderno a5 Inkdrop",
        seccion:"Cuadernos",
        precio: 550
    },
    {
        articulo:"Cuaderno ABC x100hjs",
        seccion:"Cuadernos",
        precio: 1100
    },
    {
        articulo:"Cuaderno A4 Triunfante 1 2 3 x 100hs",
        seccion:"Cuadernos",
        precio: 750
    },
    {
        articulo:"Anotador tapa pastel",
        seccion:"Cuadernos",
        precio: 120
    },
    {
        articulo:"Cuaderno chico tapa dura",
        seccion:"Cuadernos",
        precio: 300
    },
    
];
for(const libr of libreria){
    console.log(libr.articulo);
    console.log(libr.precio)
   }


const Juguetes=[
    {
        articulo:"Camion mega San Remo",
        seccion:"Dia del niño",
        precio: 4000
    },
    {
        articulo:"Cocinita Gigante Fiorella",
        seccion:"Dia del niño",
        precio: 5000
    },
    {
        articulo:"Tocador Gigante Fiorella",
        seccion:"Dia del niño",
        precio: 4800
    },
    {
        articulo:"Excavadora San Remo",
        seccion:"Dia del niño",
        precio: 3000
    }
]


     for(const jug of Juguetes){
     console.log(jug.articulo);
     console.log(jug.precio)
    }

const Carrito=libreria.concat(Juguetes);
alert(Carrito);

let buscarArticuloLib=prompt("Ingresa el articulo de libreria que deseas buscar,\n Resaltador Trabi \nResaltador Filgo TextMArket \nResaltador Trabi texting x6 \nResaltador Filgo Fine Ligther x 1 \nMarcadores Duo brush \nMarcadores Filgo metalizados x4 \nLapices de colores Filgox 12 \nLapiz filgo pastel color negro x1 \nCuaderno a4 Escolar \nCuaderno a5 Inkdrop \nCuaderno ABC x100hjs \nCuaderno A4 Triunfante 1 2 3 x 100hs \nAnotador tapa pastel \nCuaderno chico tapa dura \n \nsi no es de libreria ingresa un punto ");
function BusquedaLib(){
    for (const libr of libreria){
    if (libr.articulo == buscarArticuloLib){
     let ArticuloBuscado=libreria.indexOf(libr);

     console.log("El articulo que esta buscando se encuentra en el orden "+ ArticuloBuscado + " de Libreria");

    }
    else{
        console.log("Este articulo no es valido o no se encuentra disponible")
        break;
    }
    
}
}
BusquedaLib();
function BusquedaJug(){

    let buscarArticuloJug=prompt("Ingresa el articulo de Jugueteria que deseas buscar: \n  Camion mega San Remo \nCocinita Gigante Fiorella \nTocador Gigante Fiorella \nExcavadora San Remo ");
    for (const jug of Juguetes){
        if (jug.articulo == buscarArticuloJug){
            let ArticuloBuscado=Juguetes.indexOf(jug);
            
            alert("El articulo que esta buscando se encuentra en el orden "+ ArticuloBuscado + " de Jugueteria");
            
        }
        else{
            alert("Este articulo no es valido o no se encuentra disponible")
        }

    }
}
BusquedaJug();

    libreria.forEach((artLibreria)=>console.log(artLibreria.articulo));
    Juguetes.forEach((artJuguetes)=>console.log(artJuguetes.articulo));

 //FIND
 let ingreseSuBusqueda=prompt("Que articulo desea buscar?")
 let busqueda = libreria.find((artLibreria)=>artLibreria.articulo === ingreseSuBusqueda);
 alert(busqueda);

    if(busqueda != undefined){
        alert("El articulo se encuentra en stock");
        alert(busqueda);
    }
    else{
        alert("El articulo ingresado no se encuentra en stock");
    }

  //FILTRO LA LIBRERIA CON PRECIOS MENORES QUE EL MONTO INGRESADO
 let filtroDeBusqueda=parseInt(prompt("Ingrese un monto que desee no superar por articulo"));
 const filtroMaximo=libreria.filter((libreria)=>libreria.precio<=filtroDeBusqueda);
 alert(filtroMaximo);
