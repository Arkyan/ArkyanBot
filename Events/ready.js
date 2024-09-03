const Discord = require('discord.js');
const loadEvents = require('../Loader/loadEvents');
const loadSlashCommands = require('../Loader/loadSlashCommands');

module.exports = async bot  => {

    await loadSlashCommands(bot);
    console.log(`Connecté en tant que ${bot.user.tag} !`);

}