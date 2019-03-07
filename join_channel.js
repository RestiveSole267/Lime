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
         if(messsage.member.voiceChannel)
         {
            if(message.guild.voiceConnection.); 
            {
                message.member.voicechannel.join()
                    .then(connection =>{
                        message.reply("Successfully Joined!");
                    })
            }
         }
         else
         {
            message.reply("Hi!")
         }
     }
}

module.exports = JoinChannelCommand;
