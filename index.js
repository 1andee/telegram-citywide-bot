const Telegraf = require('telegraf');
const { reply } = Telegraf
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.hears('wow', (ctx) => {
  console.log(ctx.message);
  ctx.telegram.deleteMessage(ctx.message.chat.id, ctx.message.message.id)
  .catch((err) => {
    console.log('Ooops', err);
  });
});

module.exports = bot;
