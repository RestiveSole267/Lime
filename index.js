const Commando = require('discord.js-commando');
const bot = new Commando.Client();


bot.registry.registerGroup('simple','Simple');
bot.registry.registerGroup('music','Music')
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(_dirname + '/commands');

bot.login('NTUzOTMzMDg1MDcxMzc2Mzk0.D2hmzw.g68oUBKvVEISqcsoaadyMvw52Ys');