const Discord = require("discord.js");

const client = new Discord.Client();

client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag}!`);

});


const bot = require('discord.js-musicbot-addon');

bot.start(client, {
  youtubeKey: "AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8",
  musichelp : "-help",
 botPrefix : "-"
});


client.login("token");
