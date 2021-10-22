/* Capturar nome e sobrenome 
Saudação
El Entrada Document.form 
El Saida window.alert*/

/* Definição variável */
var js_name;
var js_surname;
var js_completName;

function concatena() {

    js_name = document.FormConcatena.f_name.value;
    js_surname = document.FormConcatena.f_surname.value;

    js_completName = js_name + ' ' + js_surname;

    window.alert('Olá '  + js_completName);

}