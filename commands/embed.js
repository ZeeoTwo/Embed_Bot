const { SlashCommandBuilder } = require("discord.js");
const { EmbedBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("embed")
		.setDescription("Show Embed")
		.addStringOption((option) =>
			option
				.setName("title")
				.setDescription("Tytuł")
				.setRequired(true)
		)
		.addIntegerOption((option) =>
			option
				.setName("seasons")
				.setDescription("Ile ma sezonów")
				.setRequired(true)
		)
		.addStringOption((option) =>
			option
				.setName("type")
				.setDescription("Rodzaj")
				.setRequired(true)
		)
		.addStringOption((option) =>
			option
				.setName("genre")
				.setDescription("Gatunek")
				.setRequired(true)
		)
		.addStringOption((option) =>
			option
				.setName("author")
				.setDescription("Autor")
				.setRequired(true)
		)
		.addIntegerOption((option) =>
			option
				.setName("release_date")
				.setDescription("Data Wydania")
				.setRequired(true)
		)
		.addStringOption((option) =>
			option
				.setName("opinion")
				.setDescription("Wasza Opinia")
				.setRequired(true)
		),
	async execute(interaction) {
		const e_title = interaction.options.getString("title");
		const e_seasons = interaction.options.getInteger("seasons");
		const e_type = interaction.options.getString("type");
		const e_genre = interaction.options.getString("genre");
		const e_author = interaction.options.getString("author");
		const e_release_date = interaction.options.getInteger("release_date");
		const e_opinion = interaction.options.getString("opinion");
		console.log(e_title);
		const guild = interaction.guild;
		const channel = guild.channels.cache.get("1027865140357505044");
		const exampleEmbed = new EmbedBuilder()
			.setTitle(e_title)
			.setColor(0x0099ff)
			.addFields(
				{ name: "Liczba Sezonów", value: e_seasons.toString() },
				{ name: "Rodzaj", value: e_type },
				{ name: "Gatunek", value: e_genre },
				{ name: "Author", value: e_author },
				{ name: "Data Wydania", value: e_release_date.toString() },
				{ name: "Wasza Ocena", value: e_opinion }
			);
		console.log(exampleEmbed);
		channel.send({ embeds: [exampleEmbed] });
		await interaction.reply("Added Embed");
	},
};
