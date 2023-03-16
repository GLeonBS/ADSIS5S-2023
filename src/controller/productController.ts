import {Request, Response} from 'express'
import productService from '../service/productService'

class productController{
    async create(req: Request, res: Response){
        await productService.createProduct(req.body)

        return res.status(201).send()
    }
}

export default new productController