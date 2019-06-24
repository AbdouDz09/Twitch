const Discord = require('discord.js')//Toxic Codes // n3k4a is one
const client = new Discord.Client();//Toxic Codes // n3k4a is one
client.on('ready', function(){//Toxic Codes // n3k4a is one
 console.log(`Logged in as ${client.user.tag}!`); //Toxic Codes // n3k4a is one
   
   // var s = ['483063515981283354','483063446376677386','483063378726879232','483063354332545045','483063463179190293']; // صور اضافيه
   var s = ['483055660209012736','480169573530861578','483055655800930315'];  // صور  الي بتشغل
    setInterval(function (){//Toxic Codes // n3k4a is one  
    client.user.setPresence({//Toxic Codes // n3k4a is one
 game: { //Toxic Codes // n3k4a is one
    type: 1,//Toxic Codes // n3k4a is one
     url: 'https://www.twitch.tv/n3k4a',//Toxic Codes // n3k4a is one
    name: 'im try banned ',  // الكلام الي في التوتش//Toxic Codes // n3k4a is one
    application_id: '461468630773661699', // ايدي البوت او ايدي الحساب حقك //Toxic Codes // n3k4a is one
     assets: {//Toxic Codes // n3k4a is one
         large_image:   `${s[Math.floor(Math.random() * s.length)]}`,//Toxic Codes // n3k4a is one
 
    }//Toxic Codes // n3k4a is one
  }//Toxic Codes // n3k4a is one
    });//Toxic Codes // n3k4a is one
    }, 5000);//سرعه تغير الصور  // n3k4a is one
});//Toxic Codes // n3k4a is one
client.login(process.env.BOT_TOKEN);
