const Discord = require('discord.js')//Toxic Codes // n3k4a is one
const client = new Discord.Client();//Toxic Codes // n3k4a is one
client.on('ready', function(){//Toxic Codes // n3k4a is one
 console.log(`Logged in as ${client.user.tag}!`); //Toxic Codes // n3k4a is one
    
   var large = ['483063515981283354','483063446376677386','483063378726879232','483063354332545045','483063463179190293']; // صور الكبيرة
 var small = ['483055660209012736','480169573530861578','483055655800930315'];  // صور الصغيرة
    setInterval(function (){  
    client.user.setPresence({
  status: 'dnd', 
 game: { 
    type: 1,
    name: ' Dream !! ',
     url: 'https://www.twitch.tv/abdoufersaoui_dz',
     state: `Code invite : DVt7BKD `,
    application_id: '461468630773661699',  
     assets: {
        small_text: ' Abdou 100% Dz ' ,
        large_text: `Dream Server !! :)` },
    large_image:  `${large[Math.floor(Math.random() * large.length)]}`,
    small_image:   `${small[Math.floor(Math.random() * small.length)]}`,
    }
  
    });
    }, 5000);
});
	
	
client.login(process.env.BOT_TOKEN);
