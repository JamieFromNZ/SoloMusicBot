// import requirements 
const {
    Client,
    Intents,
    MessageEmbed,
} = require('discord.js');

// starting in djs v13, we are required to specify which intents we are using in the client constructor
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

const { createAudioPlayer, createAudioResource, StreamType, demuxProbe, joinVoiceChannel, NoSubscriberBehavior, AudioPlayerStatus, VoiceConnectionStatus, getVoiceConnection } = require('@discordjs/voice')

const play = require('play-dl');

const dotenv = require('dotenv');
// import config IDs
dotenv.config()
const TOKEN = process.env.TOKEN

const startup = require('./src/startup');
// run this script upon starting up the bot and pass in the client
startup(client)

var cache = new Map();

client.on('interactionCreate', async (interaction) => {
    // if the interaction is not a command, eg: it's a button, return
    if(!interaction.isCommand) return;

    const command = client.commands.get(interaction.commandName);

    if(!command) return;

    try {
        return await command.execute(client, interaction, cache);

    } catch(err) {
        if(err) console.log(err);
        await interaction.reply({
            content: 'An error was detected, system has shut down temporarily.',
            ephemeral: true
        });
    }

});

client.login(TOKEN);