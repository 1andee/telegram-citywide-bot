const Telegraf = require('telegraf');
const { reply } = Telegraf
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.hears(/\bwow\b/i, (ctx) => {
  console.log(`############\nMESSAGE RECEIVED:\n`);
  console.log(JSON.stringify(ctx.message));
  if (!admin(ctx.message.from.username)) {
    console.log(`############\nDELETING MESSAGE:\n`);
    console.log(JSON.stringify(ctx.message));
    ctx.telegram.deleteMessage(ctx.message.chat.id, ctx.message.message_id)
    .catch((err) => {
      console.log('Something blew up:', err);
    });
  };
});

bot.hears(/^acknowledged$/i, (ctx) => {
  console.log(`############\nMESSAGE RECEIVED:\n`);
  console.log(JSON.stringify(ctx.message));
  if (!admin(ctx.message.from.username)) {
    console.log(`############\nDELETING MESSAGE:\n`);
    console.log(JSON.stringify(ctx.message));
    ctx.telegram.deleteMessage(ctx.message.chat.id, ctx.message.message_id)
    .catch((err) => {
      console.log('Something blew up:', err);
    });
  };
});

admin = (user) => {
  if (user === "ianduke" ||
      user === "johnhanleyphoto") {
    return true;
  } else {
    return false;
  };
};

module.exports = bot;
