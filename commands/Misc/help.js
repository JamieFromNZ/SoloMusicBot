const {
    SlashCommandBuilder
} = require('@discordjs/builders');

const {
    MessageEmbed,
} = require('discord.js');

const vars = require('../../variables.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('⭐ Stuck? Run this command :)'),

    async execute(client, interaction, cache) {
        console.log("Help command ran?");
    }

}