const { Client, Collection, MessageEmbed } = require('discord.js')
const Functions = require('./Classes/Functions')

module.exports = class bot extends Client {

    constructor(config = {}) {
        super({
            disableMentions: 'everyone'
        });
        this.validate(config)

        this.commands = new Collection()

        this.aliases = new Collection()

        this.events = new Collection()

        this.func = new Functions(this)

    }

    validate(config){
        if(!config.token) throw new Error(`Where did the token went to?`)
        this.token = config.token;
        // if(!config.prefix) throw new Error(`Uh you havent added a prefix yet`)
        // this.prefix = config.prefix;
    }

    async start(token = this.token){
        await this.func.loadCommands();
        await this.func.loadEvents();
        await super.login(token);
    }

}