const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

//client.on('message', message => {
  //  if (message.content === 'bing') {
   // 	message.reply('BONG!');
  	//}
//});
client.on('message', function(message) {
    if(!message.content.startsWith(prefix)) return;
    
    var args = message.content.substring(prefix.length).split(" ");
    
    switch(args[0]){
        case 'ping': 
            message.channel.sendMessage('Pong!');
            break;
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
