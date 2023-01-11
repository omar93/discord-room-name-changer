require('dotenv').config()
const { Client, EmbedBuilder, Events, GatewayIntentBits } = require('discord.js')

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

let token = process.env.CLIENT_TOKEN

client.once(Events.ClientReady, () => {
	console.log('Ready!')
})

client.on('voiceStateUpdate', (oldState, newState) => {
    if (!oldState.member.user.bot) {
        console.log("test");
    }

})
client.login(token)