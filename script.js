//a idéia é você escolher um inimigo e uma arma, se o dano da arma mais uns pontos aleatórios for mais que a vida, você vence
//incluindo valores padrão
//o const declara  

const vidaPorPersonagem = {
    'Curupira' : 8,
    'Iara' : 12,
    'Paje': 18,
}

const danoPorArma = {
    'Zarabatana' : 2,
    'Arco' : 5,
    'Ervas': 10,
}

//Declarando variáveis a serem utilizadas 
//O let declara que a variável pode mudar ao longo do programa
//personagemSelecionado - o div que vai mudar quando clicar
//armaSelecionada - o div que vai mudar quando clicar

let personagemSelecionado;
let armaSelecionada;

function iniciar(){
    const elementos = document.getElementsByClassName('cont3');

    for (const elemento of elementos) {
        elemento.addEventListener('click', marcarElementoSelecionado);
    }

    document.getElementById('btnCalcular').addEventListener('click', calcularDano);
}

//função que muda o design dos divs dos personagens
function marcarElementoSelecionado(evento){
    const elementoSelecionado = evento.target.parentElement;  //O target permite localizar um ponto na tela e o parent Element me traz o elemento do HTML que está naquele ponto(alvo)

    if(!elementoSelecionado.classList.contains("cont3")){
        return;
    }

    const idElementoSelecionado = elementoSelecionado.getAttribute("id") //capturando o id do elemento

    if(elementoSelecionado.classList.contains("personagem")){
        personagemSelecionado = idElementoSelecionado;
        limparElementosSelecionados("personagem");
    }
    else{
        armaSelecionada = idElementoSelecionado;
        limparElementosSelecionados("arma");
    }
    elementoSelecionado.classList.add("selecionado");
}

function limparElementosSelecionados(tipo){
    const elementos = document.getElementsByClassName("cont3");
    for (const elemento of elementos){
        if(elemento.classList.contains(tipo)){
            elemento.classList.remove("selecionado");
        }
    }
}

function calcularDano(){
    if(!personagemSelecionado || !armaSelecionada){ // ||->or && -> and
        alert("Selecione o personagem e a arma para calcular o dano");
        return;
    }

    const danoDados = rolarDados()
    const danoArma = danoPorArma[armaSelecionada];
    const danoTotal = danoArma + danoDados;
    const vidaPersonagem = vidaPorPersonagem[personagemSelecionado]

    let resultado = "Dano: " + danoTotal + "!"
    if (danoTotal >= vidaPersonagem){
        resultado += "Parabéns você matou o personagem"
    }
    else{
        resultado += "Que pena, o personagem sobreviveu!"
    }

    document.getElementById('dano').innerHTML = resultado;
}

function rolarDados() {
    min = Math.ceil(1);
    max = Math.floor(10);
    return Math.floor(Math.random() * (max - min)) + min;
}

