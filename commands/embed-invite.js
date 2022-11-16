const { SlashCommandBuilder } = require("discord.js");
const { EmbedBuilder } = require("discord.js");
const { channels } = require('../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("embed-i-add")
		.setDescription("Create Invite Embed (Bruh)")
		// GROUP TYPE
		.addStringOption((option) =>
			option
				.setName("type")
				.setDescription("Czym Zajmuje się Grupa")
				.setRequired(true)
		)
		// ROLE ID
		.addStringOption((option) =>
			option
				.setName("role_id")
				.setDescription("ID Roli Grupy")
				.setRequired(true)
		)
		// Link Discord
		.addStringOption((option) =>
			option
				.setName("discord_link")
				.setDescription("Link do Discorda")
				.setRequired(true)
		)
		// Image(Thumbnail)
		.addStringOption((option) =>
			option
				.setName("image_link")
				.setDescription("Link do zdjęcia")
				.setRequired(true)
		),
	async execute(interaction) {
		const i_type = interaction.options.getString("type");
		const i_role_id = interaction.options.getString("role_id");
		const i_discord_link = interaction.options.getString("discord_link");
		const i_image_link = interaction.options.getString("image_link");

		const guild = interaction.guild;
		const channel = guild.channels.cache.get(channels.invite_channel);
		const exampleEmbed = new EmbedBuilder()
			.setTitle(i_type)
			.setColor(0x0099ff)
			.addFields(
				{ name: "Link do Discorda", value: i_discord_link, },
			)
			.setImage(i_image_link);
		channel.send({ content : "<@" + i_role_id.toString() + ">", embeds : [exampleEmbed] });
		await interaction.reply("Created User Embed");
	},
};