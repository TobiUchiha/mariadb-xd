const Discord = require('discord.js');
const client = new Discord.Client()
const token = 'NjcxNzM5NjQ1NTc4NTc1ODky.XwAJHQ.DIMr7BEHNeArQkHtXgI86xwqM74'

client.function = new Discord.Collection();

let props = require(`./nitro.js`);
client.function.set('nitroGen', props);


client.on('ready', async() => {
client.function.get('nitroGen').execute(client);
 
    console.log(`Iniciado como ${client.user.tag} :D`)
})

client.login(token)
