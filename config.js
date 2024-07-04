const { Sequelize } = require('sequelize');
const fs = require('fs');

if (fs.existsSync('config.env')) {
  require('dotenv').config({
      path: './config.env'
  });
}

const toBool = (x) => x === 'true';

const DATABASE_URL = process.env.DATABASE_URL === undefined ? "./database.db" : process.env.DATABASE_URL

module.exports = {
  AUDIO_DATA: process.env.AUDIO_DATA || '⺀𑁍 𝚾͢ᴏ᪳ᴜ᪳ʟ᷏᪳ 𝐒͢ᴇ᪳ʀ᷏᪳ ▸ᝃ〔🍉🐼〕;🍃ഇ͎ꫧ᪳͢გവ᪳გ͎◕ കട᪳൬͎გ ලപꪆവ᪳გ◕🕊️;https://i.imgur.com/CoAcgTb.jpeg',
  WARN_COUNT: process.env.WARN_COUNT || '3',
  LOGS: toBool(process.env.LOGS) || true,
  KOYEB_API: process.env.KOYEB_API || '',
  SERVERURL: process.env.SERVERURL || '',
  SERVER: process.env.SERVER || 'defeat',
  ALIVE_DATA : process.env.ALIVE_DATA || "*✰ 𝐇͢ᴇ⃗ʏʏ᷏ &sender*
 
*✰ 𝐘͢ᴇ⃗ʜʜ᷏ 𝐈͢ᴍ ᷏𝐇͢ᴇ⃗ʀᴇ᷏*

*✰ 𝐘͢ᴇ⃗ʜʜ᷏ 𝐈͢ᴛ⃗s᷏ 𝐌͢ᴇ 𝐗͢ᴏ⃗ᴜʟ᷏ 𝐒͢ᴇ⃗ʀ᷏*

*✰ 𝐄͢ᴅ⃗ᴀ᷏ 𝐌͢ᴡ⃗ᴏɴᴇ᷏ 𝐇͢ᴀ⃗ᴘᴘʏ᷏ 𝐀͢ʟ⃗ʟᴇ᷏*",
  IMGBB_KEY: ["76a050f031972d9f27e329d767dd988f", "deb80cd12ababea1c9b9a8ad6ce3fab2", "78c84c62b32a88e86daf87dd509a657a"],
  SESSION_ID: process.env.SESSION_ID || 'Jarvis_6b30_40c0_ed5e_71b5_3c02_efda_c186_40d7=',
  LANG: process.env.LANG || 'EN',
  AUTO_REACTION: process.env.AUTO_REACTION || 'true',
  HANDLERS: process.env.HANDLER  || 'null',
  RMBG_KEY: process.env.RMBG_KEY || false,
  BRANCH: 'main',
  PORT: toBool(process.env.PORT) || 8000,
  STICKER_PACKNAME: process.env.STICKER_PACKNAME || 'ᴊᴀʀᴠɪꜱ;ᴡᴀʙᴏᴛ',
  AUTO_STATUS_VIEWS: toBool(process.env.AUTO_STATUS_VIEWS || 'false'),
  WELCOME_MSG: process.env.WELCOME_MSG || 'Hi @user Welcome to @gname',
  GOODBYE_MSG: process.env.GOODBYE_MSG || 'Hi @user It was Nice Seeing you',
  AUTHOR: process.env.AUTHOR || 'xᴏʜʟ ꜱᴇʀ',
  MEDIA_DATA: process.env.MEDIA_DATA|| 'ʟɪꜱᴛ ᴍᴇɴᴜ;xᴏᴜʟ ꜱᴇʀ;https://i.imgur.com/CoAcgTb.jpeg',
  SUDO: process.env.SUDO || '919633605648,',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || '',
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || '',
  BOT_INFO: process.env.BOT_INFO || 'xᴏᴜʟ ᴍᴅ;xᴏᴜʟ ꜱᴇʀ;https://i.imgur.com/CoAcgTb.jpeg',
  WORK_TYPE: process.env.WORK_TYPE || 'private',
  DATABASE: DATABASE_URL === "./database.db" ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: false }) : new Sequelize(DATABASE_URL, {dialect: "postgres", ssl: true, protocol: "postgres", dialectOptions: { native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false }),
};
