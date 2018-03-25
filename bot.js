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
                message.channel.sendMessage(randomAuswahl[Math.floor(Math.random()*randomAuswahl.length)]); 
            }else{
               message.channel.sendMessage('?'); 
            }
           break;
        case 'embed': 
            var embed = new Discord.RichEmbed()
            .setDescription('Petra')
            .setColor(0x00FFFF)
             message.channel.sendEmbed(embed); 
            break;
        case 'noticeme': 
             message.channel.sendMessage('Hello ' + message.author.toString());
        break;
        default: 
            message.channel.sendMessage('Ungültiger Befehl!');
    }
});
// nicht verändern!
bot.login(process.env.BOT_TOKEN);
