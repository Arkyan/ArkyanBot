const Discord = require('discord.js');
const loadEvents = require('../Loader/loadEvents');
const loadSlashCommands = require('../Loader/loadSlashCommands');

module.exports = async bot  => {

    await loadSlashCommands(bot);
    console.log(`Connecté en tant que ${bot.user.tag} !`);

    bot.on("messageCreate", message => {
    // Vérifie si le message vient du canal spécifié et ignore les messages du bot
    if (message.channel.id === "871370018040987709" && !message.author.bot) {
        console.log(`Nouveau message de ${message.author.username} dans le canal ${message.channel.name}`);
        // Exemple : réponse automatique
        var channel = bot.channels.cache.get("1280502721958383646");
        channel.send(`Annonce pris en compte dans le salon : ${message.channel.name} avec ID = ${message.channel.id}`);
    }
});

}

