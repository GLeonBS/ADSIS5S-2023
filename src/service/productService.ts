import { writeFile, readFile } from 'fs/promises'

class productService{
    async createProduct(data){
        try {
            console.log('Criando lista de produtos');
            await writeFile('products.json', JSON.stringify(data, null, 2)) 
        } catch (err) {
            console.error('Erro ao tentar escrever o arquivo de produtos, ', err);
        }
    }

    async showProducts(){
        try {
            console.log("Lendo produtos")
            const produtos = await readFile('products.json', "utf-8")
            return JSON.parse(produtos)
        } catch (err) {
            console.error("Não consegui ler, ", err);
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
}


export default new productService()