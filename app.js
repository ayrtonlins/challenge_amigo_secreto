//Projeto Challenge Amigo Secreto 

let amigos = []


function adicionarAmigo() {
    
    // Capturar o valor do campo de entrada
    let amigo = recuperarValorPeloId('amigo');  

    // Validação para garantir que o campo não esteja vazio
    if (amigo === "") {
        alert("Por favor, insira um nome.");
    } else {
        adionarValorListaAmigos(amigo);
        limparCampo('amigo');
    }
        alert(amigos);
      
}


// Recuperar o valor do campo pelo ID informado
function recuperarValorPeloId(id) {
      
      return document.getElementById(id).value.trim();   
}

// Adicionar o nome do amigo a lista de amigos
function adionarValorListaAmigos(amigo) {
    
    amigos.push(amigo);
}

// Limpar o campo de entrada
function limparCampo(id){
    document.getElementById(id).value = '';
}



