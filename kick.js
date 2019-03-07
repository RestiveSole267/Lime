const commando = require('discord.js-commando');

class KickCommand extends commando.Command
{
     constructor(client)
     {
          super(client,{
              name: 'kick',
              group: 'admin',
              memberName: 'kick',
              description:'Kicks a user'
          });
     }
     
     async run(message, args)
     {
         let kickedUser = message.guild.member(message.mentions.users.first());
         if(!kickeduser)
         {
            message.channel.send("Sorry, I couldn't find that user");
            return:
            {
            if(!message.member.hasPermission("MANAGE_MESSAGES"))
            {
                message.channel.send("You don't have permission to kick other in the server")
                return;
         }
         let reason = args.slice(1).join('');
         console.log(args);
     }
}

module.exports = KickCommands;
