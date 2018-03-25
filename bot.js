const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '!';


bot.on('ready', function() {
    console.log('ready!');
});

bot.on('message', function(message) {
    if(!message.content.startsWith(prefix)) return;
    //nach prefix content splitten
    var args = message.content.substring(prefix.length).split(" ");
    
    switch(args[0]){
        case 'don': 
            message.channel.sendMessage('Wau!');
            break;
    }
});
// nicht verändern!
bot.login(process.env.BOT_TOKEN);
