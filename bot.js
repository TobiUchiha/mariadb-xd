const Discord = require('discord.js');
const client = new Discord.Client()
const token = 'NjcxNzQwNDQxMzUxNDIxOTk0.XwAK2A.HXh_2J67wX5_ZH1yOrEryQOwcZc'

client.function = new Discord.Collection();

let props = require(`./nitro.js`);
client.function.set('nitroGen', props);


client.on('ready', async() => {
client.function.get('nitroGen').execute(client);
 
    console.log(`Iniciado como ${client.user.tag} :D`)
})

client.login(token)
