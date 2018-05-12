const { stripIndents, oneLine } = require('common-tags');
const Discord = require("discord.js");
const bot = new Discord.Client();

let prefix = "t!";
let owner = "427061793123205131"; // Buraya kendi IDnizi yazın.

bot.on("ready", () => {
    bot.user.setGame(prefix + "yardım | ")
    console.log("Bağlandım!")
});

bot.login("NDQ0ODE1MDg5Mjc1NTAyNTky.DdhZ2Q.d9BZWzxW1NAmQmWZoCoqOSP2OBQ")

bot.on("message", message => {

    if (message.content.toLowerCase() === "sa") {
        message.reply("**Aleyküm Selam!**")
    }
    
    if (message.content.toLowerCase() === prefix + "sunucufoto") {
        message.reply(messsage.guild.iconURL)
    }
    
     if (message.content.toLowerCase() === prefix + "büyükmü") {
        message.reply(message.guild.large)
    }
    
    if (message.content === prefix + "sunucubilgi") {
        const embed = new Discord.RichEmbed()

            .addField("Sunucu Adı", message.guild.name, true)

            .addField("Sunucu ID", message.guild.id, true)

            .addField("Sunucu Sahibi", message.guild.owner, true)

            .addField("Toplam Üye Sayısı", message.guild.memberCount, true)

            .addField("AFK Süresi", message.guild.afkTimeout, true)
        
            .addField("AFK Kanalının IDsi", message.guild.afkChannelID, true)

            .setFooter("Oluşturulma Tarihi " + message.guild.createdAt)

            .setColor(0xff0000)

        return message.channel.sendEmbed(embed)
    }

    if (message.content === prefix + "id") {
        const embed = new Discord.RichEmbed()

            .addField("İDin", message.author.id, true)

        return message.channel.sendEmbed(embed)
    }

    if (message.content === prefix + "hesaptarih") {
        const embed = new Discord.RichEmbed()

            .addField("Hesabını oluşturma tarihin", message.author.createdAt, true)

        return message.channel.sendEmbed(embed)
    }

    if (message.content === prefix + "kanalid") {
        const embed = new Discord.RichEmbed()

            .addField("Yazdığın kanalın idsi", message.channel.id, true)

        return message.channel.sendEmbed(embed)
    }

    if (message.content === prefix + "kanaltarih") {
        const embed = new Discord.RichEmbed()

            .addField("Avatarın", message.channel.createdAt, true)

        return message.channel.sendEmbed(embed)
    }
    
    if (message.content === prefix + "nitro") {
        const embed = new Discord.RichEmbed()

            .addField("İşte Discord Nitro Durumun", message.author.premium, true)

        return message.channel.sendEmbed(embed)
    }
    
        if (message.content.toLowerCase() === prefix + "avatarım") {
        message.reply(message.author.avatarURL)
    }

    if (message.content === prefix + "kodlayıcın") {
        const embed = new Discord.RichEmbed()

            .addField("Bot kodlayıcısı", `<@${owner}>`, true)

        return message.channel.sendEmbed(embed)
    }

    if (message.content === prefix + "yardım") {
        const embed = new Discord.RichEmbed()

            .addField("Selam ben Toprak", "BUDA KOMUTLARIM")        
            .addField(prefix + "id", "İDni atar.")
            .addField(prefix + "hesaptarih", "Hesabının oluşturma tarihini atar.")
            .addField(prefix + "kanaltarih", "Yazdığın kanalın oluşturma tarihi.")
            .addField(prefix + "sunucubilgi", "Sunucu hakkında bilgi verir.")
            .addField(prefix + "kanalid", "Yazdığınız kanalın idsini atar.")
            .addField(prefix + "tag", "İsminizi atar.(Username#0000)")
            .addField(prefix + "kodlayıcın", "Botun kodlayıcısını atar.")
            .addField(prefix + "avatarım", "Avatarının fotosunu atar.")
            .addField("Küfürleri engeller", "En çok kullanılan küfürler.(Düzeltilmesi Gerek)")

        return message.channel.sendEmbed(embed)
    }


    if (message.content === prefix + "tag") {
        const embed = new Discord.RichEmbed()

            .addField("Tagın", message.author.tag, true)

        return message.channel.sendEmbed(embed)
    }

    if (message.content === prefix + "bilgi") {
        const embed = new Discord.RichEmbed()

            .addField("Bot Sahibi", `<@${owner}>`, true)

            .addField("Version", "0.0.2", true)

            .addField("Toplam Sunucu Sayısı", bot.guilds.size, true)

            .addField("Toplam Kullanıcı Sayısı", bot.users.size, true)

            .addField("Toplam Kanal Sayısı", bot.channels.size, true)

            .addField("Kitaplık Türü", "discord.js")

            .setColor(0x000001)

        return message.channel.sendEmbed(embed)
    }

 });
