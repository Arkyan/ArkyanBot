const Discord = require('discord.js');

module.exports = {
    name: 'coinflip',
    description: 'Pile ou Face !',
    async run(bot, message) {
        const n = Math.floor(Math.random() * 2);
        let result;
        if (n === 1) {
            result = 'Pile';
        } else {
            result = 'Face';
        }
        var embed = {
            color: 0x9933ff,
            title: 'Pile ou Face !',
            description: `Le résultat du tirage de <@${message.user.id}> est : ${result}`,
            timestamp: new Date(),
        };
        await message.reply({ embeds: [embed] })
    }
}
