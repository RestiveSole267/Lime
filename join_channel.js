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
                 if(!servers[message.guild.id])
                 {
                     servers[message.guild.id] = {queue; [] }
                 }
                 var server = servers[message.guild.id]
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
