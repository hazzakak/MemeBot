const { RichEmbed } = require("discord.js")
exports.run = (client, message, [name], _level) => {
	let top100

	client.api.getTop100(0).then(body => {
		top100 = body
	}).catch(err => client.logger.error(err.stack))

	const stats = new RichEmbed()
		.setAuthor(client.user.username, client.user.avatarURL, "https://github.com/thomasvt1/MemeBot")
		.setColor("GOLD")
		.setFooter("Page 1 of 3 | Made by Thomas van Tilburg with ❤️", client.users.get(client.config.ownerID).avatarURL)
		.setTitle("Top 100 Investors of /r/MemeEconomy")
		.setURL("https://meme.market/leaderboards.html?season=1")
    
	let i = 0
	while (i !== 24) {
		const investor = top100[i]
		stats.addField(`[\`${i + 1}.\` u/${investor.name}](https://reddit.com/u/${investor.name})`, `\`Net worth:\` **${client.api.getSuffix(investor.networth)} M¢**`, false)
		i++
	}
}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: "User"
}

exports.help = {
	name: "top100",
	category: "MemeEconomy",
	description: "Shows you the top 100 investors and their profiles.",
	usage: "top100"
}
