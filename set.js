/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK05RU0FiRFZ2S3M0dWs0bUYyUXR3ZUFXSWdTOUx0RmZiL0hnR3RMRWszRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMDZKL0ZKMndJZFZZb3pQZzg3WUpDbDJZNitiRXpKWks3cmtEdGgrWE55MD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3QlIrSXc1UUNFR1Q5dFZoelJSSGdUT0MrWjF0ZzEyZlhqNEE4Y1BqeDNJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5b2cwcnRYK1NPSzJ4M0JuaE9iNEI2SGhjbzVOM2pYc2VOVDVlckFiMkEwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFIZVBGVkR1Y3hqUGI4QmFUNVN3YUtoRzJpRDhMWEhrUlYybENxNGZaV3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InAwdTdWSE4rV1FvZnVCMU5rVXA0L2QrdWF0VFp5NUd6ZC9nb0M3ZHZjbW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUhMbmg4Q0NtV3h0d2xyVnhWRFRGZHhDc3RyMlM5MjNWVG9HbGtFb3owWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWpvTEkxeDVFT3ZHODU5MkRpeENZQW9aRWlWQXNiY1pTM1JwT1JzWVBBaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFvVU9DNXJFOFlKcmFUTVR6Q2RUSS8rNTNvZFFZSW5EcVVjSUJzL2FHYlJDRlNyWDlhL3JHNWpGUVFVcTg3aUJIK3pvMjhuYS9YVjNEMFVIVUhJMkN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDIsImFkdlNlY3JldEtleSI6ImVmNnZkNTJyWDF6Z016aXdKSlFqTW1WYWx1ZDdvMGJDeFNkcmxvajZMQjQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzA0MDI0NTQ5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkIxNTI1RDFDODQxQjA4REI4N0UwODM5OUMyRkFGREZDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDU1NzY0ODd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDcwNDAyNDU0OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBMjJCQTIwNzhBNjc0RDM2RjNENTlENkUwREJDOTY4NiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ1NTc2NDg5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3MDQwMjQ1NDlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTUxRTA5RkZFQThFNEMzQTNGRkQwMTA4MTk2RjMxMDAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NTU3NjQ5OX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiN3E1UFY4bUNUZ2ljZld6N0lEN29LZyIsInBob25lSWQiOiI5ZDIwODMxZC0wMjM4LTRlNTYtOWMyYy02M2JjY2Y4ODE5NGYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVYvbHRKbmRrS0hjNlZuRVJ0dHBYdnlxTkp3PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtLUHc4OWpVMmg2a0xMV2w3Sm52TVp2RExEND0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJSMTZITDhEWCIsIm1lIjp7ImlkIjoiMjU0NzA0MDI0NTQ5OjcyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkNocmlzIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOWEV4cDBHRUpiRXJjQUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJJMUNMVUxsd1AzaFI4THFWWnQrMTNJbi95NDEzVkdTQVhaVndKbmV5WHkwPSIsImFjY291bnRTaWduYXR1cmUiOiJSbG0zei9rM1hEN2FlY2tleEFwb293WFNRQkVvQ3FiOVVTVHV0N0YwZHJqRENSQVVSVnM0dnVDa05sRDhJTGhtK2NDdFdSUE9ydDNIN3MvVkZacGFBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiL09ibktIYmFheVo1WHFzWk5PVmpmQm01NUg0amJnMmFqWTYyb2JLcnJEclN6MkhDOWFnTDFwSVluSHpIcnQyaTFFMnI2ZGhzVGdHZ3I1UmxpTkkzQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3MDQwMjQ1NDk6NzJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU05RaTFDNWNEOTRVZkM2bFdiZnRkeUovOHVOZDFSa2dGMlZjQ1ozc2w4dCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0NTU3NjQ4NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOclkifQ==';
const autobio = process.env.AUTOBIO || 'FALSE';
const autolike = process.env.AUTOLIKE_STATUS || 'TRUE';
const autoviewstatus = process.env.AUTOVIEW_STATUS || 'TRUE';
const welcomegoodbye = process.env.WELCOMEGOODBYE || 'FALSE';
const prefix = process.env.PREFIX || '.';
const appname = process.env.APP_NAME || 'raven';
const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'FALSE';
const mode = process.env.MODE || 'PUBLIC';
const anticall = process.env.AUTOREJECT_CALL || 'TRUE';
const botname = process.env.BOTNAME || '𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧';
const antibot = process.env.ANTIBOT || 'FALSE';
const author = process.env.STICKER_AUTHOR ||'𝗕𝗢𝗧';
const packname = process.env.STICKER_PACKNAME || '𝗥𝗔𝗩𝗘𝗡';
const antitag = process.env.ANTITAG || 'FALSE';
const dev = process.env.DEV || '254114660061';
const menulink = process.env.MENU_LINK || 'https://files.catbox.moe/duv8ac.jpg';
const menu = process.env.MENU_TYPE || 'VIDEO';
const DevRaven = dev.split(",");
const badwordkick = process.env.BAD_WORD_KICK || 'FALSE';
const bad = process.env.BAD_WORD || 'fuck';
const autoread = process.env.AUTOREAD || 'FALSE';
const antidel = process.env.ANTIDELETE || 'TRUE';
const admin = process.env.ADMIN_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗿𝗲𝘀𝗲𝗿𝘃𝗲𝗱 𝗳𝗼𝗿 𝗔𝗱𝗺𝗶𝗻𝘀!';
const group = process.env.GROUP_ONLY_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝗚𝗿𝗼𝘂𝗽𝘀!';
const botAdmin = process.env.BOT_ADMIN_MSG || '𝗜 𝗻𝗲𝗲𝗱 𝗔𝗱𝗺𝗶𝗻 𝗽𝗿𝗲𝘃𝗶𝗹𝗲𝗱𝗴𝗲𝘀!';
const NotOwner = process.env.NOT_OWNER_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗼𝘄𝗻𝗲𝗿!';
const wapresence = process.env.WA_PRESENCE || 'recording';
const antilink = process.env.ANTILINK || 'FALSE';
const mycode = process.env.CODE || '254';
const antiforeign = process.env.ANTIFOREIGN || 'FALSE';
const port = process.env.PORT || 10000;
const antilinkall = process.env.ANTILINK_ALL || 'FALSE';

module.exports = { session, sessionName, autobio, author, packname, dev, DevRaven, badwordkick, bad, mode, group, NotOwner, botname, botAdmin, antiforeign, menu, menulink, autoread, antilink, admin, mycode, antilinkall, anticall, antitag, antidel, wapresence, welcomegoodbye, antibot, herokuapi, prefix, port, gptdm, appname, autolike, autoviewstatus };  
