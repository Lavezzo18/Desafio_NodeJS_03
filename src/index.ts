var express = require('express');
var app = express();
var  readlineSync  = require

app.listen(7000, () => {
  console.log('Executando na porta 7000!');

console.log('Desafio_03')

const nome1:string = 'Rafael Silva'; 
const nota1:number = 9;

const nome2:string = 'Gabriel Alves';
const nota2:number = 6;

  const readline = require('readline').createInterface({
    _input: process.stdin,
    get input() {
      return this._input;
    },
    set input(value) {
      this._input = value;},
    output: process.stdout,
  
  }) //2 alunos 
  
  readline.question(`Quantos alunos? R:`, (number: any) => { 
    console.log(`São ${number} alunos!`);
      readline.question(`Qual o nome dos alunos?`, (string: any) => {
        console.log(`Nome1: ${nome1}, Nome2: ${nome2}`);
          readline.question(`Qual a nota dos alunos:` , (number: any) => {
            console.log(`Nota1: ${nota1}, Nota2: ${nota2}`);
              console.log(`Maior Nota: ${nome1}, ${nota1}`); 
                readline.close();  
          })})})});
