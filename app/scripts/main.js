/* ARRAYS */

// Array guarda una lista de valores de un mismo tipo
// Declarar nuevos arrays
// var mascotas = new Array([]);
var mascotas = ['gatos', 'perros', 'hamsters'];
// Agregar un item al array
mascotas[3] = 'pericos';
// Buscar valor
var cats = mascotas[0];
// Sobreescribir posición
mascotas[0] = 'gatitos';
// Agrega una posición más al final
mascotas.push('Curies');
// Elimina y devuelve el último valor del array
var ultimaMascota = mascotas.pop();
mascotas.push(ultimaMascota);
// Length permite saber el largo del array
var cantidadDeMascotas = mascotas.length;
// Iterar array
for(var i=0; i < mascotas.length; i++){
	console.log(i);
	console.log(mascotas[i]);
}

console.log(mascotas);
console.log(ultimaMascota);
console.log(cantidadDeMascotas);

/* OBJETOS */

// Objeto ser  de diferente naturaleza pero son relacionadas
var barbies = new Object();
// var barbies = {};
/* var barbies = {
	nombre: 'Teresa', 
	colorCabello: 'Rojo', 
	colorOjos: 'Azul', 
	lanzamiento: 1997,
	patinar: function(){
		console.log("Soy " + this.nombre " soy patinadora");
	}
};*/
// Agregar propiedades
barbies.nombre = 'Teresa';
barbies.colorCabello = 'Rojo';
barbies.colorOjos = 'Azul';
barbies.lanzamiento = 1997;
barbies.patinar = function() {
	console.log('Soy ' + this.nombre + ' y soy patinadora');
};
// verificar la existencia del objeto
if(barbies){
	console.log(barbies.nombre);
	barbies.patinar();
};

console.log(barbies);

/* FUNCIONES */
// global scope
var tieneMascota = true;
function soyGato(nombre){
	//local scope
	var edad = 7;
	return nombre + edad;
}
soyGato('Duquesa');

/* FOREACH PARA ARRAY */
function recorrerMascotas(element, index, array){
	console.log('Mascota: [' + index + '] ' + element);
};

mascotas.forEach(recorrerMascotas);

var libros = ['El principito','El psicoanalista','El ruido y la furia'];
libros.forEach(function(element, index, array){
	console.log(element);
});

var ciudades = ['San Juan', 'Cordoba', 'Buenos Aires'];
ciudades.forEach(function(elemento, index, array){
	console.log('[' + index + '] ' + elemento);
});











