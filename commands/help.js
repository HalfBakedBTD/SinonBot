const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	message.channel.send("I have sent you a DM.")
    return message.channel.send("**My Commands:**\n\n\t**Info:**\n\t\t`help`: shows this help message.\n\t\t`server.info`: shows server info.\n\t\t`bot.info`: shows bot info.\n\n\t**Moderation:**\n\t\t`ban`: bans a user. (*s!ban <@235088799074484224> for spamming*)\n\t\t`kick`: lets you kick users. (*s!kick <@398601531525562369> for a reason*)\n\t\t`report`: lets anyone report anyone. (*s!report <@155149108183695360> no reason...*)\n\t\t`clear`: allows you to clear messages.\n\t\t`addrole`: lets you add a role to a user. (*s!addrole <@292953664492929025> Mod*)\n\t\t`removeroll`: removes a user's role!(*s!removeroll <@159985870458322944> Bots*)\n\n\t**Fun:**\n\t\t`8ball`: ask 8ball a question! (*s!8ball Am I fat?*)\n\t\t`embed`: embeds whatever you put after embed. (*s!embed my foot*)\n\t\t`pfp`: grabes someone's profile picture in High Definition.\n\t\t`finduser`: searches for terms put into the bot.\n\t\t`say`: gets the bot to repeat some text.\n\n\t**Links:**\n\t\t`youtube`: links you to my owner's youtube.\n\t\t`discord`: links you to my owner's discord.\n\t\t`invite`: I will send you a link to add me to another server.\n\t\t`links`: I will give you all my links!\n\n\n**Note:**\n\tAlmost **all** commands have **secret shortcuts** added in by the owner! Try and find them and typing commands becomes easier! **Example**: `s!inv` is the shortcut for `s!invite`.\n\n**If** you have problems, or if you want all the news, join Sinon's official discord server **[https://discord.gg/tQqgqdt]** where we keep all of you up to date!")
}
module.exports.help = {
  name: "help"
}
