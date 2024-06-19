//EJ1
/* function cualEsMayor(a, b){
    if (a > b){
        return a
    } else {
        return b
    }
} */

/* function cualEsMayor(a, b){
   return a > b ? a : b 
}
let mayor = cualEsMayor(500,5);
console.log(mayor); */


//EJ2
/* function nombreResolucion(ancho, alto){
    if (ancho >= 7680 && alto >= 4320){
        return "8k"
    } else if (ancho >= 3840 && alto >= 2160){
        return "4k"
    } else if (ancho >= 2560 && alto >= 1440){
        return "WQHD"
    } else if (ancho >= 1920 && alto >= 1080){
        return "FHD"
    } else if (ancho >= 1280 && alto >= 720){
        return "HD"
    } else return false;
}

let nombre = nombreResolucion(2560, 1440);
console.log(nombre); */


//EJ3
/* function getByIdx(arr, idx){
    if (idx < 0 || arr.length <= idx) {
        return "El indice no existe"
    } 
     return arr[idx]    
}

let resultado = getByIdx([1,2], 1);
console.log(resultado); */

//EJ4
/* let numero = 0 ;
while (numero <= 10){
    if (numero % 2 !== 0){
        console.log(numero)
    }
    numero++
} */


//EJ5
/* let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr){
    let menor = arr[0];
    let mayor = arr[0];
    for (i of arr){
        menor = menor < i ? menor : i
        mayor = menor > i ? menor : i
    }
    return [menor,mayor]
}

let numeros = getMenorMayor(array)
console.log(numeros) */

//EJ6
/* let array = [2, 5, 7, 15, -5, -100, 55];
function cuantosPositivos(arr){
    let contador = 0;
    for (i of arr){
        if (i > 0){
            contador++
        }
    }
    return contador
}
console.log(cuantosPositivos(array)) */


//EJ7
/* function precioCompleto(precio, impuesto){
    resultado = Math.round((precio * impuesto) + precio)
    return resultado
}
console.log(precioCompleto(19.90, 0.15)) */