const Command = require('../../Classes/Command')
const {MessageEmbed} = require('discord.js')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: 'Shows the detail about all the commands or a mentioned command!',
            category: 'Utilities',
            usage: '[command]'
        });
    }

    async run(message, [command]) {

        const embed = new MessageEmbed()
            .setAuthor(`Help`)

        if(command){
            const cmd = this.client.commands.get(command) || this.client.commands.get(this.client.aliases.get(command))

            if (!cmd) return message.channel.send(`Invalid Command named. \`${command}\``)

            embed.setAuthor(`${cmd.name} Command Help`, this.client.user.displayAvatarURL())
            embed.setDescription([
                `**Aliases     :** ${cmd.aliases.length ? cmd.aliases.map(alias => `\`${alias}\``).join(' ') : 'No Aliases'}`
                `**Description :** ${cmd.description}`,
                `**Category    :** ${cmd.category}`,
                `**Usage       :** ${this.client.prefix}${cmd.usage}`
            ]);
        } else {
            embed.setDescription([
                `Bot Prefix is: ${this.client.prefix}`,
                `**Command Parameters: \`<>\` is compulsory & \`[]\` is optional**`,
                `Available commands : `,
            ]);
            let categories = this.client.func.removeDuplicates(this.client.commands.map(cmd => cmd.category));

            for (const category of categories) {
                embed.addField(`**${this.client.func.capitalise(category)}**`, this.client.commands.filter(cmd =>
                    cmd.category === category).map(cmd => `\`${cmd.name}\``).join(' '));
            }
        }
        return message.channel.send(embed);
    }

}
