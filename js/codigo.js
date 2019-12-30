console.log("Hola mundo!");

var accion = true;
var arregloNav = [];
var tablero = document.getElementById("tablero");

/**
 * Se crea el arreglo para dar forma al arbol
 * Se limpia el tablero donde se pinta el arbol
 */
function crearArreglo() {
    arregloNav.push(["*"]);
    arregloNav.push(["*", "*"]);
    arregloNav.push(["*", "*", "*"]);
    arregloNav.push(["*", "*", "*", "*"]);
    arregloNav.push(["*", "*", "*", "*", "*"]);
    arregloNav.push(["*", "*", "*", "*", "*", "*"]);
    arregloNav.push(["*", "*", "*", "*", "*", "*", "*"]);
    arregloNav.push(["*", "*", "*", "*", "*", "*", "*", "*"]);
    arregloNav.push(["|","|"])
    arregloNav.push(["|","|"])
    tablero.innerHTML = "";
    imprimirArreglo();
}

/**
 * Esta funcion se encarga de pintar en pantalla para fibujar
 * el arbolito
 */
function imprimirArreglo() {
    let i, o, color, color1;
    tablero.innerHTML += "<span style='color:#F1C40F'>*</span><br>"
    for (i = 0; i < arregloNav.length; i++) {
        for (o = 0; o < arregloNav.length; o++) {
            switch (arregloNav[i][o]) {
                case "*":
                    color = luces(arregloNav[i].length);
                    color1 = luces(arregloNav[i].length);
                    tablero.innerHTML += "<span style='color:" + color + "'>*</span><span style='color:" + color1 + "'>*</span>"
                    break;
                case "|":
                    tablero.innerHTML += "<span style='background-color:#AF601A; color:#AF601A'>|</span>"
                    break;
                default:
                    break;
            }
        }
        tablero.innerHTML += "<br>";
    }
    arregloNav = [];
}

/**
 * se encarga de devolever un color aleatoreo 
 * @param {ser recibe el número de objetos en el arreglo} ArregloLength 
 */

function luces(ArregloLength) {
    let number = numeroAleratorio(ArregloLength);
    let salida;
    switch (number) {
        case 1:
            salida = "#9B59B6";
            break;
        case 2:
            salida = "#3498DB";
            break;
        case 3:
            salida = "#27AE60";
            break;
        default:
            salida = "#34495E";
            break;
    }
    return salida;
}

/**
 * genera un numero automatico
 * @param {numero de a cantidad del arreglo} condicion 
 */

function numeroAleratorio(condicion) {
    let salida = Math.floor(Math.random() * (0 + condicion) - 0);
    return salida;
}

/**
 * Se encarga de empezar el ciclo de dibujó
 */
function imprimir(){
    if(accion){
        crearArreglo()
    }
}

/**
 * Se encarga deocultar el arbol para mostrar mensaje
 */
function cambio(){    
    accion != false;
    tablero.classList.toggle("ocultar");
}

setInterval(imprimir, 1000);
setInterval(cambio,5000)

