import {Request, Response} from 'express'
import productService from '../service/productService'

class productController{
    async create(req: Request, res: Response){
        await productService.createProduct(req.body)

        return res.status(201).send()
    }

    public async show(req: Request, res: Response){
        const resposta = await productService.showProducts();
        return res.status(200).send(resposta)
    }

    public async transform(req: Request, res: Response){
        const lista = await productService.transformProducts()
        return res.status(200).send(lista)
    }

    public async getTotal(req: Request, res: Response){
        return res.json(await productService.totalProdutos())
    }
}

export default new productController()