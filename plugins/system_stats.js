/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.


Cyber Bot
Developer - Aqua Snake
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const Axios = require('axios');
const fs = require('fs');
let LOL = Config.WORKTYPE == 'public' ? false : true



const Language = require('../language');
const Lang = Language.getString('system_stats');

var SYSDTXT = ''
if (Config.LANG == 'SI') SYSDTXT = '💻 System status'
if (Config.LANG == 'EN') SYSDTXT = '💻 System status'

var VER = ''
if (Config.LANG == 'SI') VER = '🧬 Version'
if (Config.LANG == 'EN') VER = '🧬 Version'

var MSG = ''
if (Config.ALIVEMSG == 'default') MSG = '╔══════ *CYBER BOT* ══════╗\n\n*Developer:* ```Aqua Snake```\n\n*BOT ONLINE*\n\n_Type .menu For Command list_\n\n_Type .help For get help_\n\n\n```Thank You For Using Cyber Bot```\n'
else MSG = Config.ALIVEMSG




    Asena.addCommand({pattern: 'alive', fromMe: LOL, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        var BUTTHANDLE = '';
    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
        BUTTHANDLE = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
    } else {
        BUTTHANDLE = '.';
    }
        
    const buttons = [
        {buttonId: BUTTHANDLE + 'qaversion', buttonText: {displayText: VER }, type: 1},
        {buttonId: BUTTHANDLE + 'qasysstats', buttonText: {displayText: SYSDTXT }, type: 1}
    ]
    const buttonMessage = {
        contentText: MSG,
        footerText: 'ᴄʏʙᴇʀ ʙᴏᴛ © ɢʟᴏʙᴀʟ ᴇᴅɪᴛɪᴏɴ',
        buttons: buttons,
        headerType: 1,
            
    }
    await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage);
}))

Asena.addCommand({pattern: 'qasysstats', fromMe: LOL, desc: Lang.SYSD_DESC, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
    
    const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
    await message.sendMessage(
        '```' + child + '```', MessageType.text, {quoted: message.data}
    );
}));

Asena.addCommand({pattern: 'qaversion', fromMe: LOL, desc: Lang.BOT_V, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
    await message.client.sendMessage(message.jid, 
        `*Cyber Bot Version*\n\n` + 
        '```Installed version :```\n'+Config.VERSION+`\n\nCheck official website`
   , MessageType.text, {quoted: message.data});
    
}));
