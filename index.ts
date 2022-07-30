const { Client, Intents } = require('discord.js');
require('dotenv').config();
const token = process.env.TOKEN;
const client = new Client({intents: new Intents(32767)});
client.once('ready', () => {
	console.log('Ready!');
    console.log(client.user.username)
});
client.login(token);