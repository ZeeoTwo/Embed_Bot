/* eslint-disable prefer-const */
const { SlashCommandBuilder } = require("discord.js");
// const { channels } = require('../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("copy")
		.setDescription("Copy embed from somewhere to somewhere")
		.addStringOption((option) =>
			option
				.setName("id")
				.setDescription("ID of an embed you want to coppy")
				.setRequired(true)
		)
		.addStringOption((option) =>
			option
				.setName("channel_id")
				.setDescription("ID of the channel you want to copy embed from")
				.setRequired(true)
		),
	async execute(interaction) {
		let guild = interaction.guild;
		const idOfMsg = interaction.options.getString("id");
		const channel = await guild.channels.fetch(interaction.options.getString("channel_id"));
		channel.messages.fetch(idOfMsg).then(message => channel.send({ content: "**" + message.content + "**", embeds: [message.embeds[0]] })).catch(console.error);
		await interaction.reply("Copied");
	}
};