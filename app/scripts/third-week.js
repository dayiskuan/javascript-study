var myButton = document.querySelector('.btn.btn-lg.btn-success');
var myDiv = document.querySelector('.jumbotron');
var myFormInput = document.querySelector('.form-control');

/* eventos son acciones que ocurren bien sean por el usuario o por el navegador */
/* blur = elemento pierde foco */
myFormInput.addEventListener('blur', function(e){
    e.target.style.background = 'gray';
}, true);

/* focus = elemento gana foco */ 
myFormInput.addEventListener('focus', function(e){
    e.target.style.background = 'red';
}, true);

/* keydown = el usuario presiona una tecla */
myFormInput.addEventListener('keydown', function(e){
    e.target.style.background = 'green';
}, false);

/* keyup = el usuario libera una tecla */
myFormInput.addEventListener('keyup', function(e){
    e.target.style.background = 'black';
}, false);

/* keypress = el usuario mantiene presionada una tecla */
myFormInput.addEventListener('keypress', function(e){
    e.target.style.background = 'purple';
}, false);

/* mousedown = presiona el mouse sobre un elemento*/
myButton.addEventListener('mousedown', function(e){
    e.target.style.background = 'yellow';
}, false);

/* mousemove = pasar el mouse sobre un elemento*/
myButton.addEventListener('mousemove', function(e){
    e.target.style.background = 'brown';
}, false);

/* mouseout = mover el mouse fuera de un elemento*/
myButton.addEventListener('mouseout', function(e){
    e.target.style.background = 'red';
}, false);

/* mouseup = se libera el botón pulsado del mouse*/
myButton.addEventListener('mouseup', function(e){
    e.target.style.background = 'black';
}, false);

window.addEventListener('load', function(event){
    console.log('Página cargada');
});

/* JQUERY */
$('.btn.btn-lg.btn-default').on('click', function(e){
    var texto = $( this ).text();
    console.log('Clicked ' +  texto);
});

$('.btn.btn-lg.btn-default').trigger('click');

$('.btn.btn-lg.btn-default').click();

$('.btn.btn-lg.btn-default').off('click');

function hola(){
    console.log('Hola');
}

var ejemplo = function(){
    console.log('ejemplo');
}

$('.btn.btn-lg.btn-default').on('click.log', function(event){
    console.log(typeof event);
    event.preventDefault();
    hola();
    console.log('Soy jQuery');    
    console.log( 'Event type: ' + event.type );    // The event type, eg. "click"
    console.log( 'Event which: ' + event.which );   // The button or key that was pressed.
    console.log( event.target );  // The originating element.
    console.log( 'Event pageX: ' + event.pageX );   // The document mouse X coordinate.
    console.log( 'Event pagey: ' + event.pageY );   // The document mouse Y coordinate.
    $(this).css('background-color', 'yellow');
});

$('.btn.btn-lg.btn-default').on('click.new', function(){
    ejemplo();
});

$('.btn.btn-lg.btn-default').off('click.new');

$('.btn.btn-lg.btn-default').on('click, mouseover', ejemplo)

/* • Event capturing: The click happens on the document first, then it propagates
down to the body, the list, the list item, and finally to the link
• Event bubbling: The click happens on the link and then bubbles up to
the document */

function myButtonClick(e){
    var cancel = e.cancelable;
    console.log('botón ' + cancel);
    e.stopPropagation();
    e.preventDefault();
};

myButton.addEventListener('click', myButtonClick, false);

myDiv.addEventListener('click', function(){
    console.log('Click');
}, false); // Para definir si el flujo es event capturing o bubbling 

document.body.addEventListener('click', function () {
    console.log('clicked body');
}, false);

document.addEventListener('click', function () {
    console.log('clicked doc');
}, false);

window.addEventListener('click', function () {
    console.log('clicked window');
}, false);


