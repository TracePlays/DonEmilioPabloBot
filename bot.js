const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '!';

var randomAuswahl = [ 
    'JA',
    'NEIN'
];

bot.on('ready', function() {
    console.log('ready!');
});

bot.on('message', function(message) {
    if(!message.content.startsWith(prefix)) return;
    //nach prefix content splitten
    var args = message.content.substring(prefix.length).split(" ");
    //eingabe klein machen
    switch(args[0].toLowerCase()){
        case 'don': 
            message.channel.sendMessage('Wau!');
            break;
        case 'info': 
            message.channel.sendMessage('Don Emilio Pablot Bot created by Trace!');
           break;
        case 'random': 
            if(args[1]){
                message.channel.sendMessage(randomAuswahl[Math.floor(Math.random()*randomAuswahl)]); 
            }else{
               message.channel.sendMessage('?'); 
            }
           break;
        default: 
            message.channel.sendMessage('Ungültiges Kommando');
    }
});
// nicht verändern!
bot.login(process.env.BOT_TOKEN);
