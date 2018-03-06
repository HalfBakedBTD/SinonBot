module.exports.run = async (bot, message, args) => {
    let users = bot.users;

    let searchTerm = args[0];
    if(!searchTerm) return message.channel.send("Please type a term to search!\n\nExample: `s!search a` will find and print users with a in thier name.");

    let matches = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    message.channel.send(matches.map(u => u.tag));

    message.delete();

}
    
module.exports.help = {
    name: "fu"
}