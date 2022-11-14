/* eslint-disable no-unused-vars */
const fs = require("fs");
const { SlashCommandBuilder } = require("discord.js");


module.exports = {
	data: new SlashCommandBuilder()
		.setName("shutdown")
		.setDescription("Shutdown And Save Everything"),
	async execute(interaction) {
		await interaction.client.destroy();
	},
};
