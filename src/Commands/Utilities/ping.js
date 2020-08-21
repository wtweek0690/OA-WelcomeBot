const Command = require('../../Classes/Command')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: 'Ping the bot to discord!',
            category: 'Utilities',
        });
    }

    async run(message, args) {
        const m = await message.channel.send("Wait a sec...");
        return m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(this.client.ws.ping)}ms`);
    }

}
