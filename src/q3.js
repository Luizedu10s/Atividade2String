let VerificarStr = (str, separador) => {
    const resultado = []; // Lista para armazenar as partes da string
    let atual = ""; // Variável para armazenar a parte atual da string

    for (let i = 0; i < str.length; i++) {
        const letra = str[i]; // Obtém a letra atual da string
        if(letra === separador){ // Verifica se a letra atual é o separador
            resultado.push(atual); // Adiciona a parte atual a lista de resultados
            atual = "";
        } else {
            atual += letra; // Adiciona a letra atual à parte atual
        }
    }
    resultado.push(atual); // Adiciona a última parte após o separador
    return resultado; // Retorna a lista de partes da string
}

/*
A função VerificarStr recebe uma string e um separador como parâmetros. 
Ela percorre a string, dividindo-a em partes sempre que encontra o separador. 
As partes são armazenadas em uma lista, que é retornada no final.
*/
