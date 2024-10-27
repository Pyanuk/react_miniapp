const { Telegraf } = require('telegraf')
const TOKEN = '8190821292:AAHcRaNwcys0Es0go4pe2lBoh_-IlK-VlP0'
const bot = new Telegraf(TOKEN)

const web_link = "https://pyanukstore.netlify.app/"

bot.start((ctx) => ctx.reply('Привет, это приложение для покупки электронной техники. Я только начал его разрабатывать!!',
    {reply_markup: {keyboard: [[{text:"Открыть мини-приложение", web_app: {url: web_link}}]]}}
))
bot.launch()