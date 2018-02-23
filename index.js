const Telegraf = require('telegraf');
const { reply } = Telegraf
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.hears('wow', (ctx) => {
  ctx.telegram.deleteMessage(ctx.message.chat.id, ctx.message.message.id)
});

module.exports = bot;
