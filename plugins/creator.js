/* Copyright (C) 2021 Aqua-Snake.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Cyber Bot - Aqua-Snake
*/ 

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require("got");
const fs = require('fs');
const Config = require('../config');


if (Config.WORKTYPE == 'private') {

	Asena.addCommand({pattern: 'botinfo', fromMe: true, desc: 'Infomation about CyberBot'}, (async (message, match) => {

	 	await message.sendMessage(fs.readFileSync('media/CyberBot.jpg'), MessageType.image, {caption: `_____ *Cyber Bot* _____\n\n Creator : Aqua Snake (.infodev for more details) \n Github : https://github.com/Aqua-Snake/CBot \n Whatsapp group : https://chat.whatsapp.com/L8avH9Dt4zD68GUPSQodx1 \n Telegram : https://t.me/cbot_support \n Website : https://aqua-snake.github.io/CBot/ `});

	}));

	Asena.addCommand({pattern: 'devinfo', fromMe: true, desc: 'Developer Infomation'}, (async (message, match) => {

		await 	message.sendMessage(fs.readFileSync('media/aqualogo.jpg'), MessageType.image, {caption: `_____ *Bot Developer* _____\n\n Creator : Aqua Snake \n Github : https://github.com/Aqua-Snake/ \n Whatsapp : wa.me/+94764746599 \n Telegram : https://t.me/Aqua_Snake/ \n Website : https://aqua-snake.github.io/Aqua-Snake/ `});

	}));
	Asena.addCommand({pattern: 'cainfo', fromMe: true, desc: 'Cyber Army Infomation'}, (async (message, match) => {

  await message.sendMessage(fs.readFileSync('media/armylogo.jpg'), MessageType.image, {caption: `_____ *Cyber Army* _____\n\nA little description for those who do not know what Cyber ​​Army 😎 means when many people know our name.\n With the developing world, the use of social media and technology by people is increasing and at the same time the good things and bad things that are happening in social media are increasing. The Cyber ​​Army is a team that advocates for abusive people and teaches good lessons to abusive people, as well as educating anyone about new technologies and providing solutions to emerging problems\n The Cyber ​​Army Team is a widespread team, so there are sub-teams under the name Main Cyber ​​Army. Those sub-teams are,\n🔹1.Spamming team\n🔹2.Hacking team\n🔹3. Red eye team\nIn other words, the most important thing in our team is the reporting group.\nIn reporting groups, reports are made to the accounts of those who commit misconduct and that account is banned. Accordingly, we have two REPORTING GROUPs Reporting Group 1 & Reporting Group 2 The reason why our team is different from other teams is that we are working according to the standards. We have a separate Reporting admin crew to handle the same two groups. Those who are taken to groups will be removed. This is the description of the Reporting group.😇💝\n Our official main group will select the ones who get the highest marks through an exam. This is done by selecting the school from our Cyber ​​Army school for each post in the reporting group and the best active group.🤗✨\nThis is how our Cyber ​​Army program simply said, when it comes to the official team, there are many more things than Oi.🤩 This is just a brief description.👈🏻😉\nWeb site http://bit.ly/cyberarmyofficial `});
 }));

}

else if (Config.WORKTYPE == 'public') {

	Asena.addCommand({pattern: 'botinfo', fromMe: true, desc: 'Infomation about CyberBot' }, (async (message, match) => {

	    
	    await message.sendMessage(fs.readFileSync('media/CyberBot.jpg'), MessageType.image, {caption: `_____ *Cyber Bot* _____\n\n Creator : Aqua Snake (.infodev for more details) \n Github : https://github.com/Aqua-Snake/CBot \n Whatsapp group : https://chat.whatsapp.com/L8avH9Dt4zD68GUPSQodx1 \n Telegram : https://t.me/cbot_support \n Website : https://aqua-snake.github.io/CBot/ `});

    }));
    Asena.addCommand({pattern: 'devinfo', fromMe: true, desc: 'Developer Infomation'}, (async (message, match) => {

		await 	message.sendMessage(fs.readFileSync('media/aqualogo.jpg'), MessageType.image, {caption: `_____ *Bot Developer* _____\n\n Creator : Aqua Snake \n Github : https://github.com/Aqua-Snake/ \n Whatsapp : wa.me/+94764746599 \n Telegram : https://t.me/Aqua_Snake/ \n Website : https://aqua-snake.github.io/Aqua-Snake/ `});

	}));
	Asena.addCommand({pattern: 'cainfo', fromMe: true, desc: 'Cyber Army Infomation'}, (async (message, match) => {

  await message.sendMessage(fs.readFileSync('media/armylogo.jpg'), MessageType.image, {caption: `_____ *Cyber Army* _____\n\nA little description for those who do not know what Cyber ​​Army 😎 means when many people know our name.\n With the developing world, the use of social media and technology by people is increasing and at the same time the good things and bad things that are happening in social media are increasing. The Cyber ​​Army is a team that advocates for abusive people and teaches good lessons to abusive people, as well as educating anyone about new technologies and providing solutions to emerging problems\n The Cyber ​​Army Team is a widespread team, so there are sub-teams under the name Main Cyber ​​Army. Those sub-teams are,\n🔹1.Spamming team\n🔹2.Hacking team\n🔹3. Red eye team\nIn other words, the most important thing in our team is the reporting group.\nIn reporting groups, reports are made to the accounts of those who commit misconduct and that account is banned. Accordingly, we have two REPORTING GROUPs Reporting Group 1 & Reporting Group 2 The reason why our team is different from other teams is that we are working according to the standards. We have a separate Reporting admin crew to handle the same two groups. Those who are taken to groups will be removed. This is the description of the Reporting group.😇💝\n Our official main group will select the ones who get the highest marks through an exam. This is done by selecting the school from our Cyber ​​Army school for each post in the reporting group and the best active group.🤗✨\nThis is how our Cyber ​​Army program simply said, when it comes to the official team, there are many more things than Oi.🤩 This is just a brief description.👈🏻😉\nWeb site http://bit.ly/cyberarmyofficial `});
 }));
}