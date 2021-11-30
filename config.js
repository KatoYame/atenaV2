//──────────────────────────────────────────────────\\
//──────────────────────────────────────────────────\\
//											© KhaelSan - © AtenaBot													  \\
//──────────────────────────────────────────────────\\
//──────────────────────────────────────────────────\\
global.linkGC = ['https://chat.whatsapp.com/I0mpMnpPncB9qzAAtd6c14', 'https://chat.whatsapp.com/FtztbBRlAis2o9r6ebLhzj', 'https://chat.whatsapp.com/IfZhXNWaOCMH69jtHbv9xk', 'https://chat.whatsapp.com/DrJE1mDfhyj3Q4xHp9HeL4'] // ganti jadi group lu
global.owner = ['6282317022706', '6282248192917'] // Put your number here
global.mods = ['6285904398191'] // Want some help?
global.prems = ['6282317022706', '6282248192917', '6281770640805', '6282193003879', '6288211040975'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  hanzz: 'https://hanzzganz.herokuapp.com',
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
  'https://hanzzganz.herokuapp.com': 'HanzzGanz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://api.xteam.xyz': 'Dawnfrostkey',
  'https://api.lolhuman.xyz': 'KontoleBaperan',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'ShiroNeko',
  'https://pencarikode.xyz': 'APIKEY',
  'https://fxc7-api.herokuapp.com': 'fxc7COOL',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = '© Ayame Bot\nwa.me/6282317022706\n-\n-\n𝚋𝚢 𝙺ato&khael\n\n\n\n\n\n\nakiri\n\ayame\n\n\nFollow juga IG temen gw: @khaelll._'
global.author = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nn'
//global.packname = ''
//global.author = '© Ayame Bot\nwa.me/6282317022706\n┏┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n┇\n┇					nakiri\n┇							ayame\n┇\n┗┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\nғᴏʟʟᴏᴡ ɪɢ orang yg bantu gw: @ᴋʜᴀᴇʟʟʟ._\n𝚋𝚢 𝙺ato&khael\n'

// msg
global.wait = '```Wait a few seconds...```'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!'
global.nsfw = 'Fitur NSFW Dimatikan.'
global.eror = '```Looks like something error...```'
global.watermark = '© Ayame'

global.imagebot = 'https://telegra.ph/file/cf2ddb002f14feee3017d.jpg'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 64

//*****************PEMBATAS*********************\\
// DON'T CHANGE OR REMOVE!, IF ERROR DON'T ASK ME!

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})