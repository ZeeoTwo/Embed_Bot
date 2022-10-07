/* eslint-disable no-unused-vars */
const fs = require("fs");
const { SlashCommandBuilder } = require("discord.js");

// const { map_msg } = require('../main.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("shutdown")
		.setDescription("Shutdown And Save Everything"),
	async execute(interaction) {

		// fs.writeFile('../msgdata.json', JSON.stringify(Object.fromEntries(map_msg)), function(err) {
		// 	if (err) throw err;
		// 	console.log('Saved!');
		// });

		await interaction.client.destroy();

		// Zamykane Bota i zapisanie wszystkiego
	},
};
