let fetch = require('node-fetch')

let handler  = async (m, { conn, usedPrefix }) => {
	conn.sendButtonLoc(m.chat, await (await fetch(fla + 'List Group Ayame')).buffer(), `
⟣───❲ List GC ${conn.getName(conn.user.jid)} ❳────⟢
${(global.linkGC).map((v, i) => '*Group ' + (i + 1) + '*\n' + v).join`\n\n`}


📌Jika ada link error harap lapor ke owner
		`.trim(), watermark, 'Owner Bot', '.owner', m)
}

handler.help = ['linkgroupbot [warn antilink]', 'linkgrupbot [warn antilink]', 'linkgcbot [warn antilink]']
handler.tags = ['info']
handler.command = handler.command = /^linkg(roup|rup|c)bot$/i

handler.exp = 0

module.exports = handler