
const { Database } = require('sileco.db')
const db = new Database()
const inquirer = require('inquirer');
const main = require('../main.js')

module.exports.run = async () => {
    inquirer.prompt({
        type: 'input',
        name: 'id',
        message: 'Insira o id do seu projeto:'

    }).then(resposta => {
        inquirer.prompt({
            type: 'confirm',
            name: 'con',
            message: `O id foi inserido corretamente? ${resposta.id}`
        }).then(respostar => {
 
            if (respostar.con === true) {

                db.set('rich.id', resposta.id)
        
                //     db.write()
                console.log('\x1b[36m%s\x1b[0m', '(U-U)/ | O id do Rich Presence foi setado com sucesso!')
                main.remotemenu()
            } else {
                console.warn('\x1b[31m%s\x1b[0m', '(UwU)/ | Ação cancelada com sucesso!')
                main.remotemenu()
            }
        })
    })

    
        


}
//