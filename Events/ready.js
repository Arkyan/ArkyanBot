const Discord = require('discord.js');
const loadEvents = require('../Loader/loadEvents');
const loadSlashCommands = require('../Loader/loadSlashCommands');
const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const app = express();
const db = new sqlite3.Database(':memory:');

module.exports = async bot  => {

    await loadSlashCommands(bot);
    console.log(`Connecté en tant que ${bot.user.tag} !`);
    db.run(`CREATE TABLE messages (id TEXT PRIMARY KEY, author TEXT, content TEXT, timestamp DATETIME DEFAULT CURRENT_TIMESTAMP)`, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Table de messages créée avec succès.");
    });

    bot.on("messageCreate", message => {
    // Vérifie si le message vient du canal spécifié et ignore les messages du bot
    if (message.channel.id === "871370018040987709" && !message.author.bot) {
        console.log(`Nouveau message de ${message.author.username} dans le canal ${message.channel.name}`);
        // Exemple : réponse automatique
        var channel = bot.channels.cache.get("1280502721958383646");
        channel.send(`Annonce pris en compte dans le salon : ${message.channel.name} avec ID = ${message.channel.id}`);
        db.run(`INSERT INTO messages (id, author, content) VALUES (?, ?, ?)`, [id, authorName, content], (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log(`Message de ${authorName} sauvegardé: ${content}`);
        });
    }
});
    
app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
}
);
}


