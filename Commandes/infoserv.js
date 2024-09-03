const Discord = require('discord.js');

module.exports = {
    name: 'infoserv',
    description: 'Affiche les informations du serveur !',
    permission: 'Aucune',
    dm: false,
    options: [],
    run: async (bot, message) => {
        var owner = message.guild.ownerId
        var embed = {
            color: 0x0099ff,
            title: 'Informations du serveur',
            description: `**Nom du serveur :** ${message.guild.name}\n**Nombre de membres :** ${message.guild.memberCount}\n**Nombre de salons :** ${message.guild.channels.cache.size} \n**Propriétaire :** <@${owner}>\n**Date de création :** ${message.guild.createdAt}`,
            timestamp: new Date(),
        };
        message.reply({ embeds: [embed] })
    }
}

