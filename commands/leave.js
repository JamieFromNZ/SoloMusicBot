const {
    SlashCommandBuilder
} = require('@discordjs/builders');

const {
    MessageEmbed,
} = require('discord.js');

const vars = require('../variables.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('leave')
        .setDescription('🎵 Make me leave my current VC'),

    async execute(client, interaction, cache) {
        console.log("Ran " + interaction.commandName + " command");
        var serverQueue = cache.get(interaction.guild.id);

        const connection = serverQueue.connection;
        connection.destroy();

        serverQueue = {
            vc: undefined,
            connection: undefined,
            songs: [],
            loop: false,
        }

        cache.set(interaction.guild.id, serverQueue);


        const emb = new MessageEmbed()
            .setAuthor({ name: "Left the voice channel and cleared the queue, run the /join command to rejoin", iconURL: interaction.member.user.avatarURL(), url: 'https://discord.gg/GyGCYu5ukJ' })
            .setColor(vars.successColour)
        await interaction.reply({ embeds: [emb] })
    }

}