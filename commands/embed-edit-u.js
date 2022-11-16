/* eslint-disable prefer-const */
const { SlashCommandBuilder } = require("discord.js");
const { EmbedBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("embed-edit-u")
		.setDescription("Edit User Embed")
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
					{ name: 'username', value: 'username' },
					{ name: 'role', value: 'role' },
					{ name: 'description', value: 'description' },
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
			return good_embed;
		}

		channel.messages.fetch(edit_msgId).then(message => message.edit({ embeds: [editEmb(message)] }), channel.messages.cache.clear(), console.log('UPDATED'));

		await interaction.reply("Edited User Embed");
	},
};