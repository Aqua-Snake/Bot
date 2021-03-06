/*Coded by Aqua-Snake*/
const Asena = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const Config = require('../config');
const got = require('got');
//LyFE


if (Config.WORKTYPE == 'private') {

Asena.addCommand({ pattern: 'movie ?(.*)', fromMe: true, desc: "Shows movie info." }, (async (message, match) => {
	if (match[1] === '') return await message.client.sendMessage(message.jid, '```Give me a name.```', MessageType.text, { quoted: message.data });
	let url = `http://www.omdbapi.com/?apikey=742b2d09&t=${match[1]}&plot=full`
	const response = await got(url);
	const json = JSON.parse(response.body);
	if (json.Response != 'True') return await message.client.sendMessage(message.jid, '*Not found.*', MessageType.text, { quoted: message.data });
	let msg = '```';
	    msg += 'π¬ Title      : ' + json.Title + '\n\n';
	    msg += 'π Year       : ' + json.Year + '\n\n';
	    msg += 'β­ Rated      : ' + json.Rated + '\n\n';
	    msg += 'π Released   : ' + json.Released + '\n\n';
	    msg += 'β³Runtime    : ' + json.Runtime + '\n\n';
	    msg += 'π Genre      : ' + json.Genre + '\n\n';
	    msg += 'π¨π»βπ» Director   : ' + json.Director + '\n\n';
	    msg += 'βπ» Writer     : ' + json.Writer + '\n\n';
	    msg += 'π¨π»βπ€ Actors     : ' + json.Actors + '\n\n';   
	    msg += 'πPlot       : ' + json.Plot + '\n\n';
	    msg += 'π Language   : ' + json.Language + '\n\n';
	    msg += 'π Country    : ' + json.Country + '\n\n';
	    msg += 'ποΈ Awards     : ' + json.Awards + '\n\n';
	    msg += 'π¦ BoxOffice  : ' + json.BoxOffice + '\n\n';
	    msg += 'ποΈ Production : ' + json.Production + '\n\n';
	    msg += 'π imdbRating : ' + json.imdbRating + '\n\n';
	    msg += 'β imdbVotes  : ' + json.imdbVotes + '```';
	await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
 }));

}

else if (Config.WORKTYPE == 'public') {
	Asena.addCommand({ pattern: 'movie ?(.*)', fromMe: false, desc: "Shows movie info." }, (async (message, match) => {
	if (match[1] === '') return await message.client.sendMessage(message.jid, '```Give me a name.```', MessageType.text, { quoted: message.data });
	let url = `http://www.omdbapi.com/?apikey=742b2d09&t=${match[1]}&plot=full`
	const response = await got(url);
	const json = JSON.parse(response.body);
	if (json.Response != 'True') return await message.client.sendMessage(message.jid, '*Not found.*', MessageType.text, { quoted: message.data });
	let msg = '```';
	    msg += 'π¬ Title      : ' + json.Title + '\n\n';
	    msg += 'π Year       : ' + json.Year + '\n\n';
	    msg += 'β­ Rated      : ' + json.Rated + '\n\n';
	    msg += 'π Released   : ' + json.Released + '\n\n';
	    msg += 'β³Runtime    : ' + json.Runtime + '\n\n';
	    msg += 'π Genre      : ' + json.Genre + '\n\n';
	    msg += 'π¨π»βπ» Director   : ' + json.Director + '\n\n';
	    msg += 'βπ» Writer     : ' + json.Writer + '\n\n';
	    msg += 'π¨π»βπ€ Actors     : ' + json.Actors + '\n\n';
	    msg += 'πPlot       : ' + json.Plot + '\n\n';
	    msg += 'π Language   : ' + json.Language + '\n\n';
	    msg += 'π Country    : ' + json.Country + '\n\n';
	    msg += 'ποΈ Awards     : ' + json.Awards + '\n\n';
	    msg += 'π¦ BoxOffice  : ' + json.BoxOffice + '\n\n';
	    msg += 'ποΈ Production : ' + json.Production + '\n\n';
	    msg += 'π imdbRating : ' + json.imdbRating + '\n\n';
	    msg += 'β imdbVotes  : ' + json.imdbVotes + '```';
	await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
 }));

}
