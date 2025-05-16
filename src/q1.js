// CRIAÇÃO DA FUNÇÃO
function verifica(variavel){
    if(typeof(variavel) === 'string'){ // CONDIÇÃO PARA VERIFICAR SE A VARIÁVEL É STRING
        return true; // SE FOR STRING RETORNA TRUE
    } else {
        return false; // SE NÃO FOR STRING RETORNA FALSE
    }
}