const Telegraf = require('telegraf');
const { reply } = Telegraf
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.hears(/\bwow\b/i, (ctx) => {
  ctx.telegram.deleteMessage(ctx.message.chat.id, ctx.message.message_id)
  .catch((err) => {
    console.log('Something blew up:', err);
  });
});

bot.hears(/^acknowledged$/i, (ctx) => {
  ctx.telegram.deleteMessage(ctx.message.chat.id, ctx.message.message_id)
  .catch((err) => {
    console.log('Something blew up:', err);
  });
});

module.exports = bot;
