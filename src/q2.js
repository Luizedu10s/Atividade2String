// CRIAÇÃO DA FUNÇÃO
function VerificarVazia(variavel){
    if(variavel.length == 0){ // CONDIÇÃO PARA VERIFICAR SE A STRING ESTA VAZIA
        return true; // SE A STRING ESTIVER VAZIA RETORNA TRUE
    } else {
        return false; // SE A STRING NÃO ESTIVER VAZIA RETORNA FALSE
    }
}

exports.default = VerificarVazia; // EXPORTA A FUNÇÃO VERIFICARVAZIA