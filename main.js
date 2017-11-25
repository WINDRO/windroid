const Discord = require ('discord.js')
const bot = new Discord.Client();
const prefix = "?";
var guild = bot.guilds.get("371622960362029058")

bot.login(process.env.TOKEN);


bot.on('ready', () => {
    bot.user.setPresence({ game: { name: "?help", type: 0 } });
    console.log("Bot Ready !");
});

bot.on('message', message => {
    if (message.content === 'ping') {
      message.channel.send('pong')
    }
})

bot.on('message', message => {
    if (message.content === 'bvn') {
      message.channel.send('Hey, bienvenue le nouveau ! Pense à lire le <#371626041418186752>')
    }
})

bot.on('message', message => {
    if (message.content === (prefix + 'help')) {
      const embed = new Discord.RichEmbed()
              .setColor('#ff0000')
              .addField("Commande du bot !", "?aide : Affiche les commandes du bot \n?discord : Les informations sur le serveur \n?hypesquad : Informations HypeSquad \n?radio : Informations sur la WINDROID RADIO")
              .addField("Info", "Créateur du bot : WINDROID")
    message.channel.send({embed});
    }
})

bot.on('message', message => {
    if (message.content === (prefix + 'discord')) {
      const embed = new Discord.RichEmbed()
              .setColor('#ff0000')
              .addField("Informations sur le serveur !", "Ce serveur a pour but de créer une communauté autour de l'informatique et la high-tech pour travailler sur des projets, se faire aider, discuter, ou plus généralement passer un bon moment.\nMais pas que vous pouvez aussi vous faire des amis et trouver des compagnons pour vos jeux préférés et bien plus.")
    message.channel.send({embed});
    }
})

bot.on('message', message => {
    if (message.content === (prefix + 'hypesquad')) {
      const embed = new Discord.RichEmbed()
              .setColor('#ff0000')
              .addField("Informations HypeSquad :", "https://discordapp.com/hypesquad?ref=gdTR7OwUYN")
    message.channel.send({embed});
    }
})

bot.on('message', message => {
    if (message.content === (prefix + 'radio')) {
      const embed = new Discord.RichEmbed()
              .setColor('#ff0000')
              .addField("Les horaires :", "Période Scolaire : Samedi de 16h à 19h et de 21h à 00h \nHors Période Scolaire : Tous les jours de 21h à 23h")
              .addField("Le site web :", "https://windroidtv.wixsite.com/windroidradio")
    message.channel.send({embed});
    }
})

bot.on('message', message => {
    if (message.content === (prefix + 'site')) {
      const embed = new Discord.RichEmbed()
              .setColor('#ff0000')
              .addField("Voici les sites web :", "**Site du serveur :** https://windroidtv.wixsite.com/windroid \n**Site de la radio :** https://windroidtv.wixsite.com/windroidradio")
    message.channel.send({embed});
    }
})

bot.on('message', message => {
    if (message.content === (prefix + 'invitation')) {
      const embed = new Discord.RichEmbed()
              .setColor('#ff0000')
              .addField("Invitation :", "https://discord.gg/jkS47tE")
    message.channel.send({embed});
    }
})

bot.on('guildMemberAdd', member => {
    const guild1 = member.guild.id;
    var guild = bot.guilds.get("371622960362029058")
    var add = bot.channels.get("371622960923934733")
    if(guild1 == guild.id) {
      add.send(`Salut ${member}, bienvenue sur le serveur **${guild.name}**! Lis bien les règles !`);
    } else {
      return
    }
    });

bot.on('guildMemberRemove', member => {
    const guild1 = member.guild.id;
    var guild = bot.guilds.get("371622960362029058")
    var add = bot.channels.get("371622960923934733")
    if(guild1 == guild.id) {
      add.send(`${member} a quitté le serveur **${guild.name}**. Bye bye ${member}... !`);
    } else {
      return
    }
    });

bot.on('guildMemberAdd', member => {
    const guild1 = member.guild.id;
    var guild = bot.guilds.get("371622960362029058")
    var add = bot.channels.get("371622960923934733")
    if(guild1 == guild.id) {
      member.sendMessage(`**Salut ${member}, bienvenue sur le serveur ${guild.name} !** \n\nCe serveur a pour but de créer une communauté autour de l'informatique et la high-tech pour travailler sur des projets, se faire aider, discuter, ou plus généralement passer un bon moment.\nMais pas que vous pouvez aussi vous faire des amis et trouver des compagnons pour vos jeux préférés et bien plus.\n\nPense à lire le règlement et les informations. \n\n*Voici le lien du serveur pour inviter tes amis :* https://discord.gg/jkS47tE \n\nProfite bien ! :wink:\n\nA bientôt.`);
    } else {
      return
    }
    });
