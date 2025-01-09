module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
--------------------------------------------
𝐍𝐚𝐦𝐞       : 𝗝𝗜𝗦𝗔𝗡 𝗔𝗛𝗠𝗘𝗗 𝗦𝗔𝗛𝗘𝗟
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : 𝗡𝗦 𝗦𝗔𝗛𝗘𝗟 𝗔𝗛𝗠𝗘𝗗
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : 𝗜𝘀𝗹𝗮𝗺
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝗕𝗼𝗴𝘂𝗿𝗮, 𝗕𝗮𝗻𝗴𝗹𝗮𝗱𝗲𝘀𝗵
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝗠𝗶𝗿𝗽𝘂𝗿, 𝐃𝐡𝐚𝐤𝐚 𝐁𝐲𝐩𝐚𝐬𝐬
𝐆𝐞𝐧𝐝𝐞𝐫.   : 𝗠𝗮𝗹𝗲
𝐀𝐠𝐞           : 19+
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : 𝗦𝗶𝗻𝗴𝗹𝗲
𝐖𝐨𝐫𝐤        : 𝐒𝐭𝐮𝐝𝐞𝐧𝐭
𝐆𝐦𝐚𝐢𝐥       : jihadahmed.mx@gmail.com
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: wa.me/+8801731736377
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦  : t.me/NS.SAHEL
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/Tera.Bap.C4X`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/100000959749712/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
