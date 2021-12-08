let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send3ButtonLoc(m.chat, await (await fetch(imagebot)).buffer(), `
┍───❲ List Sewa/Prem ❳───⟢
│⬦ 3 Days       :   *Free Trial* _(/user)_
│⬦ 1 Monthly :   *Rp 20000*
│⬦ Life Time  :   *Rp 25000*
│⬦ Premium   :   *Rp 20000*
│⬦ Sc Bot        :   *Rp 50000*
│
┝───❲ Payments ❳───⟢
│⬦ Ovo
│⬦ Dana
│⬦ Gopay
│⬦ ~Pulsa Tsel (rate)~
│
┕──────⟢


Note: Syarat dan Ketentuan Berlaku`.trim(), watermark, 'Dana', '.viadana', 'Ovo', '.viaovo', 'Gopay', '.viagopay', m)
}

handler.help = ['sewabot']
handler.tags = ['info']
handler.command = /^(premium|sewa|sewabot|belibot)$/i

module.exports = handler