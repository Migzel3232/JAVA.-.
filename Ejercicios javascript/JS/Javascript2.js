var formulario = document.getElementById('formulario');
var error = document.getElementById('error');

function Lista() {
    var N1 = document.getElementById('Numero').value;

    var tablas = document.getElementById('Tablas');
    tablas.innerHTML = '';

    var resultado = [N1];
    var resultado2 = resultado[0].split('').reverse().join(''); // Invertir la cadena

    // Crear un elemento para mostrar el resultado
    var resultadoElement = document.createElement('p');
    resultadoElement.textContent = resultado2;

    // Agregar el elemento al DOM
    tablas.appendChild(resultadoElement);
}

formulario.addEventListener('submit', function (e) {
    e.preventDefault(); 
    Lista();
});