// Juego de cartas
let cartas;
function numeroCartas(){

    console.log ("Bienvenido al juego interactivo de cartas")
        cartas = Number(prompt("Ingrese un numero de cartas, mayor a 5 y menor a 10 "))
    while (true){
        if (cartas === 0 ){
            console.log ("0 No una opcion")
        }
        else if (cartas > 10 ){
        console.log ("Es mas de 10")
         }
        else if (cartas < 5 ){
        console.log ("Es menos de 5")
        }
         else{
        console.log ( "Muy bien ingresaste el dato valido, tus cartas son " + "("+ cartas +")" )
        break
        }
    cartas = Number(prompt("Ingrese nuevamente un numero valido"))
}
}
numeroCartas ()

console.log ("-----------------------------------")


console.log ("Vamos abrir otro mazo de cartas, para luego sumarlas con las anteriores")



let cartasAgre;
function numeroCartasAgre(){
        cartasAgre = Number(prompt("Ingrese un numero de cartas, mayor a 20 y menor a 40 "))
    while (true){
        if (cartasAgre === 0 ){
            console.log ("0 No una opcion")
        }
        else if (cartasAgre > 40 ){
        console.log ("Es mas de 40")
         }
        else if (cartasAgre < 20 ){
        console.log ("Es menos de 20")
        }
         else{
        console.log ( "Muy bien ingresaste el dato valido, tus cartas son " + "("+ cartasAgre +")" )
        break
        }
    cartasAgre = Number(prompt("Ingrese nuevamente un numero valido"))
}
}
numeroCartasAgre()

function sumaDeCartas(cartas1,cartas2){
    return cartas1 + cartas2;
}
let resultadoFinal = sumaDeCartas(cartas,cartasAgre)


console.log ("El total de tus cartas son " + "(" + resultadoFinal + ")")