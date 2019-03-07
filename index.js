const Commando = require ('discord.js-commando');
const bot = new Commando.Client();


bot.registry.registerGroup('simple','Simple');
bot.registry.registerDefaults();
bot.registry.registerCommandIn(__dirname + "/commands");

bot.login('');
