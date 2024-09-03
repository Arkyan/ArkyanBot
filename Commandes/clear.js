const Discord = require('discord.js');

module.exports = {

    name: 'clear',
    description: 'Supprime un nombre de messages !',
    permission: Discord.PermissionFlagsBits.ManageMessages,
    dm: false,
    options: [
        {
            type: 'number',
            name: 'nombre',
            description: 'Nombre de messages à supprimer',
            required: true
        },
        {
            type: 'channel',
            name: 'salon',
            description: 'Salon dans lequel supprimer les messages',
            required: false
        },


    ],

    async run(bot, message, args) {
        let channel = args.getChannel('salon')
        if (!channel) channel = message.channel;
        if (channel.id !== message.channel.id && !message.guild.channels.cache.get(channel.id)) return message.reply('Ce salon n\'existe pas !')

        let number = args.getNumber('nombre')
        if (parseInt(number) < 1 || parseInt(number) > 100) return message.reply('Le nombre doit être compris entre 1 et 100 !')

        await channel.bulkDelete(number, true).then(async messages => {
            let embed = {
                color: 0x9933ff,
                title: 'Suppression de messages',
                description: `**${messages.size}** messages ont été supprimés avec succès !`
            }
            await message.reply({ embeds: [embed] })
        }).catch(async error => {
            let embed = {
                color: 0x9933ff,
                title: 'Suppression de messages',
                description: `Une erreur est survenue lors de la suppression des messages : ${error}`
            }
            await message.reply({ embeds: [embed] })
        })

    }
}