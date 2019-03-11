const commando = require('discord.js-commando');

class LeaveChannelCommand extends commando.Command
{
     constructor(client)
     {
          super(client,{
              name: 'leave',
              group: 'music',
              memberName: 'leave',
              description:'leaves voice channels'
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