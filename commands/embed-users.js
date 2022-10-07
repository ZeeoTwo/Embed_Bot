const { SlashCommandBuilder } = require("discord.js");
const { EmbedBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("embed-u-add")
		.setDescription("Create User Embed")
	// UserName
		.addStringOption((option) =>
			option
				.setName("username")
				.setDescription("Nazwa Użytkownika")
				.setRequired(true)
		)
		// UserID
		.addStringOption((option) =>
			option
				.setName("userid")
				.setDescription("ID Uzytkownika")
				.setRequired(true)
		)
	// Role
		.addStringOption((option) =>
			option
				.setName("role")
				.setDescription("Nazwa Użytkownika")
				.setRequired(true)
		)
	// Description
		.addStringOption((option) =>
			option
				.setName("description")
				.setDescription("Nazwa Użytkownika")
				.setRequired(true)
		)
	// Image(Thumbnail)
		.addStringOption((option) =>
			option
				.setName("image_link")
				.setDescription("Nazwa Użytkownika")
				.setRequired(true)
		),
	async execute(interaction) {
		const u_name = interaction.options.getString("username");
		const u_id = interaction.options.getString("userid");
		const u_role = interaction.options.getString("role");
		const u_description = interaction.options.getString("description");
		const u_image_link = interaction.options.getString("image_link");

		const guild = interaction.guild;
		const channel = guild.channels.cache.get("1027981553122418768");
		const exampleEmbed = new EmbedBuilder()
			.setTitle(u_name)
			.setColor(0x0099ff)
			.addFields(
				{ name: "Rola", value: u_role, },
				{ name: "Opis", value: u_description, },
			)
			.setImage(u_image_link);
		channel.send({ content : "<@" + u_id.toString() + ">", embeds : [exampleEmbed] });
		await interaction.reply("Created User Embed");
	},
};