//crea un algoritmo con un condicional


let musica=prompt("Aprobaste o desaprobaste la evaluacion de musica?");
let danza=prompt("Aprobaste o desaprobaste la evaluacion de danza? ");

if ((musica=="aprobe") && (danza=="aprobe")){
    console.log( "Felicidades!!Pasaste al siguiente año en la Escuela de artes"
    )
}
else if ((musica=="desaprobe") && (danza=="aprobe")){
    console.log( "Deberas rendir nuevamente musica"
)
}
else if ((musica=="aprobe") && (danza=="desaprobe")){
    console.log( "Deberas rendir nuevamente danza"
)
}
else if ((musica=="desaprobe") && (danza=="desaprobe")){
    console.log( "Lo sentimos, deberas rendir nuevamente ambas materias para pasar al siguiente año"
    )
}





//Crea un algoritmo utilizando un ciclo
let articulo=prompt("Ingresa que articulo te gustaría y te diré su precio\nresaltador\ngoma\ncuaderno\nlapicera\nmarcador\nmicrofibras\nagenda(s- para salir)");
let precio=0;

while(articulo!="s"){
    switch(articulo){

        case "resaltador":
            console.log ("Un resaltador Trabi sale $80") ;
            precio=precio+80
            break;
            case "goma":
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
console.log("Total a pagar $"+precio);


