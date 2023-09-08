var formulario = document.getElementById('formulario');
var error = document.getElementById('error');

function Tabla() {
    var N1 = parseInt(document.getElementById('Numero').value);

    if (!isNaN(N1)) {

        var tablas = document.getElementById('Tablas');
        tablas.innerHTML = '';

        for (var A = 1; A <= 10; A++) {
            var resultado = N1 * A;
            
            var li = document.createElement('li');
            li.textContent = N1 + ' x ' + A + ' = ' + resultado;
            tablas.appendChild(li);
        }

    } else {

        var tablas = document.getElementById('Tablas');
        tablas.innerHTML = '';
        var li = document.createElement('li');
        li.textContent = 'Ingresa un número válido.'
        tablas.appendChild(li);


        
    }
}







formulario.addEventListener('submit', function (e) {

    e.preventDefault(); 
    Tabla();
});