const { Collection } = require('discord.js');
const Discord = require('discord.js');
const intents = new Discord.IntentsBitField(3276799);
const bot = new Discord.Client({intents});
const loadCommands = require('./Loader/loadCommands'); 
const loadEvents = require('./Loader/loadEvents');  
const config = require('./config.js');

bot.commands = new Collection();

bot.commands = new Discord.Collection();
bot.login(config.token);
loadCommands(bot);
loadEvents(bot);

const { Client, GatewayIntentBits, Events } = require('discord.js');
bot.on(Events.MessageCreate, message => {
    // Vérifie si le message vient du canal spécifié et ignore les messages du bot
    if (message.channel.id === 1280502721958383646 && !message.author.bot) {
        console.log(`Nouveau message de ${message.author.username} dans le canal ${message.channel.name}: ${message.content}`);

        // Vous pouvez traiter le message ici ou l'enregistrer, l'analyser, etc.
        // Exemple : réponse automatique
        message.channel.send(`Message reçu : ${message.content}`);
    }
});

