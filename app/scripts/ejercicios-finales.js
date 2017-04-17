// Generar 3 números aleatorios entre 0 y 100, e imprimir el más grande
console.log('EJERCICIO 1');
var numbers = [];
for(var i = 0; i < 3; i++){
    numbers.push(Math.floor((Math.random() * 100)));
}
console.log(numbers);
console.log('El numero mayor del array es: ' + Math.max.apply(this, numbers));

//Generar un número aleatorio entre 0 y 100, e imprimir todos los números pares entre 0 y ese número
console.log('EJERCICIO 2');
var n = Math.floor((Math.random() * 100));
console.log(n);
var numbersEven = [];
for(var i = 0; i < n; i++){
    if(i % 2 == 0){
        numbersEven.push(i);
    }    
}
console.log('Los números que cumplen con la condición son: ');
console.log(numbersEven);

//Generar un número aleatorio entre 0 y 100, 
//e imprimir todos los números impares entre 30 y ese número. Si el número es menor que 30, no imprimir nada.
console.log('EJERCICIO 3');
console.log(n);
var numbersOdd = [];
if(n > 30){
    for(var i = 30; i < n; i++){
        if(i % 2 == 1){
            numbersOdd.push(i)
        }
    }
    console.log('Los números que cumplen con la condición son: ');
    console.log(numbersOdd);
}

//Generar un número aleatorio entre 0 y 100, e imprimir todos los números impares entre 30 y ese número. 
//Si el número es menor que 30, imprimir todos los números descendiendo desde 30 hasta el número generado. 
//Ej: Si el número es 30, imprimir 30, 29, 28, 27.
console.log('EJERCICIO 4');
console.log(n);
var numbersThirty = [];
if(n > 30){
    for(i = 30; i <= n; i++){
        if(i % 2 == 1){
            numbersThirty.push(i);
        }
    }
    console.log('Los números que cumplen con la condición son: ');
    console.log(numbersThirty);
} else if (n < 30){
    for(i = 30; i < n; i--){
        numbersThirty.push(i);
        numbersThirty.sort(function(a, b){ return b-a});
    }
    console.log('Los números que cumplen con la condición son: ');
    console.log(numbersThirty);
} else {
    console.log(30, 29, 28, 27)
}

//Generar un número aleatorio n entre 0 y 100, 
//luego generar n números aleatorios en ese mismo rango, e imprimir el más grande de ellos.
console.log('EJERCICIO 5');
function maxNum(){
    n = Math.floor((Math.random() * 100));
    console.log(n);
    var numbersRandom = [];
    for(var i = 0; i < n; i++){
        numbersRandom.push(Math.floor((Math.random() * 100)));
    }
    console.log(numbersRandom);
    console.log('El número más grande es: ' + Math.max.apply(this, numbersRandom));
}
maxNum();

//Generar un número aleatorio entre 1000 y 9999, e imprimir la suma de sus dígitos. 
//Por ejemplo, si el número generado es 2308, debe imprimir 13
console.log('EJERCICIO 6');
function sumDigits(long){
    var num = Math.floor((Math.random() * 8999) + 1000);
    console.log(num);
    var digits = [];
    digits = num.toString().split('').map(Number);
    while(digits.length > long){
        var sum = digits.reduce(function(a, b){ return a + b;});
        digits = sum.toString().split('').map(Number);
    }
    console.log('La suma de los digitos es: ')
    console.log(sum);
}
sumDigits(2);

//Generar un número aleatorio entre 1000 y 9999, y sumar sus dígitos repetidamente hasta que. 
//Por ejemplo, si el número generado es 2308, debe imprimir 4
console.log('EJERCICIO 7');
console.log('La suma de los digitos es: ')
sumDigits(1);

//Generar dos números aleatorios entre 2 y 100, y luego imprimir el Máximo Común Divisor de ellos. 
//Por ejemplo, si los números son 9 y 12, debe imprimir 3.
console.log('EJERCICIO 8');

function resultadoMCD(x, y) {  
    // A = B * Q + R - Algoritmo de Euclides
    x = Math.abs(x); // 2 
    y = Math.abs(y); // 3
    while(y) { // y = 3 / 2 / 1
        var t = y; // t = 3 / 2 / 1 
        y = x % y; // y = 2 % 3 = 2 / 3 % 2 = 1 / 2 % 1 = 0
        x = t; // x = 3 / 2 / 1
    } 
    return x; // 1  
}

function maximoComunDivisor(){
    var randomNumSix = Math.floor((Math.random() * 98) + 2);
    var randomNumSeven = Math.floor((Math.random() * 98) + 2);
    console.log('Los numeros son: ' + randomNumSix + ', ' + randomNumSeven);  
    console.log('El MCD es: ' + resultadoMCD(randomNumSix, randomNumSeven));
}
maximoComunDivisor();

//Generar dos números aleatorios entre 2 y 100, y luego imprimir el Mínimo Común Múltiplo de ellos. 
//Por ejemplo, si los números son 12 y 20, debe imprimir 60.
console.log('EJERCICIO 9');
function minimoComunMultiplo(){
    var randomNumSix = Math.floor((Math.random() * 98) + 2);
    var randomNumSeven = Math.floor((Math.random() * 98) + 2);
    console.log('Los numeros son: ' + randomNumSix + ', ' + randomNumSeven);
    function resultadoMCM(x, y) {   
        return (!x || !y) ? 0 : Math.abs((x * y) / resultadoMCD(x, y));  
    }    
    /*function resultadoMCD(x, y) {  
        x = Math.abs(x);  
        y = Math.abs(y);  
        while(y) {  
            var t = y;  
            y = x % y;  
            x = t;  
        } 
        return x;  
    }*/
    console.log('El MCM es: ' + resultadoMCM(randomNumSix, randomNumSeven));
}
minimoComunMultiplo();

//Generar diez números aleatorios entre 0 y 100, e imprimir el promedio y la desviación estándar de ellos
console.log('EJERCICIO 10');
function promedioDesviacion(){
    var newArray = [];
    for(i = 0; i < 10; i++){
        newArray.push(Math.floor((Math.random() * 100)));
    }
    console.log(newArray);
    function calcular() {
        var total = 0;
        for(var key in newArray) {
            total += newArray[key];                        
        }
        var promedio = total / newArray.length;
        console.log('El promedio es: ' + promedio);
        var desvEstandar = 0;
        for(var index in newArray){
            desvEstandar += Math.pow((parseFloat(newArray[index]) - promedio), 2);            
        }
        var desvEstandar = Math.sqrt(desvEstandar/newArray.length);
        console.log('La desviación estándar es ' + desvEstandar);
    }
    calcular(newArray);
}
promedioDesviacion();