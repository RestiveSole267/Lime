const commando = require('discord.js-commando');

class JoinChannelCommand extends commando.Command
{
     constructor(client)
     {
          super(client,{
              name: 'join',
              group: 'music',
              memberName: 'join',
              description:'joins voice channels'
          });
     }
     
     async run(message, args)
     {
         if(messsage.guild.voiceConnection)
         {
            message.guild.voiceConnection.disconnect(); 
         }
         else
         {
            message.reply("Im leaving the voice channel!")
         }
     }
}

module.exports = LeaveChannelCommand;
