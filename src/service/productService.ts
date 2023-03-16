import { writeFile } from 'fs/promises'

class productService{
    async createProduct(data){
        try {
            console.log('Criando lista de produtos');
            await writeFile('products.json', JSON.stringify(data, null, 2)) 
        } catch (err) {
            console.error('Erro ao tentar escrever o arquivo de produtos, ', err);
        }
    }
}


export default new productService()