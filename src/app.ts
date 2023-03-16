// 1 - Importamos o express
import express from 'express'
// 19 - Importamos a constante routes de routes.ts
import routes from './routes'
// import mongoose from 'mongoose'

// 2 - Criamos uma classe App, que irá conter e prover para quem chama-la as configurações da aplicação
class App {
    // 3 - Criou uma atributo publico chamado express, que é do TIPO express.Application
    public express: express.Application

    // 4 - Criamos um construtor para a nossa classe
    public constructor() {
        // 5 - Estamos atribuindo para o atributo express, uma instancia de express(), para assim acessar seus métodos
        this.express = express()

        // 8 - Chamamos no construtor o método middleware, ou seja, quem instanciar essa classe, já irá executar este método
        this.middleware()

        // 22 - estamos chamando o método routes, e assim que essa classe for instanciada, ela já executará o método routes
        // obs: por isso o server quando for executado saberá quais são as rotas da minha aplicação
        this.routes()
        // this.database()
    }

    // 6 - criamos um método chamado middleware
    public middleware(): void {
        // 7 - Quem chama o método middleware está utilizando o método use() do express, para informar ao framework
        // que ele deve entender requisições e respostas no formato json
        this.express.use(express.json())
    }

    // private async database() {
    //     try {
    //         mongoose.set("strictQuery", true)
    //         await mongoose.connect('mongodb+srv://thiagobussola:batatinha123@cluster0.cxavqaz.mongodb.net/?retryWrites=true&w=majority')
    //         console.log('Connect database success')
    //     } catch (err) {
    //         console.error('Connect database fail, error: ', err)
    //     }
    // }

    // 20 - Criamos um método chamado routes
    public routes(): void {
        // 21 - Estamos falando para o express utilizar o que está na constante routes como uma configuração de rotas
        this.express.use(routes)
    }
}

// 9 - estamos exportando a classe App já instanciada e já utilizando a propriedade express, ou seja, quem chama essa classe
// automaticamente já utiliza a propriedade .express
export default new App().express