var Discord = require("discord.io");
var logger = require("winston");
var auth = require("./auth.json");
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split('d');
        var cmd = args[0];
		var a = args[0];
		var d = args[1];
        args = args.splice(1);
        var result = [0];
		amount = a;
		dice = d;
		modifier = m;
		var sum =0;
		
		for(i = 0; i < amount; i++)
		{
			result[i] = Math.floor(Math.random() * dice - 0 + 1);
			
		}
		
		if(result.length >= 1)
		{
			
			for(i = 0; i < result.length; i++)
			{
				sum += result[i];
				
			}
			
		}
		
		var output = result.toString() + " = " + sum.toString();
			
		
		
		bot.sendMessage({
			to: channelID,
			message: output
		});
         
     }
});




