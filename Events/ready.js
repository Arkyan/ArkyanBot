const Discord = require('discord.js');
const loadEvents = require('../Loader/loadEvents');
const loadSlashCommands = require('../Loader/loadSlashCommands');

module.exports = async bot  => {

    await loadSlashCommands(bot);
    console.log(`Connecté en tant que ${bot.user.tag} !`);


    //////////////////////////////////////////////////
    bot.on("messageCreate", message => {
    // Vérifie si le message vient du canal spécifié et ignore les messages du bot
    if (message.channel.id === "871370018040987709" && !message.author.bot && message.author.id === "701216778264641546") { 
        console.log(`Nouveau message de ${message.author.username} dans le canal ${message.channel.name}`);
        // Exemple : réponse automatique
        var channel = bot.channels.cache.get("1280502721958383646");
        channel.send(`Annonce pris en compte dans le salon : ${message.channel.name} avec ID = ${message.channel.id}`);
    }
    }
    );
    //////////////////////////////////////////////////



    //////////////////////////////////////////////////
    const TWITCH_CLIENT_ID = 'ID';
    const TWITCH_CLIENT_SECRET = 'CLIENTSECRET';
    const TWITCH_USERNAME = 'Arkyan_';
    const CHANNEL_ID = 'ID'; // ID du canal Discord pour les annonces
    // Fonction pour obtenir un token d'accès à l'API Twitch
    async function getTwitchAccessToken() {
    const response = await fetch('https://id.twitch.tv/oauth2/token', {
        method: 'POST',
        body: new URLSearchParams({
            client_id: TWITCH_CLIENT_ID,
            client_secret: TWITCH_CLIENT_SECRET,
            grant_type: 'client_credentials'
        })
    });
    const data = await response.json();
    return data.access_token;
}

    // Fonction pour vérifier si le streamer est en direct
    async function isStreamerLive() {
    const accessToken = await getTwitchAccessToken();
    const response = await fetch(`https://api.twitch.tv/helix/streams?user_login=${TWITCH_USERNAME}`, {
        headers: {
            'Client-ID': TWITCH_CLIENT_ID,
            'Authorization': `Bearer ${accessToken}`
        }
    });
    const data = await response.json();
    return data.data && data.data.length > 0;
}

    // Vérification périodique du statut de diffusion
    async function checkStream() {
    const isLive = await isStreamerLive();
    if (isLive) {
        const channel = await client.channels.fetch(CHANNEL_ID);
        channel.send(`@everyone ${TWITCH_USERNAME} est en direct sur Twitch ! Regardez-le ici : https://www.twitch.tv/${TWITCH_USERNAME}`);
    }
}
    // Vérification toutes les 5 minutes (300000 ms)
    setInterval(checkStream, 300000);
}
    //////////////////////////////////////////////////

