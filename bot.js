const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "d!";
var sahip = "406832593758322688";

client.on('ready', () => {
  console.log(`BOT: ${client.user.username} adı ile giriş yaptı!`);
});

client.on('message', msg => {
  console.log(`LOG: S: ${msg.guild.name} M: ${msg.content} Y: ${msg.author.tag}`);
  if (msg.author.id === ayarlar.id) return;
  if (msg.author.bot) return;

  if (!msg.content.startsWith(prefix)) {
	  return;
  }
  if (msg.content.toLowerCase() === prefix + 'ping') {
    msg.reply('Pong! **' + client.ping + '** ms');
  }
  if (msg.content.toLowerCase() === prefix + 'sa') {
    msg.reply('Aleyküm selam!');
  }
  if (msg.content.toLowerCase() === prefix + 'yaz') {
    msg.delete();
    msg.channel.sendMessage(msg.content);
  }
  if (msg.content.toLowerCase() === prefix + 'temizle') {
    msg.channel.bulkDelete(100);
    msg.channel.sendMessage("100 adet mesaj silindi!");
  }
  if (msg.content.toLowerCase() === prefix + 'reboot') {
    if (msg.author.id !== "406832593758322688") {
      msg.reply('Benim yapımcım değilsin!');
    } else {
      msg.channel.sendMessage(`Bot yeniden başlatılıyor...`).then(msg => {
      console.log(`BOT: Bot yeniden başlatılıyor...`);
      process.exit(0);
    })
   }
  }
});

client.login("NDQyMDQ2NTIwOTQyOTE5Njgx.DfAv5w.bXRDdgQ2-1llw7JJxduT-6UduKI");
