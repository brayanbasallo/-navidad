console.log("Hola mundo!");

var arregloNav = [];
var tablero = document.getElementById("tablero");

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

    imprimirArreglo();
}

function imprimirArreglo() {
    let i, o, color;
    tablero.innerHTML += "<span style='color:#F1C40F'>*</span><br>"
    for (i = 0; i < arregloNav.length; i++) {
        for (o = 0; o < arregloNav.length; o++) {
            /* if (arregloNav[i][o] == "*") {
                color = luces(arregloNav[i].length);
            } */
            switch (arregloNav[i][o]) {
                case "*":
                    tablero.innerHTML += "<span style='color:" + color + "'>*</span>"
                    color = luces(arregloNav[i].length);
                    tablero.innerHTML += "<span style='color:" + color + "'>*</span>"
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
    /* console.log("aqui"); */
    arregloNav = [];
}

function luces(ArregloLength) {
    /* console.log(ArregloLength); */

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
    /* console.log(number)
    console.log(salida); */
    return salida;
}

function numeroAleratorio(condicion) {
    let salida = Math.floor(Math.random() * (0 + condicion) - 0);
    return salida;
}
crearArreglo();
setInterval(() => {
    tablero.innerHTML = "";
}, 1000);
setInterval(crearArreglo, 1000) 
