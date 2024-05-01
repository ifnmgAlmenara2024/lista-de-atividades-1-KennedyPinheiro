let peso = parseFloat(window.prompt("Me informe seu peso (kg): "));
let altura = parseFloat(window.prompt("Me diga a sua altura(metros): "));
let imc = peso / (altura * altura);

let classes = (imc < 18.5) ? "Abaixo do Peso" : 
(imc >= 18.5 && imc <= 24.9) ? "Peso Normal" : 
(imc >= 18.5 && imc <= 29.9) ? "Excesso de Peso" : 
(imc >= 18.5 && imc <= 34.9) ? "Obesidade Classe I" : 
(imc >= 18.5 && imc <= 39.9) ? "Obesidade Classe II" : "Obesidade Classe III"

alert("Seu Imc é: "+ imc.toFixed(2));
alert("Você ficou categorizado em: "+ classes);

