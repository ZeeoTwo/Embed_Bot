/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
const { SlashCommandBuilder, Message } = require("discord.js");
const { EmbedBuilder } = require("discord.js");
const { user_channel } = require('../config.json');

let is_ready = true;

module.exports = {
	data: new SlashCommandBuilder()
		.setName("embed-edit-u")
		.setDescription("Create User Embed")
		.addStringOption((option) =>
			option
				.setName("id")
				.setDescription("Id Wiadomości")
				.setRequired(true)
		)
		.addStringOption((option) =>
			option
				.setName("field")
				.setDescription("The Field you want to edit")
				.setRequired(true)
				.addChoices(
					{ name: 'username', value: 'username' },
					{ name: 'role', value: 'role' },
					{ name: 'description', value: 'description' },
					{ name: 'image_link', value: 'img_link' },
				)
		)
		.addStringOption((option) =>
			option
				.setName("content")
				.setDescription("content zmiany")
				.setRequired(true)
		),
	async execute(interaction) {
		let edit_msgId = interaction.options.getString("id");
		let channel = await interaction.channel.fetch(user_channel);

		function editEmb(msg) {
			let copy_Embed = msg.embeds[0];
			let good_embed = new EmbedBuilder()
				.setTitle(copy_Embed.data.title)
				.setColor(0x0099ff)
				.addFields(
					{ name: "Rola", value: copy_Embed.data.fields[0].value, },
					{ name: "Opis", value: copy_Embed.data.fields[1].value, },
				)
				.setImage(copy_Embed.data.image.url);
			if (interaction.options.getString('field') == 'username') {
				// USERNAME
				good_embed.setTitle(interaction.options.getString('content'));
			}	else if (interaction.options.getString('field') == 'role') {
				// ROLE
				good_embed.setFields(
					{ name: "Rola", value: interaction.options.getString('content'), },
					{ name: "Opis", value: copy_Embed.data.fields[1].value, },
				);
			}	else if (interaction.options.getString('field') == 'description') {
				// DESCRIPTION
				good_embed.setFields(
					{ name: "Rola", value: copy_Embed.data.fields[0].value, },
					{ name: "Opis", value: interaction.options.getString('content'), },
				);
			}	else if (interaction.options.getString('field') == 'image_link') {
				// IMAGE_LINK
				good_embed.setImage(interaction.options.getString('content'));
			}
			copy_Embed = good_embed;
			return good_embed;
		}
		// const ms = await interaction.editMessage(edit_msgId, { embeds: [editEmb()] });
		channel.messages.fetch(edit_msgId).then(message => message.edit({ embeds: [editEmb(message)] }), console.log('UPDATED'));
		// let message = channel.messages.fetch(edit_msgId).then(mes => editEmb(mes));
		// message.edit({ embeds: [editEmb(message)] }).then(msg => console.log('Updated EMBED'));
		await interaction.reply("Edited User Embed");
	},
};
