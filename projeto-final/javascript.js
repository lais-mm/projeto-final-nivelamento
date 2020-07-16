//Variáveis e constantes:
//São espaços reservados na mémoria que armazenam valores, sendo as variáveis valores que podem ser alterados e constantes valores que uma vez declarados não podem ser alterados
var a = 10
const b ='batatinha'

//Comandos de decisão:
//if/else -> são estruturas que executam códigos caso estes respondam a uma determinada condição pré estabelecida V/F
if (10 < 15){
    document.write('Verdadeiro');
}else{
    document.write('falso');
}

//loops:
// for / while / do while -> são estruturas que executam uma determinada condição pré estabelecida enquanto esta for verdadeira. 
//For sendo mais utilizado quando se tem um número definido de vezes a ser executado e o while quando não sabe-se o numero de vezes que determinada condição será executada
for (var i = 0; i < 10; i++){
    console.log(i)
}

while (i < 10){
    console.log(i);
    i++
}

//funções -> são blocos de código que irão realizar uma determinada tarefa. Podem ter retorno ou serem sem retorno (void)
function alerta(mensagem){
    alert('Olá mundo!');
}
alerta();

//escopos - local onde variáveis são declaradas podendo ser local ou global, variaveis globais podem ser utilizadas por todos os trechos do código, já as variáveis locais só podem ser utilizadas dentro do bloco que foram declaradas

//escopo global
var nome = 'lais'

function seuNome(){
//escopo local
    alert(nome);
}
seuNome();

//inputs e outputs - são entradas e saídas de dados
inputs: prompt
outputs: console.log, alert, document.write

//array são listas de informações
var listaNome = ['João', 'José', 'Maria']

//objetos são variáveis que contém propriedades
var curso = {
    nome: 'Serratec',
    ano: 2020,
    inicio: 'julho',
    termino: 'novembro'
}

//camelCase - caracteriza-se pela primeira palavra minúscula e as restantes iniciando em  letras maiúsculas
//PascalCase - caracteriza-se por cada palavra iniciando em letras maiúsculas
//kibab-case - Cada palavra é em letra minúscula e separada por hífen
//snake_case - Cada palavra é em letra minúscula e separada por underline

//Caminho absoluto - é o diretório do arquivo completo
//caminho relativo - é com base no arquivo que será executado

//Operadores :
// && and - retorna verdadeiro de todas as condições forem verdadeiras
// || ou - retorna verdadeiro se pelo menos uma das condiçoes foram verdadeiras
// == - igualdade
// != - diferente

//EPER - Entender / Planejar / Executar / Revisar - forma de organizar a criação do código, possibilitando também a revisão do mesmo

//Pilha - o primeiro que entra é o último que sai - LIFO
var pilha = [1,2,3]
pilha.pop
//Fila - o primeiro que entra é o primeiro que sai - FIFO
var fila = [1,2,3]
fila.shift

// != entre HTML/JS/CSS - javascript é uma linguagem de programação, HTML é uma linguagem de marcação de hipertextos e CSS são folhas de estilo

