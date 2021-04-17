const { Database } = require('sileco.db')
const db = new Database()
 const main = require('../main.js')

const dbarchive = require('../sileco-db.json')
module.exports.run = async () => {
  function getid(){
    return dbarchive['rich.id'];
  }
    const clientt =  require('discord-rich-presence')(getid());
  function getde(){
  return dbarchive['rich.details'];
  }
    function getst(){
   return dbarchive['rich.state'];
  }
    function getlk(){
   return dbarchive['rich.largekey'];
  }
    function getsk(){
return dbarchive['rich.smallkey'];
}
      clientt.updatePresence({
  state: getde(),
  details: getst(),
  startTimestamp: Date.now(),
  largeImageKey: getlk(),
  smallImageKey: getsk(),
  instance: true,
      });
  




  console.log('\x1b[36m%s\x1b[0m', '(U-U)/ | O Rich Presence foi iniciado com sucesso!')
      main.remotemenu()
}