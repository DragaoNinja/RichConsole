
const inquirer = require('inquirer');


const { Database } = require('sileco.db')
const db = new Database()

console.log('\x1b[36m%s\x1b[0m', '888888b.  d8b          888       .d8888b.                                      888          '); 
console.log('\x1b[36m%s\x1b[0m','888   Y88b Y8P          888      d88P  Y88b                                     888   '  );
console.log('\x1b[36m%s\x1b[0m','888    888              888      888    888                                     888   '       );
console.log('\x1b[36m%s\x1b[0m','888   d88P 888  .d8888b 88888b.  888         .d88b.  88888b.  .d8888b   .d88b.  888  .d88b.  ');
console.log('\x1b[36m%s\x1b[0m','8888888P"  888 d88P"    888 "88b 888        d88""88b 888 "88b 88K      d88""88b 888 d8P  Y8b ');
console.log('\x1b[36m%s\x1b[0m', '888 T88b   888 888      888  888 888    888 888  888 888  888 "Y8888b. 888  888 888 88888888 '); 
console.log('\x1b[36m%s\x1b[0m','888  T88b  888 Y88b.    888  888 Y88b  d88P Y88..88P 888  888      X88 Y88..88P 888 Y8b.   ' );
console.log('\x1b[36m%s\x1b[0m', '888   T88b 888  "Y8888P 888  888  "Y8888P"   "Y88P"  888  888  88888P  "Y88P"  888  "Y8888');
console.log('\x1b[36m%s\x1b[0m','\n\n');
console.log ('\x1b[35m', 'Bem vindo ao RichConsole, um programa simples e rapido para RichPresence \n\n (~__~)/ | Dev: DragaoNinja\n\n(-_-)/ | Version: Beta 0.1.1');


module.exports.remotemenu = async () => {
 
    inquirer
  .prompt([
{
    type: 'rawlist',
    name: 'ei',
    message: 'Oque deseja fazer?',
    choices: ['Ligar', 'Setar id do RichPresence','Setar textos do RichPresence','Setar Imagens do RichPresence'],
  },
  ])
      .then(answers => {
        let dbarchive = require('./sileco-db.json');
      if (answers.ei === 'Ligar') {

        let id = dbarchive['rich.id']
     
        let text1 = dbarchive['rich.details']
             let text2 = dbarchive['rich.state']
        if (id != undefined && text1 != undefined && text2 != undefined) {
          let archive = require('./functions/on.js')
                
          archive.run()
        } else {
          console.warn('\x1b[31m%s\x1b[0m', '(UwU)/ | Configure o Rich Presence primeiro para depois o ligar.')
          module.exports.remotemenu()
        }
      } else if (answers.ei === 'Setar id do RichPresence') {
        let archive = require('./functions/id.js')
                
        archive.run()
      } else if (answers.ei === 'Setar textos do RichPresence') {
        let archive = require('./functions/text.js')
                
        archive.run()
      } else if (answers.ei === 'Setar Imagens do RichPresence') {
           let archive = require('./functions/image.js')
                
        archive.run()
      } 
          })
}
module.exports.remotemenu()


    // Use user feedback for... whatever!!
