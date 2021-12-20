let fetch = require('node-fetch')
let atena = 'https://telegra.ph/file/cf2ddb002f14feee3017d.jpg'
let handler = async (m, { conn }) => conn.send3ButtonLoc(m.chat, await (await fetch(atena)).buffer(), `
┌〔 Donate/Donasi 〕
├ Tsel:082317022706
├ Gopay:085299575547
├
│
└────

Donate to Support Ayame Bot
~Kato
`.trim(), watermark, 'Dana', '.viadana', 'OVO', '.viaovo', 'Gopay', '.viagopay',)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
