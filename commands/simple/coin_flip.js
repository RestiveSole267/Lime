const commando = require('discord.js-commando');

class CoinFlipCommand extends commando.Command
{
     constructor(client)
     {
          super(client,{
              name: 'flip',
              group: 'fun',
              memberName: 'flip',
              description:'A coin that lands on heads or tails'
          });
     }
     
     async run(message, args)
     {
         var change = Math.floor(Mathf.random() * 2);
         if(chance == 0)
         {
            message.reply("Your coin landed on Heads!");
            
         }
         else
         {
            message.reply("Your coin landed on Tails!")
         }
     }
}

module.exports = CoinFlipCommand;