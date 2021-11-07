/* Capturar nome e sobrenome 
Saudação
El Entrada Document.form 
El Saida window.alert*/

//Definicição
let js_name;
let js_surname;
let js_completeName;

function concatena(){

    js_name = document.formConcatena.f_name.value;

    js_surname = document.formConcatena.f_surname.value;

    js_completeName = js_name + '' + js_surname;

    window.alert("Olá! " +js_completeName+ ", Seja bem vindo!");
}