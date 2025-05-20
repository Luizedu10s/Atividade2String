function AbreviarNome(str){
    let novoNome = str.split(' '); // RETORNA A STRING EM UM ARRAY
    let nomeAbreviado = ''; // VARIÁVEL QUE VAI ARMAZENAR O NOME ABREVIADO
    for(let nome of novoNome){
        if(novoNome.indexOf(nome) == 0){
            nomeAbreviado += nome;
            nomeAbreviado += ' ';
        } else {
            nomeAbreviado = nomeAbreviado + nome[0] + '.' + ' ';
        }
    }
    // RETORNA O NOME ABREVIADO
    return nomeAbreviado;
}