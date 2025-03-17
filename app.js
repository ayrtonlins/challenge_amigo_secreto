//Projeto Challenge Amigo Secreto 


// Variáveis das funções
let amigos = [];
let amigo = '';
let listaAmigos = '';
let resultado = '';
// Variáveis id do HTML
let idAmigo = 'amigo';
let idListaAmigos = 'listaAmigos';
let idResultado = 'resultado';




//Adiciona o nome na lista de amigos e na página HTML
function adicionarAmigo() {

    // Adiciona o amigo a lista de amigos
    if (adicionarNomeListaAmigos()) {
        // Adiciona o amigo a lista de amigos no HTML
        adicionarNomeListaAmigosHtml();   
    } 

}

// Realizar o sorteio 
function sortearAmigo() {

    let nomeSorteado = "";
    resultado = recuperarValorPeloId(idResultado);
        
    if(!(amigos.length === 0)) {
        
        nomeSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        resultado.innerHTML = "O amigo secreto sorteado é: " + nomeSorteado;
        amigos = [];
        listaAmigos.innerHTML = '';

    } 

}

// Adicionar o nome do amigo a lista de amigos
function adicionarNomeListaAmigos() {

    // Capturar o elemento HTML amigo
    amigo = recuperarValorPeloId(idAmigo);  

    //Remove os espaços
    amigo = amigo.value.trim();

    if (amigo === "") {
        alert("Por favor, insira um nome.");
        return false;
    } else if (amigos.includes(amigo)) {
        alert("O nome já consta na lista");
        return false;
    } else {
        amigos.push(amigo);
        limparCampo(idAmigo);
        return true;
    }

}

function adicionarNomeListaAmigosHtml() {
    
    // Capturar o elemento HTML listaAmigos 
    listaAmigos = recuperarValorPeloId(idListaAmigos);
    listaAmigos.innerHTML = "";
    resultado.innerHTML = "";

    amigos.forEach(function(nome) {
        
        //Cria elemento <li>
        let itemLi = document.createElement('li');
        itemLi.textContent = nome;
        listaAmigos.appendChild(itemLi);

    });

}


// Recuperar o valor do campo pelo ID informado
function recuperarValorPeloId(id) {
      
    return document.getElementById(id); 

}


// Limpar o campo de entrada
function limparCampo(id){
    
    document.getElementById(id).value = '';

}


