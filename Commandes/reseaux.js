const Discord = require('discord.js');

module.exports = {
    
        name: 'reseaux',       
        description: 'Affiche les réseaux sociaux !',
        permission : 'Aucune',
        dm : false,
        options : [],
    
        async run (bot, message) {

            const embed = {
                color: 0x9933ff, // Couleur violette
                title: 'Réseaux sociaux',
                description: 'Retrouvez nous sur les réseaux sociaux !',
                fields: [
                    {
                        name: 'Twitch <:twitch:1184799813108240464>',
                        value: 'https://twitch.tv/Arkyan_TGS',
                        inline: true
                    },
                    {
                        name: 'Youtube <:youtube:1184798833692123156>',
                        value: 'https://www.youtube.com/channel/UC91MMel7XyWd6Egy4P1XkSA',
                        inline: true
                    },
                    {
                        name: 'Github <:github:1280509800022544384>',
                        value: 'https://github.com/Arkyan',
                        inline: true
                    },
                    {
                        name: 'Instagram <:instagram:1280511089918087280>',
                        value: 'https://instagram.com/arkyan25',
                        inline: true
                    }]
            }

            await message.reply({embeds: [embed]})
        }
}

