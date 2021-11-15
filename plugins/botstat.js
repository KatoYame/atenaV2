let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
    let { anon, anticall, antispam, antitroli, backup, jadibot, groupOnly, nsfw } = global.db.data.settings[conn.user.jid]
    const chats = conn.chats.all()
    const groups = chats.filter(v => v.jid.endsWith('g.us'))
    let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]

    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
	let atena = 'https://telegra.ph/file/cf2ddb002f14feee3017d.jpg'
    await conn.send2ButtonLoc(m.chat, await(await fetch(atena)).buffer(), `
┌─〔 Info ${conn.user.name} 〕
│Name: ${conn.user.name}
│Main Owner: Kato&Khael
│Operated Since: 19 September 2021
│Language Used: Nodejs (JS)
│Server: Heroku
│SC: _github.com/FadliDarmawan/haruno.git_
└────

┌─〔 Data ${conn.user.name} 〕
│Runtime: *${uptime}*
│Baterai ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '│ Charging' : ''}` : 'tidak diketahui'}
│Group: *${groups.length}*
│Private Chat: *${chats.length - groups.length}*
│Total Users: *${Object.keys(global.db.data.users).length}*
│Total Users jadibot: *${totaljadibot.length}*
│Total Blocked: *${conn.blocklist.length}*
│Total Chat Banned: *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}*
│Total Users Banned: *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}*
└────

┌─〔 Settings ${conn.user.name} 〕
│ ${anon ? '✅' : '❌'} *Anon Chat*
│ ${anticall ? '✅' : '❌'} *Anti Call*
│ ${antispam ? '✅' : '❌'} *Anti Spam*
│ ${antitroli ? '✅' : '❌'} *Anti Troli*
│ ${backup ? '✅' : '❌'} *Auto Backup DB*
│ ${groupOnly ? '✅' : '❌'} *Mode Grup*
│ ${jadibot ? '✅' : '❌'} *Jadi Bot*
│ ${nsfw ? '✅' : '❌'} *Mode Nsfw*
└────
    `.trim(), watermark, 'Menu', '.?', 'Owner', '.owner')
}
handler.help = ['botstatus']
handler.tags = ['info']
handler.command = /^botstat(us)?$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
