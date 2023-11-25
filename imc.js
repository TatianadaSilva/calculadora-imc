const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const botao = document.querySelector('#btn')
const resultado = document.querySelector('#resultado')


botao.addEventListener( 'click', imc)


function imc (){    
let massa = peso.value
let tamanho = Number(altura.value)
let imcfinal = massa/(tamanho*tamanho)


if (imcfinal<=18.5) { 
resultado.textContent = "Seu IMC é: "+ imcfinal.toFixed(2) +' , Você está  abaixo do peso.' }

else if (imcfinal>=18.5 & imcfinal <=24.9) { 
resultado.textContent = "Seu IMC é: "+ imcfinal.toFixed(2) +' , Você está com peso normal.' }

else if (imcfinal>=25 & imcfinal <=29.9) { 
resultado.textContent = "Seu IMC é: "+ imcfinal.toFixed(2) +' , Você está  acima do peso.' }

else if (imcfinal>=30 & imcfinal<=34.9) { 
resultado.textContent = "Seu IMC é: "+ imcfinal.toFixed(2) +' , Você está  com obesidade grau I.' }

else if (imcfinal>=35 & imcfinal <= 40) { 
resultado.textContent = "Seu IMC é: "+ imcfinal.toFixed(2) +' , Você está com obesidade grau II.' }
else if (imcfinal >=40) { 
resultado.textContent = "Seu IMC é: "+ imcfinal.toFixed(2) +' , Você está com obesidade grau III.' }


  }

