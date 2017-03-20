/* 1 */
console.log('Effective Javascript')
const pi = 3.14;
//pi = 'Modified';
console.log(pi)
var myArray = []
console.log(myArray)

/* IMPLICIT COERSIONS */
//coerción es la acción de forzar a que un objeto se comporte como si fuera de otro tipo
//El tipo está asociado al valor, por eso no es necesario especificar el tipo de dato
//typeof = Para saber que tipo de dato es

/* PREFER PRIMITIVE TO OBJECT WRAPPERS */
var d = new String("Amo");
var e = new String("Amo");
var c = "cats"
console.log(d + c);
console.log(typeof d);
console.log(typeof c)
console.log(d === e);
// FALSE porque son sólo iguales a sí mismos, son obj diferentes";
console.log("cats".toUpperCase());
//c.nombre = "Duquesa";
// Solo se agregan propiedades a objetos no valores primitivos

/* AVOID USING == WITH MIXED TYPES */
console.log("1.0e0" == true);
// "1.0e0" es igual 1 y true es 1 entonces la comparación de valor da 1;
// == es para datos de diferente tipo - Abstracta
// === elimina coerciones implicitas - Estricto, es mejor usar esta porque es más predecible

/* SEMICOLON RULES */
// 1. Solo se inserta un ; antes de un } cuando hay una o más líneas, o al final de una instrucción
function area(r) { r = +r; return Math.PI * r * r }
// 2. Se insertan cuando la siguiente línea de código no puede ser analizada, sirve como mecanismo de corrección de errores
// a = b f();
// Antes de estos caracteres es necesario el ; = (, [, +, -, y /. 
// ; se insertan en el head de los loops for

/* 2 VARIABLE SCOPE */
// Las variables globales pueden dar errores name collisions y van en contra del principio de modularidad
