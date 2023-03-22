import { writeFile, readFile } from 'fs/promises'

class productService{
    async createProduct(data){
        try {
            await writeFile('products.json', JSON.stringify(data, null, 2)) 
        } catch (err) {
            throw new Error("Não foi possível criar o arquivo de produtos ")
            console.error("Erro: ", err);
        }
    }

    async showProducts(){
        try {
            const produtos = await readFile('products.json', "utf-8")
            return JSON.parse(produtos)
        } catch (err) {
            throw new Error("Não foi possível ler o arquivo de produtos ")
            console.error("Erro: ", err);
        }
    }

    async transformProducts() {
        const products = await this.showProducts()        
        const listaProdutos = products.map(item => {
            const list = [{
                nome: item.nome,
                qtde: item.qtde,
                preco: item.preco,
                valor_estoque: item.qtde * item.preco
            }]
            return list
        })
        return listaProdutos
    }

    async totalProdutos() {
        const estoque = await this.transformProducts()
        const total = estoque.reduce((acumulador: number, valorAtual) => {
            const soma = acumulador + Number.parseFloat(valorAtual.valor_estoque)
            console.log(soma);
        })
    }
}


export default new productService()