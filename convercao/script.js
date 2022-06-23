var value1;
var value2;
var soma;

function soma(){
    value1 = parseInt(document.meuForm.valor1.value);
    value2 = parseInt(document.meuForm.valor2.value);

    soma = value1 + value2;

    window.alert('resultado da somatória = ' + soma.toString());
}