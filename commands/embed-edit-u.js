/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
const fs = require('fs');
const { SlashCommandBuilder } = require("discord.js");
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
		const edit_msgId = interaction.options.getString("id");
		const channel = await interaction.channel.fetch(user_channel);

		function editEmb(msg) {
			console.log(msg.embeds);
			let copy_Embed = msg.embeds[0];
			if (interaction.options.getString('field') == 'username') {
				// USERNAME
				let good_embed = new EmbedBuilder()
					.setTitle(interaction.options.getString('content'))
					.setColor(0x0099ff)
					.addFields(
						{ name: "Rola", value: copy_Embed.data.fields[0].value, },
						{ name: "Opis", value: copy_Embed.data.fields[1].value, },
					)
					.setImage(copy_Embed.data.image.url);
				return good_embed;
			}	else if (interaction.options.getString('field') == 'role') {
				// ROLE
				let good_embed = new EmbedBuilder()
					.setTitle(copy_Embed.data.title)
					.setColor(0x0099ff)
					.addFields(
						{ name: "Rola", value: interaction.options.getString('content'), },
						{ name: "Opis", value: copy_Embed.data.fields[1].value, },
					)
					.setImage(copy_Embed.data.image.url);
				return good_embed;
			}	else if (interaction.options.getString('field') == 'description') {
				// DESCRIPTION
				let good_embed = new EmbedBuilder()
					.setTitle(copy_Embed.data.title)
					.setColor(0x0099ff)
					.addFields(
						{ name: "Rola", value: copy_Embed.data.fields[0].value, },
						{ name: "Opis", value: interaction.options.getString('content'), },
					)
					.setImage(copy_Embed.data.image.url);
				return good_embed;
			}	else if (interaction.options.getString('field') == 'image_link') {
				// IMAGE_LINK
				let good_embed = new EmbedBuilder()
					.setTitle(copy_Embed.data.title)
					.setColor(0x0099ff)
					.addFields(
						{ name: "Rola", value: copy_Embed.data.fields[0].value, },
						{ name: "Opis", value: copy_Embed.data.fields[1].value, },
					)
					.setImage(interaction.options.getString('content'));
				return good_embed;
			}
		}

		// const ms = await interaction.editMessage(edit_msgId, { embeds: [editEmb()] });
		channel.messages.fetch(edit_msgId).then(message => message.edit({ embeds: [editEmb(message)] }), console.log('UPDATED'));
		// let message = channel.messages.fetch(edit_msgId).then(mes => editEmb(mes));
		// message.edit({ embeds: [editEmb(message)] }).then(msg => console.log('Updated EMBED'));
		await interaction.reply("Edited User Embed");
	},
};
