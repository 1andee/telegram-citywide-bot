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

bot.command('/reminder', (ctx) => {
  console.log('inside reminder');
  if (admin(ctx.message.from.username)) {
    console.log('admin recognized');
    ctx.telegram.reply("A reminder... CH-1 is only for confirmed incidents or significant updates. Please use CH-2 for any side chatter, pics, info about rehab units, etc. Many of us have notifications only active on CH-1, and we don’t all have normal schedules, so even a message in the middle of the day may be waking someone up. Any questions, just let John, Ian or Jeremy know.")
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
