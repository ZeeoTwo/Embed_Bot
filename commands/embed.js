const { SlashCommandBuilder } = require("discord.js");
const { EmbedBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("embed-add")
		.setDescription("Create Embed")
		// Alt Title
		.addStringOption((option) =>
			option
				.setName("alt_title")
				.setDescription("Tytuł Po Japońsku")
				.setRequired(true)
		)
		// Title
		.addStringOption((option) =>
			option
				.setName("title")
				.setDescription("Tytuł")
				.setRequired(true)
		)
		// Image
		.addStringOption((option) =>
			option
				.setName("image_link")
				.setDescription("Zdjęcie")
				.setRequired(true)
		)
		// Volumes
		.addStringOption((option) =>
			option
				.setName("volumes")
				.setDescription("Ile ma Tomów")
				.setRequired(true)
		)
		// Type
		.addStringOption((option) =>
			option
				.setName("type")
				.setDescription("Rodzaj")
				.setRequired(true)
		)
		// Genre
		.addStringOption((option) =>
			option
				.setName("genre")
				.setDescription("Gatunek")
				.setRequired(true)
		)
		// Author
		.addStringOption((option) =>
			option
				.setName("author")
				.setDescription("Autor")
				.setRequired(true)
		)
		// Release Date
		.addIntegerOption((option) =>
			option
				.setName("release_date")
				.setDescription("Data Wydania")
				.setRequired(true)
		)
		// User Opinion
		.addStringOption((option) =>
			option
				.setName("opinion")
				.setDescription("Wasza Opinia")
				.setRequired(true)
		)
		// Description
		.addStringOption((option) =>
			option
				.setName("description")
				.setDescription("Opis")
				.setRequired(true)
		)
		// Link To Mangadex
		.addStringOption((option) =>
			option
				.setName("mangadex")
				.setDescription("Link do mangadex")
				.setRequired(true)
		)
		// Link To Download
		.addStringOption((option) =>
			option
				.setName("download")
				.setDescription("Link do pobrania")
				.setRequired(true)
		)
		// Link to Rating Form
		.addStringOption((option) =>
			option
				.setName("rate")
				.setDescription("Link do ocenienia mangi")
				.setRequired(true)
		),
	async execute(interaction) {
		const e_title = interaction.options.getString("title");
		const e_alt_title = interaction.options.getString("alt_title");
		const e_volumes = interaction.options.getString("volumes");
		const e_type = interaction.options.getString("type");
		const e_genre = interaction.options.getString("genre");
		const e_author = interaction.options.getString("author");
		const e_release_date = interaction.options.getInteger("release_date");
		const e_opinion = interaction.options.getString("opinion");
		const e_image_link = interaction.options.getString("image_link");
		const e_description = interaction.options.getString("description");
		const e_mangadex = interaction.options.getString("mangadex");
		const e_download = interaction.options.getString("download");
		const e_rate = interaction.options.getString("rate");

		const guild = interaction.guild;
		const channel = guild.channels.cache.get("1027865140357505044");
		const exampleEmbed = new EmbedBuilder()
			.setTitle(e_alt_title)
			.setColor(0x0099ff)
			.addFields(
				{ name: "Autor", value: e_author, inline: true },
				{ name: "Data Wydania", value: e_release_date.toString(), inline: true },
				{ name: "Liczba Tomów", value: e_volumes, inline: true },
				{ name: "Rodzaj", value: e_type, inline: true },
				{ name: "Gatunek", value: e_genre, inline: true },
				{ name: "Wasza Ocena", value: e_opinion, inline: true },
				{ name: "Opis", value: e_description },
				{ name: "Mangadex", value: e_mangadex },
				{ name: "Pobierz", value: e_download },
				{ name: "Oceń mangę", value: e_rate },
			)
			.setImage(e_image_link);
		console.log(exampleEmbed);
		channel.send({ content: "**" + e_title + "**", embeds: [exampleEmbed] });
		await interaction.reply("Created Embed");
	},
};