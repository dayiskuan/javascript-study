/* FOR IN */
/* Recorre las propiedades de un objeto nombre/valor de manera arbitraria */ 
/* No se aconseja usarlo en arrays */

var myObject = {
    padres: {
        madre: {
            nombre: 'Dolly',
            apellido: 'Kuan'
        },
        padre: 'Jorge'
    },
    nombre: 'Dayana',
    apellido: 'Osorio',
    edad: 33, 
    estatura: 1.60
}

/*function mostrarPropiedades(prop, propDos, objeto){
    var  arraySize = Object.keys(objeto).length;  
    if(arraySize > 0){  
        for(var i in objeto){      
            console.log(i + ': ' + objeto[i]);
            if (objeto[i].hasOwnProperty(prop)){
                for(var j in objeto[i]){
                    console.log(j + ': ' + objeto[i][j]);
                    if(objeto[i][j].hasOwnProperty(propDos)){
                        for(var d in objeto[i][j]){
                            console.log(d + ': ' + objeto[i][j][d]);
                        }
                    }
                }
            }
        }
    } else {
        console.log(myObject);
    }
}*/W

//mostrarPropiedades('madre', 'nombre', myObject);

function n(){
    for(var i in myObject){
        console.log(i + ': ' + myObject[i]);        
        if(myObject[i] instanceof Object){
            for(var j in myObject[i]){
                console.log(j + ': ' + myObject[i][j]);
                if(myObject[i][j] instanceof Object){
                    for(var d in myObject[i][j]){
                        console.log(d + ': ' + myObject[i][j][d]);
                    }                    
                }
            }
        }
    }
}
n();

/* SPLIT */
/* Divide una cadena de caracteres en una nuevo arreglo generado a partir de subcadenas del mismo*/
var stringUno = 'Perro, gato, pajar, curie, hamster, hurón';
var stringDos = ''; // Devuelve un 
var stringThree = '405640310';
var stringNumeros = ''
console.log(stringUno.split(',', 2));
console.log(stringDos.split(','));
console.log(stringThree.split(''));

/* OPERADOR TERNARIO */
/* Si la condición es true, el operador retorna el valor de la expr1; de lo contrario,  devuelve el valor de expr2 */
var miEdad = 33;
console.log(Math.PI > 4 ? 'Sip' : 'Nop');
console.log(miEdad < 40 ? 'Sip' : 'Nop');

/* MAP */
/* Crea un nuevo array producto de llamar una función sobre cada uno de los elementos en orden*/
/* No cambia el array original */
var myObjectMap = [
    {
        name: 'Apple',
        color: 'Green',
        sweetness: 'Bajo',
        origin: ['1', '8', '5']
    },
    {
        name: 'Strawberry',
        color: 'Red',
        sweetness: 'Alto',
        origin: ['8', '4']
    }
]

for(var i = 0; i < myObjectMap.length; i++){    
    console.log(myObjectMap[i]['origin'].map(Number));
}


