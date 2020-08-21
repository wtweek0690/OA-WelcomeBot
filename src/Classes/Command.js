module.exports = class Command {

    constructor(client, name, options = {}) {
        this.client = client;
        this.name = options.name || name;
        this.aliases = options.aliases || [];
        this.description = options.description || 'No description provided.';
        this.category = options.category || 'Miscellaneous';
        this.usage = `${this.name} ${options.usage || ''}`;
    }

    async run(message, args) {
        throw new Error(`Command ${this.name} doesnt has a run method!`);
    }

};
