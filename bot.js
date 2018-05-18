const { stripIndents, oneLine } = require('common-tags');
const Discord = require("discord.js");
const bot = new Discord.Client();

let prefix = "d!";
let owner = "427061793123205131"; // Buraya kendi IDnizi yazın.

bot.on("ready", () => {
    bot.user.setGame(prefix + "yardım | ") 
    console.log("Bağlandı")   
});

bot.login("NDQ2OTY1MTAwNDk1MjQxMjM2.DeAsVg.__NgPxxV1gwYVvM0ASWFeE_jkhg")

bot.on("message", message => {

    if (message.content.toLowerCase() === "sa") {
        message.channel.sendMessage("**Aleyküm Selam!**")
    }

    if (message.content.toLowerCase() === "dragon") {
      message.reply("**Bana seslendiysen ve bir sorun varsa d!yardım yaz.**")
    }

    if (message.content.toLowerCase() === prefix + "ortakol") {
      message.channel.sendMessage("Botu sende Toprak T ile kodlamak istiyorsan toprakcakar5555@gmail.com dan bize ulaş.\n Gerekli şartları söylüyeceyiz.")
    }

    if (message.content === prefix + "sunucubilgi") {
        const embed = new Discord.RichEmbed()

            .addField("Sunucu Adı", message.guild.name, true)

            .addField("Sunucu ID", message.guild.id, true)

            .addField("Sunucu Sahibi", message.guild.owner, true)

            .addField("Toplam Üye Sayısı", message.guild.memberCount, true)

            .addField("AFK Süresi", message.guild.afkTimeout, true)

            .setFooter("Oluşturulma Tarihi " + message.guild.createdAt)

            .setColor(0xff0000)

        return message.channel.sendEmbed(embed)
    }

    if (message.content === prefix + "yardım") {
      const embed = new Discord.RichEmbed()

          .addField(prefix + "sunucubilgi", "Sunucu hakkında bilgi verir.")

          .addField(prefix + "yapımcın", "Bot yapımcısını atar.")

          .addField(prefix + "ortakol", "Botu Toprak Toprak T ile kodlarsınız.")
          
          .addField("Küfür Engelleyici", "Şimdilik sadece bilindik küfürler")
      return message.channel.sendEmbed(embed)
  }

  if (message.content === prefix + "yapımcın") {
    const embed = new Discord.RichEmbed()

        .addField("Yapımcım", `<@${owner}>`, true)

    return message.channel.sendEmbed(embed)
}
  
    if (message.content === prefix + "kurabiye") {
        message.channel.sendMessage(`Canım gel buraya sana kurabiye vereceğim! <@${message.author.id}>`)
        message.react("🍪")
    }
});

bot.on("message", message => {

    const kufur = ["amk", "aq", "sik", "oç", "orospu", "göt"];
    if (kufur.some(word => message.content.includes(word)) ) {
        message.reply("**Küfür Etme!** :rage:")
        message.delete()
    }

});
