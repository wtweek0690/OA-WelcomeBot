const bot = require('./src/bot');
const config = require('./config.json');

const client = new bot(config);
client.start()
