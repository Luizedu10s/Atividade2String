 // Retorna uma parte da string entre os índices InicioStr e FimStr
let RecortarStr = (Str, InicioStr, FimStr) => { Str.slice(InicioStr, FimStr); }

/*

A arrow-function RecortarStr() recebe uma string e dois índices (InicioStr e FimStr) como parâmetros.
A função .slice retorna uma parte da string conforme é repassado os índices InicioStr e FimStr.

exemplo:
let str = "0123456789"; // string de exemplo
RecortarStr(str, 0, 5); 
Resultado: "01234"

*/

