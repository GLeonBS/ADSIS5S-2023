import { read } from 'fs';
import { writeFile, readFile } from 'fs/promises'

const alunosArr = [
    {
        nome: 'Luana',
        idade: 19,
        ra: '00000-01'
    },
    {
        nome: 'Mykaelly',
        idade: 20,
        ra: '00000-02'
    },
    {
        nome: 'Gabriel',
        idade: 23,
        ra: '00000-03'
    },
    {
        nome: 'Wilson',
        idade: 102,
        ra: '00000-04'
    }
]

class Alunos {
    private alunos = alunosArr


    writeStudent(){
        try {
            console.log('Craindo lista de alunos');
            
            writeFile('alunos.json', JSON.stringify(this.alunos, null, 2))    
        } catch (err) {
            console.error('Erro ao tentar escrever o arquivo', err);
        }
    }

    async readStudent() {
        const leuMemo = await readFile('alunos.json', "utf-8")
        console.log("Mas será que leu mesmo?", JSON.parse(leuMemo));
        
    }
}

export { Alunos }



