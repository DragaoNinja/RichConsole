
const { Database } = require('sileco.db')
const db = new Database()
const inquirer = require('inquirer');
const main = require('../main.js')

module.exports.run = async () => {
    inquirer.prompt([{

               type: 'input',
        name: 'se',
        message: 'Mande os status do seu RichPrecense:' 
    }
        , {
            type: 'input',
        name: 'de',
        message: 'Mande os detalhes do seu RichPrecense:' 
    }
     ]).then(respostas => {
        if (respostas.de === null || respostas.se === null) {
            console.warn('\x1b[31m%s\x1b[0m', '(UwU)/ | Insira os valores corretamente!')

      main.remotemenu()
        } else {
          
            db.set('rich.details', respostas.de) 
                  db.set('rich.state',respostas.se) 
         
        
            console.log('\x1b[36m%s\x1b[0m', '(U-U)/ | Os textos do Rich Presence foram setados com sucesso!')
            
            main.remotemenu()
  }
})

}