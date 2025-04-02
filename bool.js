let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo)
console.log(!!isAtivo)

//dá pra forçar a saída das variáveis como true e false, basta colocar !!
console.log(!!3)
console.log(!!' ')
console.log(!!'')
console.log(!!null)
console.log(!!('' || null || 0 || ' '))

//dá pra fazer uma decisão entre duas saídas se a variável for false
//economizando um IF
let nome =''
console.log(nome ||'Desconhecido')


