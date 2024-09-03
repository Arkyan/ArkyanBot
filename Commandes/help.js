const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Affiche la liste des commandes !',
    permission: 'Aucune',
    dm: false,
    options: [],
    run: async (bot, message) => {
        var embed = {
            color: 0x0099ff,
            title: 'Liste des commandes',
            description: `**Voici la liste des commandes disponibles :**`,
            timestamp: new Date(),
        };
        bot.commands.forEach(command => {
            var name = command.name;
            var description = command.description;
            embed.description += "\n**/" + name + "** : ``" + description + "``";
        })
        message.reply({ embeds: [embed] })
    }
}