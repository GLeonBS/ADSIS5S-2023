import { writeFile, readFile } from 'fs/promises'
import { ListFormat } from 'typescript';

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
            const list = {
                nome: item.nome,
                qtde: item.qtde,
                preco: item.preco,
                valor_estoque: item.qtde * item.preco
            }
            return list
        })
        return listaProdutos
    }

    async totalProdutos() {
        try {
            const estoque = await this.transformProducts()
            console.log(estoque);
            console.log(estoque.valor_estoque);
            // const total = estoque.reduce((acumulador, valorAtual) => acumulador + valorAtual.valor_estoque, 0)
            // Number.parseFloat(total)
            // console.log(total);
            // return total;
        } catch (err) {
            console.error("Não consegui :/ ", err);
        }
    }
}


export default new productService()