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
        articulo:"Resaltador Filgo TextMArket",
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
        articulo:"Tocsdor Gigante Fiorella",
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

let buscarArticuloLib=prompt("Ingresa el articulo de libreria que deseas buscar, si no es de libreria ingresa un punto ");
for (const libr of libreria){
    if (libr.articulo == buscarArticuloLib){
     let ArticuloBuscado=libreria.indexOf(libr);

     alert("El articulo que esta buscando se encuentra en el orden "+ ArticuloBuscado + "de Libreria");

    }
}
 let buscarArticuloJug=prompt("Ingresa el articulo de Jugueteria que deseas buscar");
for (const jug of Juguetes){
    if (jug.articulo == buscarArticuloJug){
     let ArticuloBuscado=Juguetes.indexOf(jug);

     alert("El articulo que esta buscando se encuentra en el orden "+ ArticuloBuscado + " de Jugueteria");

    }
}
 libreria.forEach((artLibreria)=>console.log(artLibreria.articulo));

 //FIND
 let ingreseSuBusqueda=prompt("Que articulo desea buscar?")
 let busqueda = libreria.find((el)=>el.articulo === ingreseSuBusqueda);
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
