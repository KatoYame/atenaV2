// Source Code from NekoBotz (DanishGanz)

global.linkGC = ['https://chat.whatsapp.com/INua3dEj25B0eFrHma0OsC', 'https://chat.whatsapp.com/B9bGT4rmw8PFnTYCYRcNab', 'https://chat.whatsapp.com/B9bGT4rmw8PFnTYCYRcNab', 'https://chat.whatsapp.com/DrJE1mDfhyj3Q4xHp9HeL4'] // ganti jadi group lu
global.owner = ['6282317022706', '6282248192917'] // Put your number here
global.mods = ['6285904398191'] // Want some help?
global.prems = ['6282317022706', '6282248192917', '6281770640805', '6282289430674', '6288211040975'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  hardianto: 'https://hardianto-chan.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lolhum: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  fxc7: 'https://fxc7-api.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://api.xteam.xyz': 'Dawnfrostkey',
  'https://api.lolhuman.xyz': '929b48b9aa5a91abed8526cd',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'ShiroNeko',
  'https://pencarikode.xyz': 'APIKEY',
  'https://fxc7-api.herokuapp.com': 'fxc7COOL',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
//global.packname = '© Ayame Bot\nwa.me/6282317022706\n-\n-\n𝚋𝚢 𝙺𝚑𝚊𝚎𝚕𝚂𝚊𝚗\n\n\n\n\n\nⓈⓐⓞⓣⓞⓜⓔ\nⒶⓣⓔⓝⓐ\n\n\nFollow juga IG Orang yg bantu gw: @khaelll._'
global.packname = ''
global.author = '© Ayame Bot\nwa.me/6282317022706\n┏┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n┇\n┇					Ⓢⓐⓞⓣⓞⓜⓔ\n┇							Ⓐⓣⓔⓝⓐ\n┇\n┗┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\nғᴏʟʟᴏᴡ ɪɢ ᴏᴡɴᴇʀ: @ᴋʜᴀᴇʟʟʟ._\n𝚋𝚢 𝙺𝚑𝚊𝚎𝚕𝚂𝚊𝚗\n'
//global.author = 'Kato' // ganti aja

// msg
global.wait = '_*Ｗａｉt...*_'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!'
global.nsfw = 'Fitur NSFW Dimatikan.'
global.eror = '_*Server Error*_'
global.watermark = '© Ayame'

global.imagebot = 'https://telegra.ph/file/cf2ddb002f14feee3017d.jpg'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 64

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
