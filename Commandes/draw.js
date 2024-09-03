const Discord = require('discord.js');

module.exports = {
    
        name: 'draw',       
        description: 'Tire un nombre aléatoire !',
        permission : 'Aucune',
        dm : false,
        options : [
            {
                type: 'number',
                name: 'min',
                description: 'Nombre minimum',
                required: true
            },
            {
                type: 'number',
                name: 'max',
                description: 'Nombre maximum',
                required: true
            }
        ],
    
        async run (bot, message, args) {
            let min = args.getNumber('min')
            let max = args.getNumber('max')
            if (min > max) return message.reply('Le nombre minimum doit être inférieur au nombre maximum !')
            let number = Math.floor(Math.random() * (max - min + 1)) + min
            await message.reply(`Nombre aléatoire entre \`${min}\` et \`${max}\` : La réponse est **\`${number}\`**`)
        }
    
    }