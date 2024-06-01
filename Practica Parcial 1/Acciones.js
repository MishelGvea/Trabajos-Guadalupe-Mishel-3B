function calcularIMC() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value) / 100; // Convertir altura a metros
    var imc = peso / (altura * altura);
    var resultado = '';

    if (!isNaN(imc)) {
        resultado = 'Su IMC es ' + imc.toFixed(2) + '. ';

        var clasificacion = '';
        if (imc < 18.5) {
            clasificacion = 'Bajo en peso';
        } else if (imc >= 18.5 && imc < 25) {
            clasificacion = 'Peso normal';
        } else if (imc >= 25 && imc < 30) {
            clasificacion = 'Sobrepeso';
        } else {
            clasificacion = 'Obesidad';
        }

        var posicion = '';
        switch (clasificacion) {
            case 'Bajo peso':
                posicion = 'Delgado';
                break;
            case 'Peso normal':
                posicion = 'Normal';
                break;
            case 'Sobrepeso':
                posicion = 'Sobrepeso';
                break;
            case 'Obesidad':
                posicion = 'Obeso';
                break;
        }

        resultado += 'Usted está ' + clasificacion + '. Su posición en la tabla del IMC es: ' + posicion + '.';
    } else {
        resultado = 'Por favor ingrese un peso y una altura válidos.';
    }

    document.getElementById('resultado').innerHTML = resultado;
}