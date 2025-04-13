/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUF3OE1kaUFKMENaVUZ5alorNVVkS3BWRElWaUpyTVozeUFtRE1BSkwzTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWlNwL0U3Z0RlejY0VHFqNENmaXV2c1hkbGNGVm11eW1ISnI0S1BoZ2VUQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjR0xKaENnQ3BzdS9RL0FXc3Zsak0xOFBNazFOUFlNL1ZPclo2SGpVMTAwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJadURWdDU5dlRPSi9waG5iT29tLy9rZHFTakUxUDZpRU5IYUxwZHVKY1ZVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVDZzhMSUtQb1hWdUg2MHNvRTJGL21YNFBUd1h2eE14Q0d5cVNmbkJOV289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5TTW5UdGRLdzVCbDVMY0pRUlB3T25iWTI0UmpSZ2FJTUZuWjZrV3RUMU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEcyaFYxS1BhOVhIYk9odGJreFAzWFZ3eDhSbUdCZDhBeGFaRGhOcmFFST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV3Vma3ZVSWx5Zzl5K2psaEhXWCsvUGl0K2JQQTlFbk1MZnFsVEZLcTJsUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpNNXNSQXFLVWFWYWo3ek9RN01IeTdQR1ptMHdOYTk5N2E3a2hia2xiNjNtSUJUOFYxRllxMVplazBlc2NScmh1bFliZkxTV3V3MGIzNEU0ZjZoWEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI1LCJhZHZTZWNyZXRLZXkiOiIxN3ZidktMVTkycGQxcTA2WjMyUFhWYW1ldzltdkFUeS9UT0hlRmQ2YURVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDcwNDAyNDU0OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJEQkYyM0Y2QUVBRDkxRUQ1RUE1RjJENkQwMjcxMkQ0OSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ0NTE1NzE2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3MDQwMjQ1NDlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDYyMDJCNjY2OEJFQkNGNUVBNUEzQzJFM0RBMTlGQTUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NDUxNTcxN30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzA0MDI0NTQ5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjM3RjUyOEQ1MTZGODM3RDVENzQzRkY4MjBGM0Q5NzhDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDQ1MTU3Mjd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IndpMmZ6dHF5Um8tbWVSMkNDa3gtYnciLCJwaG9uZUlkIjoiYzRhNmJmM2ItYWU3NS00NzU5LTkzNzQtZjVjOTA3ZDVlYTA4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZkcHU4M2liNHdOVzM3N25JbDNLZUhOcllGWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHaTdPcUVCcVJaam9pNDU3R3BhRzZOQmYrc2s9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUjc1TTZaMTQiLCJtZSI6eyJpZCI6IjI1NDcwNDAyNDU0OTo2OEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJDaHJpcyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTlRFeHAwR0VQTGs3TDhHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSTFDTFVMbHdQM2hSOExxVlp0KzEzSW4veTQxM1ZHU0FYWlZ3Sm5leVh5MD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVXpRdUo5L1JTdDcvNnBQSlllS0Iwb1dIZnVVdzlxMzJxOEprV3RDN3dEZzQ2YlVDWEd0UEtwVXI5WlFtZkxRREpwWjhZTDFYNjBZWHBWWGE3T05BQWc9PSIsImRldmljZVNpZ25hdHVyZSI6Ijl1ZmhxdE0rOUxhWGlRMDZISVRoUTFSYXVCQ1dDbm9yeHNCeFcrNVdMaDA2bjI2UVkzRGNYd3dmaHF2bDN4UGZiTXA4eERidVFiYnR4dSs0clVlY0RBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzA0MDI0NTQ5OjY4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNOUWkxQzVjRDk0VWZDNmxXYmZ0ZHlKLzh1TmQxUmtnRjJWY0NaM3NsOHQifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDQ1MTU3MTMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTnJUIn0=';
const autobio = process.env.AUTOBIO || 'FALSE';
const autolike = process.env.AUTOLIKE_STATUS || 'FALSE';
const autoviewstatus = process.env.AUTOVIEW_STATUS || 'TRUE';
const welcomegoodbye = process.env.WELCOMEGOODBYE || 'FALSE';
const prefix = process.env.PREFIX || '.';
const appname = process.env.APP_NAME || 'BOT CHRIS';
const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'FALSE';
const mode = process.env.MODE || 'PUBLIC';
const anticall = process.env.AUTOREJECT_CALL || 'FALSE';
const botname = process.env.BOTNAME || '𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧';
const antibot = process.env.ANTIBOT || 'FALSE';
const author = process.env.STICKER_AUTHOR ||'𝗕𝗢𝗧';
const packname = process.env.STICKER_PACKNAME || '𝗥𝗔𝗩𝗘𝗡';
const antitag = process.env.ANTITAG || 'FALSE';
const dev = process.env.DEV || '254114660061';
const menu = process.env.MENU_TYPE || 'PHOTO';
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
const antiforeign = process.env.ANTIFOREIGN || 'TRUE';
const port = process.env.PORT || 10000;
const antilinkall = process.env.ANTILINK_ALL || 'FALSE';

module.exports = { session, sessionName, autobio, author, packname, dev, DevRaven, badwordkick, bad, mode, group, NotOwner, botname, botAdmin, antiforeign, menu, autoread, antilink, admin, mycode, antilinkall, anticall, antitag, antidel, wapresence, welcomegoodbye, antibot, herokuapi, prefix, port, gptdm, appname, autolike, autoviewstatus };  
