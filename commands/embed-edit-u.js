/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
const fs = require('fs');
const { SlashCommandBuilder } = require("discord.js");
const { EmbedBuilder } = require("discord.js");
const { user_channel } = require('../config.json');

let map_msg = new Map();
let is_ready = true;

module.exports = { map_msg };

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
		const msgId = interaction.options.getString("id");
		const channel = await interaction.channel.fetch(user_channel);

		function editEmb(msg) {
			let c_Embed = msg.embeds[0];
			let is_new = false;

			// TODO PIERDOLE TO
			if (!is_ready) {
				let raw = fs.readFile('./msgdata.json', 'utf8', function(err, data) {
					console.log(data);
				});
				map_msg = JSON.parse(raw);
				is_ready = true;
			}

			console.log(msgId);
			if (!map_msg.has(msgId)) {
				map_msg.set(msgId, { title :c_Embed.title, role : c_Embed.fields[0].value, description : c_Embed.fields[1].value, img_link : c_Embed.image.url });
				is_new = true;
			}

			const operation = interaction.options.getString("field");

			if (operation == "username") {
				map_msg.get(msgId).title = interaction.options.getString("content");
			}
			if (operation == "role") {
				map_msg.get(msgId).role = interaction.options.getString("content");
			}
			if (operation == "description") {
				map_msg.get(msgId).description = interaction.options.getString("content");
			}
			if (operation == "img_link") {
				map_msg.get(msgId).img_link = interaction.options.getString("content");
			}

			const exampleEmbed = new EmbedBuilder()
				.setTitle(map_msg.get(msgId).title)
				.setColor(0x0099ff)
				.addFields(
					{ name: "Rola", value: map_msg.get(msgId).role, },
					{ name: "Opis", value: map_msg.get(msgId).description, },
				)
				.setImage(map_msg.get(msgId).img_link);
			msg.edit({ embeds: [exampleEmbed] });

			// TODO JEBANE ZAPISAYWANIE DO PLIKU I INNE GÓWNO
			if (is_new) {
				fs.appendFile('../msgdata.json', JSON.stringify(Object.fromEntries(map_msg)), function(err) {
					if (err) throw err;
					console.log('Saved!');
				});
			}

			return;
		}
		channel.messages.fetch(msgId).then(message => editEmb(message));

		await interaction.reply("Created User Embed");
	},
};
