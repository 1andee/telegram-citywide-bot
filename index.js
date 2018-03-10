const Telegraf = require('telegraf');
const { reply } = Telegraf
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.hears(/\bwow\b/i, (ctx) => {
  if (!admin(ctx.message.from.username)) {
    ctx.telegram.deleteMessage(ctx.message.chat.id, ctx.message.message_id)
    .catch((err) => {
      console.log('Something blew up:', err);
    });
  };
});

bot.hears(/^acknowledge/i, (ctx) => {
  if (!admin(ctx.message.from.username)) {
    ctx.telegram.deleteMessage(ctx.message.chat.id, ctx.message.message_id)
    .catch((err) => {
      console.log('Something blew up:', err);
    });
  };
});

admin = (user) => {
  if (user === "ianduke" ||
      user === "jeremycohn" ||
      user === "johnhanleyphoto") {
    return true;
  } else {
    return false;
  };
};

module.exports = bot;
