let fs = require('fs')
let fetch = require('node-fetch')
let handler = m => m

handler.all = async function (m, { isBlocked }) {

    if (isBlocked) return
    if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return
    let setting = db.data.settings[this.user.jid]
    let { isBanned } = db.data.chats[m.chat]
    let { banned } = db.data.users[m.sender]

    // ketika ditag
    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
            await this.send2Button(m.chat,
                isBanned ? 'Ayame lagi capek' : banned ? 'kamu dibanned' : 'Ayame desu',
                watermark,
                isBanned ? 'Unban' : banned ? 'Pemilik Bot' : 'Menu',
                isBanned ? '.unban' : banned ? '.owner' : '.?',
                m.isGroup ? 'Ban' : isBanned ? 'Unban' : 'Donasi',
                m.isGroup ? '.ban' : isBanned ? '.unban' : '.donasi', m)
        }
    } catch (e) {
        return
    }

    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        this.send3ButtonLoc(m.chat, await (await fetch(imagebot)).buffer(), `
┍━━〔List Sewa/Prem〕━⬢
│⬦ *1 Bulan* :      *Rp 15000*
│⬦ *Permanen* : *Rp 25000*
│⬦ *Premium* :   *Rp 20000*
│⬦ *Moderator* : *Rp 30000* (stok terbatas)
│⬦ *Sc Bot* :        *Rp 50000*
│
┝━━〔Payments/Pembayaran〕━⬢
│⬦ Ovo
│⬦ Dana
│⬦ Gopay
│⬦ Pulsa Tsel (rate)
│
┕━━━⬢

Note: Syarat dan Ketentuan Berlaku`.trim(), watermark, 'Dana', '.viadana', 'Ovo', '.viaovo', '.viagopay', '.gopay', m)
}

    // salam
    let reg = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
    let isSalam = reg.exec(m.text)
    if (isSalam && !m.fromMe) {
        m.reply(`_wa\'alaikumussalam wr.wb._`)
    }
    let reg2 = /(shalom|syalom)/i
    let isSalam2 = reg2.exec(m.text)
    if (isSalam2 && !m.fromMe) {
        m.reply(`_Damai Sejahtera di Hati_`)
    }

    // backup db
    if (setting.backup) {
        if (new Date() * 1 - setting.backupDB > 1000 * 60 * 60) {
            let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            await global.db.write()
            this.reply(global.owner[0] + '@s.whatsapp.net', `Database: ${date}`, null)
            this.sendFile(global.owner[0] + '@s.whatsapp.net', fs.readFileSync('./database.json'), 'database.json', '', 0, 0, { mimetype: 'application/json' })
            setting.backupDB = new Date() * 1
        }
    }

    // update status
    if (new Date() * 1 - setting.status > 1000) {
        let _uptime = process.uptime() * 1000
        let uptime = clockString(_uptime)
//        await this.setStatus(`Aktif selama ${uptime} | Mode: ${global.opts['self'] ? 'Private' : setting.groupOnly ? 'Hanya Grup' : 'Publik'} | nekobotz by DanishGanz`).catch(_ => _)
        setting.status = new Date() * 1
    }

}

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
