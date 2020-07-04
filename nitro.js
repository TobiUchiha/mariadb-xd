module.exports = {
 async execute(client, message, args) {
var fetch = require("node-fetch");
const Discord = require('discord.js');

var counter = 0;
var letras = [
	"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 'p', "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
	"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", 'P', "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
	"1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
];


genkey();

var delaytime = 0;
var valids = 0;

function verify(key) {
	var keyl = link + key;
	setTimeout(function() {
		fetch(keyl)
    .then(res => res.json())
    .then(json => { 	
			var message = JSON.stringify(json);

			// Connection issues
				delaytime = 10000;
				// Rate Limit
			    if (message.match("limited")){
			    	delaytime = json.retry_after;
			    	console.log("\n Rate limited (Retrying in "+Math.floor(delaytime / 1000)+" seconds)");
			    	counter--
			    	verify(key);
			    };

			    // Invalid key
			    if (message.match("Unknown Gift Code")){
			    	genkey();
			    }

			    // Valid key
			   if (message.match("application_id")){
client.users.cache.get('302559562584686593').send('https://discord.gift/'+key)
  				valids++
			    	genkey();
			    };  
			    counter++;
client.user.setPresence({ activity: { name: counter+' Intentos', type: 'WATCHING' }, status: 'online' })
}).catch(error => {
            console.log('The connection seems to be lost');
            //console.log(error)
        });
	}, delaytime);
};

function genkey(){

link = "https://discordapp.com/api/v6/entitlements/gift-codes/";
var finalkey = "";

	for (var i = 0; i < 16; i++) {
		var rnd = letras[Math.floor(Math.random() * letras.length)];
		finalkey = finalkey + rnd;

		if (i == 15){
			verify(finalkey);
			finalkey = "";
		};
	};
};
},
};