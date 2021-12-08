let fetch = require('node-fetch')

let handler = async (m, { conn, args, usedPrefix, command, isPrems }) => {
	var isNsfw = global.db.data.chats["6282248192917@s.whatsapp.net"].nsfw
	if (isNsfw === true) {
	if (!args[0]) {
			let no = 0
				return conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "Daftar Gacha Nsfw",
                        "description": `Pencet tombol "LIST-GACHA" untuk menampilkan daftar gacha`,
						"footerText": "Yahahaha ngatjeng kok sama kartun👎🏿",
                        "buttonText": "LIST-GACHA",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                {
                                    "title": "Status Bot",
                                    "description": "Status dan informasi Bot Atena.",
                                    "rowId": ".botstatus"
                                }, {
                                    "title": "Rules - S&K",
                                    "description": "User yang bijak selalu mematuhi Rules.",
                                    "rowId": ".snk"
                                }, {
                                    "title": "Sewa bot - Premium",
                                    "description": "Untuk kamu yang ingin melihat daftar harga sewa dan premium.",
                                    "rowId": ".sewabot"
                                }
                              ],
                                "title": "⟣────────❲ Tentang Bot dan lainnya ❳────────⟢"
                            }, {
                                "rows": [
                                {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Waifu",
                                    "rowId": `${usedPrefix}nsfwgacha waifu`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Neko",
                                    "rowId": `${usedPrefix}nsfwgacha neko`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Loli (buat para pedofil👎🏿)",
                                    "rowId": `${usedPrefix}nsfwgacha loli`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Genshin Impact",
                                    "rowId": `${usedPrefix}nsfwgacha genshin`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Furry",
                                    "rowId": `${usedPrefix}nsfwgacha furry`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Azurlane",
                                    "rowId": `${usedPrefix}nsfwgacha azurlane`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Frontline",
                                    "rowId": `${usedPrefix}nsfwgacha frontline`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "League of Legends",
                                    "rowId": `${usedPrefix}nsfwgacha lol`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Dota II",
                                    "rowId": `${usedPrefix}nsfwgacha dota2`
                                }
                              ],
                                "title": "⟣──────────❲  List Gacha Nsfw  ❳──────────⟢"
                            }, {
                                "rows": [
                                {
                                    "title": "Owner bot",
                                    "description": "pemilik Bot Ayame",
                                    "rowId": ".owner"
                                }, {
                                    "title": "Donasi",
                                    "description": "Jangan lupa donasi untuk mendukung bot agar bisa membeli apikey",
                                    "rowId": ".donasi"
                                }, {
                                    "title": "Kata penutup",
                                    "description": "Gacha doang, donasi kagak :/",
                                    "rowId": ".creator"
                                }
                              ],
                                "title": "⟣─────────────❲ Penutup ❳─────────────⟢"
                            }
                        ], "contextInfo": 
							{
								"stanzaId": m.key.id,
								"participant": m.sender,
								"quotedMessage": m.message
							}
						}
                 }, {}), {waitForAck: true})
		}
		
		
		
		
		
//    let er = `
//┌〔 Gacha Nsfw 〕
//│⬦ waifu
//│⬦ neko
//│⬦ loli
//│⬦ furry
//│⬦ azurlane
//│⬦ genshin
//│⬦ frontline
//│⬦ lol
//│⬦ dota2
//└────
//
//example:
//${usedPrefix + command} neko
//    `.trim()

    switch (args[0].toLowerCase()) {
				case 'waifu':
				case 'neko':
				case 'loli':
				let res = await fetch(global.API('lolhum', '/api/random/nsfw/' + args[0].toLowerCase(), {}, 'apikey'))
		m.reply(global.wait)
			if (!res.ok) throw await res.text()
			let img = await res.buffer()
			if (!img) throw img
				conn.sendButtonImg(m.chat, await(img), 'Hayoo ngapain gosok layar hp ke tytyd', watermark, 'ðŸ’¦Ngocok Lagi', `${usedPrefix}nsfwgacha ` + args[0].toLowerCase(), m)
				break
				case 'ahegao':
				case 'furry':
				case 'azurlane':
				case 'genshin':
				case 'frontline':
				case 'lol':
				case 'dota2':
			let res2 = await fetch(global.API('fxc7', '/api/nsfw' + args[0].toLowerCase(), {}, 'apikey'))
			m.reply(global.wait)
				if (!res2.ok) throw await res2.text()
				let img2 = await res2.buffer()
				if (!img2) throw img2
					conn.sendButtonImg(m.chat, await(img2), 'Hayoo ngapain gosok layar hp ke tytyd', watermark, 'ðŸ’¦Ngocok Lagi', `${usedPrefix}nsfwgacha ` + args[0].toLowerCase(), m)
			break
        default:
            throw er
		}
    }
    else conn.reply(m.chat, global.nsfw, m)
}
handler.help = ['nsfwgacha'].map(v => v + ' <type>')
handler.tags = ['hentai']
handler.command = /^nsfwgacha$/i

//handler.nsfw = true
handler.limit = 3

module.exports = handler
//Credit: By KhaelSan