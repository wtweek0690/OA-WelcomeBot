const Event = require('../Classes/Event.js')
module.exports = class extends Event{

    run(){
        console.log(`Logged in as ${this.client.user.tag}`);

        console.table(this.client.commands);
        console.table(this.client.events);
    }

}