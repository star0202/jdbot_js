var _a = require('discord.js'), Client = _a.Client, Intents = _a.Intents;
require('dotenv').config();
var token = process.env.TOKEN;
var client = new Client({ intents: new Intents(32767) });
client.once('ready', function () {
    console.log('Ready!');
    console.log(client.user.username);
});
client.login(token);
