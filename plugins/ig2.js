const fetch = require('node-fetch')
const axios = require('axios')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `uhm.. url nya mana?\n\ncontoh:\n${usedPrefix + command} https://www.instagram.com/p/CNTwipplVtv/`
  if (!args[0].match(/https:\/\/www.instagram.com/gi)) throw `url salah, perintah ini untuk mengunduh post/reel/tv`
  m.reply(wait)
  let res = await axios(global.API('lolhum', '/api/instagram2', { url: args[0] }, 'apikey'))
  let json = res.data.result
		for(let i = 0; i < json.media.length; i++) {
                            await conn.sendFile(m.chat, json.media[i], '', `*Username:* ${json.account.username}\n*Caption:* ${json.caption}\n\n` + watermark, m)
                        }
}
handler.help = ['ig2'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ig2|instagram2)$/i

handler.limit = true

module.exports = handler