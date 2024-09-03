const Discord = require('discord.js');

module.exports = {
    name: 'survey',
    description: 'Crée un sondage',
    dm: false,
    options: [
        {
            name: "question",
            description: "La question à poser",
            type: 'string',
            required: true
        },
        {
            name: "reponse1",
            description: "Réponse 1",
            type: 'string',
            required: true

        },
        {
            name: "reponse2",
            description: "Réponse 2",
            type: 'string',
            required: true
        },
    ],
    async run(bot, message) {
        const question = message.options.getString('question');
        const reponse1 = message.options.getString('reponse1');
        const reponse2 = message.options.getString('reponse2');

        var embed = {
            color: 0x9933ff,
            title: 'Sondage',
            description: "# " + question,
            fields: [
                {
                    name: '1️⃣ : ' + reponse1,
                    value : ''
                },
                {
                    name: '2️⃣ : ' + reponse2,    
                    value : ''

                }
            ]
        };
        await message.reply({ embeds: [embed], fetchReply: true }).then(async (msg) => {
            await msg.react('1️⃣');
            await msg.react('2️⃣');
        });
    }
}
