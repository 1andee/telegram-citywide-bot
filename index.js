const Telegraf = require('telegraf');
const { reply } = Telegraf
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.hears('wow', (ctx) => ctx.reply('wow detected'));
bot.hears('Wow', (ctx) => ctx.reply('Sentence case Wow detected'));

module.exports = bot;
