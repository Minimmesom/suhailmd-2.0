const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347013326114";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_31_11_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA4MixcbiAgICAgICAgMTI5LFxuICAgICAgICA0NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1LFxuICAgICAgICA1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDk4LFxuICAgICAgICA4NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQwLFxuICAgICAgICAxODYsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNixcbiAgICAgICAgMjM1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDM0LFxuICAgICAgICA4NixcbiAgICAgICAgMyxcbiAgICAgICAgMTcyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzksXG4gICAgICAgIDEwNixcbiAgICAgICAgNjgsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMixcbiAgICAgICAgMTgsXG4gICAgICAgIDIyLFxuICAgICAgICA4NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDY4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMixcbiAgICAgICAgMjUyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDc2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIyLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxODEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTEzLFxuICAgICAgICA0NCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjUxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMCxcbiAgICAgICAgNTksXG4gICAgICAgIDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgODEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjYsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDksXG4gICAgICAgIDEwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTksXG4gICAgICAgIDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE1LFxuICAgICAgICA5NCxcbiAgICAgICAgODEsXG4gICAgICAgIDY2LFxuICAgICAgICAxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDUyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiamVXYStWMlFqMHRjSjYyWXBiMHVGSEIvUjd2dkcyampONWh3d0dtNHVVZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiR2tiMklPWnFSWkNCdlhXUXZhWE1fZ1wiLFxuICBcInBob25lSWRcIjogXCJiOGRkMTkyOS0yZWI4LTQ5NTMtOGY4Mi03MTYyOTM5MTNiYzRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjEsXG4gICAgICAyMzYsXG4gICAgICAxNzksXG4gICAgICAyNDUsXG4gICAgICAyNyxcbiAgICAgIDk2LFxuICAgICAgNjksXG4gICAgICAyMDMsXG4gICAgICAxNzUsXG4gICAgICA2OCxcbiAgICAgIDE2OSxcbiAgICAgIDI0OCxcbiAgICAgIDEyOCxcbiAgICAgIDkxLFxuICAgICAgMTM3LFxuICAgICAgMjUzLFxuICAgICAgNzIsXG4gICAgICAyMTksXG4gICAgICAxODcsXG4gICAgICAxMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDcsXG4gICAgICAxNzgsXG4gICAgICA0OCxcbiAgICAgIDE0MSxcbiAgICAgIDE2MCxcbiAgICAgIDM5LFxuICAgICAgMTIzLFxuICAgICAgMTM3LFxuICAgICAgMjI3LFxuICAgICAgNjMsXG4gICAgICA0NCxcbiAgICAgIDE4NSxcbiAgICAgIDE1MSxcbiAgICAgIDkyLFxuICAgICAgMTM1LFxuICAgICAgMTA2LFxuICAgICAgMTc2LFxuICAgICAgMTQxLFxuICAgICAgMjQsXG4gICAgICA1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2TTRIMzlXRVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAxMzMyNjExNDozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDI5MjgzNzQ3MTQ0NzU6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMYSt6YXNCRUpMcjg3a0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkxyRXRCLzBVNytDdXZ4TzRoY2VCVHN5Uy9QY0xveVpVTHpKQ0FhaVB2eG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWmdkWEdqblh0dmZDaE9rMU9JNEtzL1NRdEhqS1IrZURwNERqcTR6K2FZQ0Fzd2VkUy9McnhlbFlMOCttZ01CNm8ybXdnYVhEUXZwQm1KYjJjeTlyQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicFRrR1BIMFdmQThkYWtBMW43UTFrQSs1WlJCcVlQZXhlT3RYL1d5Zkx0NC9Wc3RwVzdESTNkRGZGVThneGxva3RsSnB0dEwzYVdpV25qaWdFWEVPZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAxMzMyNjExNDozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIwNDgyNzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDWW9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNZby5qc29uIjogIntcImtleURhdGFcIjpcImg4UUpWY0VTOXBJUmE4UHA3U1hYOU92SWtvUWxnMXp0MTFuRU5icmh0T1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzU5ODgyNTQ4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMyMDQ0MzEzNTAxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
