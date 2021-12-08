let fs = require('fs')
let handler = async (m, { conn, usedPrefix, command }) => {
	var database = fs.readFileSync('./database.json')
		let d = new Date(new Date + 3600000)
			let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
			conn.reply(m.chat, `Database: ${date}`, null)
				conn.sendFile(m.chat, database, "database.json", "", null)
}

handler.help = ['getdabase']
handler.tags = ['owner']
handler.command = /^(database|getdatabase)$/i

handler.owner = true

module.exports = handler