const escola = "Cod3r"

console.log(escola.charAt(3))
console.log(escola.charCodeAt(3))//retorna o código do caractere na tabela unicode
console.log(escola.indexOf('3'))//retorna a posição do caracter na string

console.log(escola.substring(1))//imprime a string a partir do índice especificado
console.log(escola.substring(0, 3))//imprime entre os indices especificados

console.log("Escola " .concat(escola) .concat("!"))//concatena diferentes strings, pode ser substutuido por "+"
console.log(escola.replace(3, 'e'))//troca o primeiro pelo segundo, vale pra todos na string

console.log('Ana,Maria,Pedro'.split(','))//gera um array separando os pedaços no caracter especificado

