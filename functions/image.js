
const { Database } = require('sileco.db')
const db = new Database()
 const inquirer = require('inquirer');
const main = require('../main.js')

module.exports.run = async () => {
    inquirer.prompt([{
        type: 'input',
        name: 'gk',
        message: 'Insira o chave da imagem grande:'
    },{
        type: 'input',
        name: 'sk',
        message: 'Insira o chave da imagem pequena:'
    }]).then(respostas => {
        if (respostas.sk === null || respostas.gk === null) {
            console.warn('\x1b[31m%s\x1b[0m', '(UwU)/ | Insira os valores corretamente!')
    main.remotemenu()
      main.remotemenu()
        } else {
            db.set('rich.largekey', respostas.gk)
            db.set('rich.smallkey', respostas.sk)
            console.log('\x1b[36m%s\x1b[0m', '(U-U)/ | As imagens do Rich Presence foi setado com sucesso!')
                main.remotemenu()
        }
})

}