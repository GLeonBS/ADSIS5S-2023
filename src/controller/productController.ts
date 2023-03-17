import {Request, Response} from 'express'
import productService from '../service/productService'

class productController{
    async create(req: Request, res: Response){
        await productService.createProduct(req.body)

        return res.status(201).send()
    }

    public async show(req: Request, res: Response){
        const resposta = await productService.showProducts();
        return res.json(resposta)
    }

    public async transform(req: Request, res: Response){
        const lista = await productService.transformProducts()
        return res.json(lista)
    }
}

export default new productController()