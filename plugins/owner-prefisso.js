let handler = async(m, { conn, text }) => {
  if (!text) throw `𝐬𝐜𝐞𝐠𝐥𝐢 𝐮𝐧 𝐩𝐫𝐞𝐟𝐢𝐬𝐬𝐨`
  global.prefix = new RegExp('^[' + (text || global.opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')
  await m.reply(`𝐏𝐫𝐞𝐟𝐢𝐬𝐬𝐨 𝐜𝐚𝐦𝐛𝐢𝐚𝐭𝐨 𝐢𝐧: *${text}*`)
}
handler.help = ['setprefix'].map(v => v + ' [prefix]')
handler.tags = ['owner']
handler.command = /^(prefisso)$/i
handler.rowner = true

export default handler 