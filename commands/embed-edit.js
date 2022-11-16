/* eslint-disable prefer-const */
const { SlashCommandBuilder } = require("discord.js");
const { EmbedBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("embed-edit")
		.setDescription("Edit Embed")
		.addStringOption((option) =>
			option
				.setName("id")
				.setDescription("Message Id")
				.setRequired(true)
		)
		.addStringOption((option) =>
			option
				.setName("field")
				.setDescription("The Field you want to edit")
				.setRequired(true)
				.addChoices(
					{ name: 'title', value: 'title' },
					{ name: 'alt_title', value: 'alt_title' },
					{ name: 'author', value: 'author' },
					{ name: 'release_date', value: 'release_date' },
					{ name: 'volumes', value: 'volumes' },
					{ name: 'type', value: 'type' },
					{ name: 'genre', value: 'genre' },
					{ name: 'opinion', value: 'opinion' },
					{ name: 'description', value: 'description' },
					{ name: 'mangadex', value: 'mangadex' },
					{ name: 'download', value: 'download' },
					{ name: 'rate', value: 'rate' },
					{ name: 'image_link', value: 'img_link' },
				)
		)
		.addStringOption((option) =>
			option
				.setName("content")
				.setDescription("Change Content")
				.setRequired(true)
		),
	async execute(interaction) {
		let edit_msgId = interaction.options.getString("id");
		let channel = await interaction.channel.fetch();


		function editEmb(msg) {
			let copy_Embed = msg.embeds[0];
			let good_embed = new EmbedBuilder()
				.setTitle(copy_Embed.data.title)
				.setColor(0x0099ff)
				.addFields(
					{ name: "Autor", value: copy_Embed.data.fields[0].value, inline: true },
					{ name: "Data wydania", value: copy_Embed.data.fields[1].value, inline: true },
					{ name: "Liczba tomów", value: copy_Embed.data.fields[2].value, inline: true },
					{ name: "Rodzaj", value: copy_Embed.data.fields[3].value, inline: true },
					{ name: "Gatunek", value: copy_Embed.data.fields[4].value, inline: true },
					{ name: "Wasza ocena", value: copy_Embed.data.fields[5].value, inline: true },
					{ name: "Opis", value: copy_Embed.data.fields[6].value },
					{ name: "Mangadex", value: copy_Embed.data.fields[7].value },
					{ name: "Pobierz", value: copy_Embed.data.fields[8].value },
					{ name: "Oceń mangę", value: copy_Embed.data.fields[9].value },
				)
				.setImage(copy_Embed.data.image.url);

			if (interaction.options.getString('field') == 'alt_title') {
				// ALT TITLE
				good_embed.setTitle(interaction.options.getString('content'));
			}	else if (interaction.options.getString('field') == 'author') {
				// AUTHOR
				good_embed.setFields(
					{ name: "Autor", value: interaction.options.getString('content'), inline: true },
					{ name: "Data wydania", value: copy_Embed.data.fields[1].value, inline: true },
					{ name: "Liczba tomów", value: copy_Embed.data.fields[2].value, inline: true },
					{ name: "Rodzaj", value: copy_Embed.data.fields[3].value, inline: true },
					{ name: "Gatunek", value: copy_Embed.data.fields[4].value, inline: true },
					{ name: "Wasza ocena", value: copy_Embed.data.fields[5].value, inline: true },
					{ name: "Opis", value: copy_Embed.data.fields[6].value },
					{ name: "Mangadex", value: copy_Embed.data.fields[7].value },
					{ name: "Pobierz", value: copy_Embed.data.fields[8].value },
					{ name: "Oceń mangę", value: copy_Embed.data.fields[9].value },
				);
			}	else if (interaction.options.getString('field') == 'release_date') {
				// RELEASE DATE
				good_embed.setFields(
					{ name: "Autor", value: copy_Embed.data.fields[0].value, inline: true },
					{ name: "Data wydania", value: interaction.options.getString('content'), inline: true },
					{ name: "Liczba tomów", value: copy_Embed.data.fields[2].value, inline: true },
					{ name: "Rodzaj", value: copy_Embed.data.fields[3].value, inline: true },
					{ name: "Gatunek", value: copy_Embed.data.fields[4].value, inline: true },
					{ name: "Wasza ocena", value: copy_Embed.data.fields[5].value, inline: true },
					{ name: "Opis", value: copy_Embed.data.fields[6].value },
					{ name: "Mangadex", value: copy_Embed.data.fields[7].value },
					{ name: "Pobierz", value: copy_Embed.data.fields[8].value },
					{ name: "Oceń mangę", value: copy_Embed.data.fields[9].value },
				);
			}	else if (interaction.options.getString('field') == 'volumes') {
				// Volumes
				good_embed.setFields(
					{ name: "Autor", value: copy_Embed.data.fields[0].value, inline: true },
					{ name: "Data wydania", value: copy_Embed.data.fields[1].value, inline: true },
					{ name: "Liczba tomów", value: interaction.options.getString('content'), inline: true },
					{ name: "Rodzaj", value: copy_Embed.data.fields[3].value, inline: true },
					{ name: "Gatunek", value: copy_Embed.data.fields[4].value, inline: true },
					{ name: "Wasza ocena", value: copy_Embed.data.fields[5].value, inline: true },
					{ name: "Opis", value: copy_Embed.data.fields[6].value },
					{ name: "Mangadex", value: copy_Embed.data.fields[7].value },
					{ name: "Pobierz", value: copy_Embed.data.fields[8].value },
					{ name: "Oceń mangę", value: copy_Embed.data.fields[9].value },
				);
			}	else if (interaction.options.getString('field') == 'type') {
				// Type
				good_embed.setFields(
					{ name: "Autor", value: copy_Embed.data.fields[0].value, inline: true },
					{ name: "Data wydania", value: copy_Embed.data.fields[1].value, inline: true },
					{ name: "Liczba tomów", value: copy_Embed.data.fields[2].value, inline: true },
					{ name: "Rodzaj", value: interaction.options.getString('content'), inline: true },
					{ name: "Gatunek", value: copy_Embed.data.fields[4].value, inline: true },
					{ name: "Wasza ocena", value: copy_Embed.data.fields[5].value, inline: true },
					{ name: "Opis", value: copy_Embed.data.fields[6].value },
					{ name: "Mangadex", value: copy_Embed.data.fields[7].value },
					{ name: "Pobierz", value: copy_Embed.data.fields[8].value },
					{ name: "Oceń mangę", value: copy_Embed.data.fields[9].value },
				);
			}	else if (interaction.options.getString('field') == 'genre') {
				// Genre
				good_embed.setFields(
					{ name: "Autor", value: copy_Embed.data.fields[0].value, inline: true },
					{ name: "Data wydania", value: copy_Embed.data.fields[1].value, inline: true },
					{ name: "Liczba tomów", value: copy_Embed.data.fields[2].value, inline: true },
					{ name: "Rodzaj", value: copy_Embed.data.fields[3].value, inline: true },
					{ name: "Gatunek", value: interaction.options.getString('content'), inline: true },
					{ name: "Wasza ocena", value: copy_Embed.data.fields[5].value, inline: true },
					{ name: "Opis", value: copy_Embed.data.fields[6].value },
					{ name: "Mangadex", value: copy_Embed.data.fields[7].value },
					{ name: "Pobierz", value: copy_Embed.data.fields[8].value },
					{ name: "Oceń mangę", value: copy_Embed.data.fields[9].value },
				);
			}	else if (interaction.options.getString('field') == 'opinion') {
				// Opinion
				good_embed.setFields(
					{ name: "Autor", value: copy_Embed.data.fields[0].value, inline: true },
					{ name: "Data wydania", value: copy_Embed.data.fields[1].value, inline: true },
					{ name: "Liczba tomów", value: copy_Embed.data.fields[2].value, inline: true },
					{ name: "Rodzaj", value: copy_Embed.data.fields[3].value, inline: true },
					{ name: "Gatunek", value: copy_Embed.data.fields[4].value, inline: true },
					{ name: "Wasza ocena", value: interaction.options.getString('content'), inline: true },
					{ name: "Opis", value: copy_Embed.data.fields[6].value },
					{ name: "Mangadex", value: copy_Embed.data.fields[7].value },
					{ name: "Pobierz", value: copy_Embed.data.fields[8].value },
					{ name: "Oceń mangę", value: copy_Embed.data.fields[9].value },
				);
			}	else if (interaction.options.getString('field') == 'description') {
				// Description
				good_embed.setFields(
					{ name: "Autor", value: copy_Embed.data.fields[0].value, inline: true },
					{ name: "Data wydania", value: copy_Embed.data.fields[1].value, inline: true },
					{ name: "Liczba tomów", value: copy_Embed.data.fields[2].value, inline: true },
					{ name: "Rodzaj", value: copy_Embed.data.fields[3].value, inline: true },
					{ name: "Gatunek", value: copy_Embed.data.fields[4].value, inline: true },
					{ name: "Wasza ocena", value: copy_Embed.data.fields[5].value, inline: true },
					{ name: "Opis", value: interaction.options.getString('content') },
					{ name: "Mangadex", value: copy_Embed.data.fields[7].value },
					{ name: "Pobierz", value: copy_Embed.data.fields[8].value },
					{ name: "Oceń mangę", value: copy_Embed.data.fields[9].value },
				);
			}	else if (interaction.options.getString('field') == 'mangadex') {
				// Mangadex
				good_embed.setFields(
					{ name: "Autor", value: copy_Embed.data.fields[0].value, inline: true },
					{ name: "Data wydania", value: copy_Embed.data.fields[1].value, inline: true },
					{ name: "Liczba tomów", value: copy_Embed.data.fields[2].value, inline: true },
					{ name: "Rodzaj", value: copy_Embed.data.fields[3].value, inline: true },
					{ name: "Gatunek", value: copy_Embed.data.fields[4].value, inline: true },
					{ name: "Wasza ocena", value: copy_Embed.data.fields[5].value, inline: true },
					{ name: "Opis", value: copy_Embed.data.fields[6].value },
					{ name: "Mangadex", value: interaction.options.getString('content') },
					{ name: "Pobierz", value: copy_Embed.data.fields[8].value },
					{ name: "Oceń mangę", value: copy_Embed.data.fields[9].value },
				);
			}	else if (interaction.options.getString('field') == 'download') {
				// Download
				good_embed.setFields(
					{ name: "Autor", value: copy_Embed.data.fields[0].value, inline: true },
					{ name: "Data wydania", value: copy_Embed.data.fields[1].value, inline: true },
					{ name: "Liczba tomów", value: copy_Embed.data.fields[2].value, inline: true },
					{ name: "Rodzaj", value: copy_Embed.data.fields[3].value, inline: true },
					{ name: "Gatunek", value: copy_Embed.data.fields[4].value, inline: true },
					{ name: "Wasza ocena", value: copy_Embed.data.fields[5].value, inline: true },
					{ name: "Opis", value: copy_Embed.data.fields[6].value },
					{ name: "Mangadex", value: copy_Embed.data.fields[7].value },
					{ name: "Pobierz", value: interaction.options.getString('content') },
					{ name: "Oceń mangę", value: copy_Embed.data.fields[9].value },
				);
			}	else if (interaction.options.getString('field') == 'rate') {
				// Rate
				good_embed.setFields(
					{ name: "Autor", value: copy_Embed.data.fields[0].value, inline: true },
					{ name: "Data wydania", value: copy_Embed.data.fields[1].value, inline: true },
					{ name: "Liczba tomów", value: copy_Embed.data.fields[2].value, inline: true },
					{ name: "Rodzaj", value: copy_Embed.data.fields[3].value, inline: true },
					{ name: "Gatunek", value: copy_Embed.data.fields[4].value, inline: true },
					{ name: "Wasza ocena", value: copy_Embed.data.fields[5].value, inline: true },
					{ name: "Opis", value: copy_Embed.data.fields[6].value },
					{ name: "Mangadex", value: copy_Embed.data.fields[7].value },
					{ name: "Pobierz", value: copy_Embed.data.fields[8].value },
					{ name: "Oceń mangę", value: interaction.options.getString('content') },
				);
			}	else if (interaction.options.getString('field') == 'image_link') {
				// Image Link
				good_embed.setImage(interaction.options.getString('content'));
			}
			return good_embed;
		}
		if (interaction.options.getString('field') == 'title') {
			// TITLE
			channel.messages.fetch(edit_msgId).then(message => message.edit({ content: interaction.options.getString('content'), embeds: [editEmb(message)] }), channel.messages.cache.clear(), console.log('UPDATED'));
		} else {
			channel.messages.fetch(edit_msgId).then(message => message.edit({ embeds: [editEmb(message)] }), channel.messages.cache.clear(), console.log('UPDATED'));
		}
		await interaction.reply("Edited Embed");
	},
};