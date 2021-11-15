let moment = require('moment-timezone')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    let name = conn.getName(m.sender)
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    await this.sendButton(m.chat, `
${ucapan()} ${name}

${user.banned ? 'kamu dibanned' : 'Ada yang bisa saya bantu?\n_Ayame adalah Bot WhatsApp, nama Ayame diambil dari istrinya Kato_'}
`.trim(), watermark, user.banned ? 'Pemilik Bot' : 'menu', user.banned ? '.owner' : '.?', m)
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Midnight Time"
    if (time >= 4) {
        res = "Good Morning"
    }
    if (time > 10) {
        res = "Good Afternoon"
    }
    if (time >= 15) {
        res = "Good Evening"
    }
    if (time >= 18) {
        res = "Night, Time to Sleep"
    }
    return res
}
