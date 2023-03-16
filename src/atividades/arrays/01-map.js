const nums = [1, 2, 3, 4, 5]

const dobro = (n) => n*2

const resultado = nums.map(item => item * 2)

//console.log(nums.map(dobro))
//console.log(resultado)

const nomes = ['Ana', 'Guilherme', 'Tiago', 'Luana', 'Soldado', 'Versales']

const letras = nomes.map(text => text)
// console.log(letras)


const carrinho = [
    {nome: 'Caneta', qtde: 10, preco : 7.99},
    {nome: 'Impressora', qtde: 0, preco : 649.50},
    {nome: 'Caderno', qtde: 4, preco : 27.10},
    {nome: 'Lapis', qtde: 3, preco : 5.82},
    {nome: 'Tesoura', qtde: 1, preco : 19.20},
]

//1 utilizando mostrar somento os nomes do produtos o carrinho

const nomesCarrinho = carrinho.map(item => item.nome)
console.log(nomesCarrinho)

//2 exibam um array com a multiplicação da qtde pelo preço

const total = carrinho.map(item => item.qtde * item.preco) 
console.log(total)


const itensValidos = carrinho.filter(item => item.qtde > 1).map(item => item.nome)

console.log(itensValidos)

//o reduce não necessáriamente retorna um array no final

