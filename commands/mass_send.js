const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id === "346687165868015616") {
        message.guild.members.forEach(member => member.send('Thank you for adding Sinon to your discord server!\n\nTo get started type `s!help`.\n\nPlease support those who worked hard on making the bot! \nConsider joining https://discord.gg/euDVUuW which is the owner\'s discord.\n`(there is chance you are accidentally recieving this message due to messed up code. If that is the case, then sorry about that!)`'));
	}
}
 
module.exports.help = {
  name: "masssend"
}