const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "tt!";
var owner = "427061793123205131";

client.on('ready', () => {
  client.user.setGame(`|ABONE OL`);
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('guildMemberAdd', member => {
  let guild = member.guild;
  let joinRole = guild.roles.find('name', 'TT Ailesi'); // Burada girişte verilcek rolu seçelim.
  member.addRole(joinRole); // seçtiğimiz rolu verelim.

  const channel = member.guild.channels.find('name', 'gelen-giden'); // burda ise kanalı belirleyelim hangi kanala atsın ben mod-log dedim.
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('Sunucuya HOŞGELDİN Güzel Kardeşim')
  .setTimestamp()
  channel.sendEmbed(embed); // belirlediğimiz kanala mesaj gönderelim.
});

client.on('message', msg => {
  if (msg.content.toLocaleLowerCase() === "sa") {
    msg.reply(`**Aleyküm Selam**`)
  }
  
  if (msg.content.toLocaleLowerCase() === prefix + "platdesteaç") {
    msg.reply(`Platin deste açmak isteğinize emin misiniz?**r!evet/r!hayır**`)
  }
  if (msg.content.toLocaleLowerCase() === prefix + "hayır") {
    msg.reply(`**Komutu kullandığınız için teşekkürler**.`)
  }
  if (msg.content.toLocaleLowerCase() === prefix + "sonyayın") {
      msg.channel.sendMessage('https://www.youtube.com/watch?v=u18G-rl7EWM')
  }
  if (msg.content.toLocaleLowerCase() === prefix + "aboneol") {
    msg.channel.sendMessage('https://www.youtube.com/channel/UC9THRA9843yaiQygMU4mw3g')
  }
  if (msg.content === prefix + "rastgeleyayın") {
    function get_random(list) {
        return list[Math.floor((Math.random() * list.length))];
    }

    var mesaj1 = "https://www.youtube.com/watch?v=T89YKWtCwGI"
    var mesaj2 = "https://www.youtube.com/watch?v=N0q7D7npGCI"
    var mesaj3 = "https://www.youtube.com/watch?v=N0q7D7npGCI"
    var mesaj4 = "https://www.youtube.com/watch?v=OO1iVQNB5-s"
    var mesaj5 = "https://www.youtube.com/watch?v=He6UcgHvh7Y"
    var mesaj6 = "https://www.youtube.com/watch?v=6Gb56FsqL18"
    var mesaj7 = "https://www.youtube.com/watch?v=xsveRxM4BO8"

    let mesaj = [mesaj1, mesaj2, mesaj3, mesaj4, mesaj5, mesaj6, mesaj7]
    let sonuc = get_random(mesaj)

   let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Rastgele yayın")
        .setDescription(sonuc)
    return msg.channel.send(embed) 
}
if (msg.content === prefix + "davulcusözü") {
  function get_random(list) {
      return list[Math.floor((Math.random() * list.length))];
  }

  var mani1 = "Sofrada fakir olsun,Tabağı çukur olsun,Karnı doyduktan sonra,Duayı okur olsun"
  var mani2 = "Karşıma fener geldi,Aklıma neler geldi,Börek bekledim ama,Sofraya döner geldi"
  var mani3 = "Bu aya hürmet gerek,Nimete şükür gerek,Mübarek Ramazan'da,Hakka ibadet gerek"
  var mani4 = "Ahmet ağa uyursun,Uykularda ne bulursun,Kalk al abdest,kıl namaz,Mutluluğu bulursun"
  var mani5 = "Hakk'ın bize ihsanısın,Hem ayların sultanısın,Sen bir saadet kanısın,Ey mahı sultan merhaba"
  var mani6 = "Akşamdan pilavı pişirdim,Gene karnımı şişirdim,Çok mani diyecektim ama,Defteri yolda düşürdüm"

  let mani = [mani1, mani2, mani3, mani4, mani5, mani6]
  let sonuc = get_random(mani)

  let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Davulcu Sözü")
      .setDescription(sonuc)
  return msg.channel.send(embed)
}
if (msg.content === prefix + "manisöyle") {
  function get_random(list) {
      return list[Math.floor((Math.random() * list.length))];
  }

  var mani1 = "Ayakkabı giyerim üstü güzel olursa,Kaynana severim oğlu güzel olursa"
  var mani2 = "Trenin penceresi,Evin çerçevesi,Ebru hocayı sevmeyen,Olsun bulaşık tenceresi"
  var mani3 = "Ciğer verdim kediye,Aldım sana hediye,Herkes beni kıskanır,Sen severim diye"
  var mani4 = "Amasya'nın elması,Hoştur yari sarılması,Kadehle olmaz bu iş,Doldur bakır tası."
  var mani5 = "Dolu vurdu bağıma,Yel attı yaptağını,Korkarım garip ölem,El atar yaprağımı"
  var mani6 = "Irmaktan geçemiyom,Az doldur içemiyom,Üç beş dostu görünce,Yazmadan edemiyom"
  var mani7 = "Bir dalda iki elma,Birini al birini alma,Alnına yazılmışım,İster al ister alma"
  var mani8 = "Denizde alabalık,Yüreğim sana yanık,İsterim konuşayım,Mahalle kalabalık"
  var mani9 = "Kınalı parmak ucu,Benim yarim koruyucu,Namaz kılmazsa,Kabul olmaz orucu"
  var mani10 = "Gökte yıldız bi sıra,Yarim gitti Mısır'a,Yarim keklik ben şahin,Giderim ardı sıra"
  var mani11 = "Maydanoz demet demet,Yarimin adı Mehmet,Mehmet benim olursa,Cehennem olur cennet"
  var mani12 = "Bayram abi gibi evde misin,Tilki gibi inde misin,Sana mani söylersem bana,Bahşiş verir misin"

  let mani = [mani1, mani2, mani3, mani4, mani5, mani6, mani7, mani8, mani9, mani10, mani11, mani12]
  let sonuc = get_random(mani)

  let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Mani")
      .setDescription(sonuc)
  return msg.channel.send(embed)
}
if (msg.content.toLocaleLowerCase() === prefix + "evet") {
  function get_random(list) {
      return list[Math.floor((Math.random() * list.length))];
  }

  var mani1 = "https://i.imgyukle.com/2018/06/02/n0HDG.md.png"
  var mani2 = "https://i.imgyukle.com/2018/06/02/n0OQb.md.png"
  var mani3 = "https://i.imgyukle.com/2018/06/02/n0jgs.md.png"
  var mani4 = "https://i.imgyukle.com/2018/06/02/n0X8Q.md.png"
  var mani5 = "https://i.imgyukle.com/2018/06/02/n0got.md.png"
  var mani6 = "https://i.imgyukle.com/2018/06/02/n0hLc.md.png"
  var mani7 = "https://i.imgyukle.com/2018/06/04/JkYMh.md.png"
  var mani8 = "https://i.imgyukle.com/2018/06/04/JkHJn.md.png"
  var mani9 = "https://i.imgyukle.com/2018/06/04/JkLX8.md.png"
  var mani10 = "https://i.imgyukle.com/2018/06/04/JkNej.md.png"
  var mani11 = "https://i.imgyukle.com/2018/06/04/Jkjko.md.png"
  var mani12 = "https://i.imgyukle.com/2018/06/04/JkXaU.md.png"
  var mani13 = "https://i.imgyukle.com/2018/06/04/Jkc1H.md.png"
  var mani14 = "https://i.imgyukle.com/2018/06/04/JkgfA.md.png"
  var mani15 = "https://i.imgyukle.com/2018/06/04/Jkiu1.md.png"
  var mani16 = "https://i.imgyukle.com/2018/06/04/JkspI.md.png"
  var mani17 = "https://i.imgyukle.com/2018/06/04/JkBMf.md.png"
  var mani18 = "https://i.imgyukle.com/2018/06/04/JkDJG.md.png"
  var mani19 = "https://i.imgyukle.com/2018/06/04/Jkmeb.md.png"
  
  let mani = [mani1, mani2, mani3, mani4, mani5, mani6, mani7, mani8, mani9, mani10, mani11, mani12, mani13, mani14, mani15, mani16, mani17, mani18, mani19]
  let sonuc = get_random(mani)

  let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Hadi gene iyisin")
      .setImage(sonuc)
  return msg.channel.send(embed)
}
 if (msg.content.toLowerCase() === prefix + "yayın") {
   msg.reply('https://youtu.be/S2ZHH7qPQkw')
 }
});

client.on('guildMemberAdd', member => {
  let guild = member.guild;
  let joinRole = guild.roles.find('name', 'Üye'); // Burada girişte verilcek rolu seçelim.
  member.addRole(joinRole); // seçtiğimiz rolu verelim.

  const channel = member.guild.channels.find('name', 'gelen-kisiler'); // burda ise kanalı belirleyelim hangi kanala atsın ben mod-log dedim.
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('Kardeşim sunucumuza hoşgeldin.GÜZEL VAKİT GEÇİRMEN DİLEKLERİYLE')
  .setTimestamp()
  channel.sendEmbed(embed); // belirlediğimiz kanala mesaj gönderelim.
});

client.on('guildMemberAdd', member => {
  let guild = member.guild;
  let joinRole = guild.roles.find('name', 'Muted'); // Burada girişte verilcek rolu seçelim.
  member.addRole(joinRole); // seçtiğimiz rolu verelim.

  const channel = member.guild.channels.find('name', 'gelen-'); // burda ise kanalı belirleyelim hangi kanala atsın ben mod-log dedim.
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('Kardeşim sunucumuza hoşgeldin.GÜZEL VAKİT GEÇİRMEN DİLEKLERİYLE')
  .setTimestamp()
  channel.sendEmbed(embed); // belirlediğimiz kanala mesaj gönderelim.
});

client.login('NDY1ODI5MzAzODY3OTMyNjgy.DiTM4w.IzpJZLitaRdephG0RfvIb8J032w');
