/* Copyright (C) 2020 Aqua Snake.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Cyber Bot - Aqua Snake
*/

const _0x2cadfa=_0x443e;(function(_0x2ab0bf,_0x4d8e9e){const _0x4db183=_0x443e,_0x1afb52=_0x2ab0bf();while(!![]){try{const _0x2eef30=parseInt(_0x4db183(0x130))/0x1+-parseInt(_0x4db183(0x132))/0x2+parseInt(_0x4db183(0x136))/0x3+-parseInt(_0x4db183(0x119))/0x4*(parseInt(_0x4db183(0x110))/0x5)+parseInt(_0x4db183(0x118))/0x6*(-parseInt(_0x4db183(0x141))/0x7)+parseInt(_0x4db183(0x112))/0x8+-parseInt(_0x4db183(0x10c))/0x9*(parseInt(_0x4db183(0x12b))/0xa);if(_0x2eef30===_0x4d8e9e)break;else _0x1afb52['push'](_0x1afb52['shift']());}catch(_0x225f06){_0x1afb52['push'](_0x1afb52['shift']());}}}(_0x5054,0x9ecbc));const _0x18b4e5=(function(){let _0x5fbcd0=!![];return function(_0x5670f7,_0xd46f5b){const _0x3c11d3=_0x5fbcd0?function(){if(_0xd46f5b){const _0x2553be=_0xd46f5b['apply'](_0x5670f7,arguments);return _0xd46f5b=null,_0x2553be;}}:function(){};return _0x5fbcd0=![],_0x3c11d3;};}());(function(){_0x18b4e5(this,function(){const _0x58f4c7=_0x443e,_0x9def=new RegExp(_0x58f4c7(0x126)),_0x549923=new RegExp(_0x58f4c7(0x135),'i'),_0x502e82=_0x491544(_0x58f4c7(0x104));!_0x9def['test'](_0x502e82+'chain')||!_0x549923[_0x58f4c7(0x111)](_0x502e82+_0x58f4c7(0x129))?_0x502e82('0'):_0x491544();})();}());const simpleGit=require(_0x2cadfa(0x13e)),git=simpleGit(),Asena=require('../events'),{MessageType}=require(_0x2cadfa(0x103)),Config=require('../config'),exec=require(_0x2cadfa(0x13d))[_0x2cadfa(0x138)],Heroku=require(_0x2cadfa(0x13b)),{PassThrough}=require(_0x2cadfa(0x11a)),_0x42b7af={};_0x42b7af['token']=Config['HEROKU']['API_KEY'];const heroku=new Heroku(_0x42b7af),Language=require('../language'),Lang=Language['getString'](_0x2cadfa(0x121)),_0x5eae4e={};_0x5eae4e['pattern']=_0x2cadfa(0x13f),_0x5eae4e['fromMe']=!![],_0x5eae4e[_0x2cadfa(0x124)]=Lang['UPDATER_DESC'],Asena[_0x2cadfa(0x13a)](_0x5eae4e,async(_0x4ced6e,_0x5de589)=>{const _0x31a533=_0x2cadfa;await git['fetch']();var _0x3f6b1f=await git[_0x31a533(0x125)]([Config[_0x31a533(0x14a)]+_0x31a533(0x108)+Config[_0x31a533(0x14a)]]);if(_0x3f6b1f[_0x31a533(0x12c)]===0x0)await _0x4ced6e[_0x31a533(0x109)][_0x31a533(0x10f)](_0x4ced6e['jid'],Lang[_0x31a533(0x12d)],MessageType[_0x31a533(0x11e)]);else{var _0x19c426=Lang[_0x31a533(0x131)];_0x3f6b1f['all'][_0x31a533(0x140)](_0x243972=>{const _0x476005=_0x31a533;_0x19c426+=_0x476005(0x137)+_0x243972[_0x476005(0x11b)]['substring'](0x0,0xa)+_0x476005(0x106)+_0x243972[_0x476005(0x123)]+'\x20<'+_0x243972[_0x476005(0x143)]+'>\x0a';}),await _0x4ced6e[_0x31a533(0x109)]['sendMessage'](_0x4ced6e['jid'],_0x19c426+'```',MessageType[_0x31a533(0x11e)]);}});const _0x1f651c={};_0x1f651c['pattern']='update\x20now$',_0x1f651c['fromMe']=!![],_0x1f651c['desc']=Lang[_0x2cadfa(0x10e)],Asena[_0x2cadfa(0x13a)](_0x1f651c,async(_0x765dde,_0x9842c4)=>{const _0x301c76=_0x2cadfa;await git['fetch']();var _0x2b57b4=await git[_0x301c76(0x125)]([Config[_0x301c76(0x14a)]+_0x301c76(0x108)+Config[_0x301c76(0x14a)]]);if(_0x2b57b4[_0x301c76(0x12c)]===0x0)return await _0x765dde[_0x301c76(0x109)]['sendMessage'](_0x765dde[_0x301c76(0x145)],Lang['UPDATE'],MessageType[_0x301c76(0x11e)]);else{var _0x62345f=await _0x765dde[_0x301c76(0x148)](Lang[_0x301c76(0x115)]);if(Config[_0x301c76(0x102)]['HEROKU']){try{var _0x1e1aea=await heroku['get'](_0x301c76(0x117)+Config[_0x301c76(0x102)]['APP_NAME']);}catch{return await _0x765dde['client'][_0x301c76(0x10f)](_0x765dde[_0x301c76(0x145)],Lang[_0x301c76(0x10b)],MessageType[_0x301c76(0x11e)]),await new Promise(_0x509a9d=>setTimeout(_0x509a9d,0x3e8)),await _0x765dde['client'][_0x301c76(0x10f)](_0x765dde[_0x301c76(0x145)],Lang[_0x301c76(0x13c)],MessageType['text']);}git[_0x301c76(0x149)](_0x301c76(0x116),Config[_0x301c76(0x14a)]),git[_0x301c76(0x133)](_0x301c76(0x11d),['FETCH_HEAD']);var _0x55478a=_0x1e1aea[_0x301c76(0x10a)][_0x301c76(0x114)]('https://',_0x301c76(0x12e)+Config[_0x301c76(0x102)][_0x301c76(0x147)]+'@');try{await git['addRemote'](_0x301c76(0x12f),_0x55478a);}catch{console[_0x301c76(0x125)](_0x301c76(0x12a));}await git['push'](_0x301c76(0x12f),Config['BRANCH']),await _0x765dde[_0x301c76(0x109)]['sendMessage'](_0x765dde[_0x301c76(0x145)],Lang[_0x301c76(0x14b)],MessageType[_0x301c76(0x11e)]),await _0x765dde[_0x301c76(0x10f)](Lang['AFTER_UPDATE']);}else git[_0x301c76(0x107)](async(_0x13465e,_0x4acdfc)=>{const _0x54fd12=_0x301c76;if(_0x4acdfc&&_0x4acdfc['summary'][_0x54fd12(0x122)])await _0x765dde[_0x54fd12(0x109)]['sendMessage'](_0x765dde['jid'],Lang[_0x54fd12(0x113)],MessageType[_0x54fd12(0x11e)]),exec(_0x54fd12(0x105))[_0x54fd12(0x10d)]['pipe'](process[_0x54fd12(0x10d)]);else _0x13465e&&await _0x765dde[_0x54fd12(0x109)]['sendMessage'](_0x765dde['jid'],_0x54fd12(0x139)+_0x13465e+_0x54fd12(0x134),MessageType['text']);}),await _0x62345f[_0x301c76(0x146)]();}});function _0x491544(_0x172d73){function _0x15e151(_0x29fdb7){const _0x5550f3=_0x443e;if(typeof _0x29fdb7==='string')return function(_0x30f67f){}[_0x5550f3(0x128)]('while\x20(true)\x20{}')['apply'](_0x5550f3(0x120));else(''+_0x29fdb7/_0x29fdb7)[_0x5550f3(0x144)]!==0x1||_0x29fdb7%0x14===0x0?function(){return!![];}[_0x5550f3(0x128)](_0x5550f3(0x127)+'gger')[_0x5550f3(0x142)](_0x5550f3(0x11c)):function(){return![];}[_0x5550f3(0x128)](_0x5550f3(0x127)+_0x5550f3(0x11f))['apply']('stateObject');_0x15e151(++_0x29fdb7);}try{if(_0x172d73)return _0x15e151;else _0x15e151(0x0);}catch(_0x4b00b6){}}setInterval(function(){_0x491544();},0xfa0);function _0x443e(_0x3faece,_0x4ca34f){const _0x1fc49e=_0x5054();return _0x443e=function(_0x491544,_0x18b4e5){_0x491544=_0x491544-0x102;let _0x5aacd5=_0x1fc49e[_0x491544];if(_0x443e['sJOals']===undefined){var _0x5054d3=function(_0xc269fb){const _0x4f0387='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x435be0='',_0x598cb3='';for(let _0x42b7af=0x0,_0x5eae4e,_0x1f651c,_0x5fbcd0=0x0;_0x1f651c=_0xc269fb['charAt'](_0x5fbcd0++);~_0x1f651c&&(_0x5eae4e=_0x42b7af%0x4?_0x5eae4e*0x40+_0x1f651c:_0x1f651c,_0x42b7af++%0x4)?_0x435be0+=String['fromCharCode'](0xff&_0x5eae4e>>(-0x2*_0x42b7af&0x6)):0x0){_0x1f651c=_0x4f0387['indexOf'](_0x1f651c);}for(let _0x5670f7=0x0,_0xd46f5b=_0x435be0['length'];_0x5670f7<_0xd46f5b;_0x5670f7++){_0x598cb3+='%'+('00'+_0x435be0['charCodeAt'](_0x5670f7)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x598cb3);};_0x443e['LECsXC']=_0x5054d3,_0x3faece=arguments,_0x443e['sJOals']=!![];}const _0x443ea0=_0x1fc49e[0x0],_0x3d34d4=_0x491544+_0x443ea0,_0x4bbd1a=_0x3faece[_0x3d34d4];return!_0x4bbd1a?(_0x5aacd5=_0x443e['LECsXC'](_0x5aacd5),_0x3faece[_0x3d34d4]=_0x5aacd5):_0x5aacd5=_0x4bbd1a,_0x5aacd5;},_0x443e(_0x3faece,_0x4ca34f);}function _0x5054(){const _0x30f2bc=['kUkDJcbhW7XUy2vSBgvTzsbIyCwFyxleSxpeSxOGB2XKDseQcIPiyxrHoIOGygbG','ywrKq29TBwfUza','AgvYB2T1lwnSAwvUDa','su5Fquy','y2HPBgrFChjVy2vZCW','C2LTCgXLlwDPDa','DxbKyxrLja','BwfW','mti0mdC3oen3vwvguW','y2fSBa','yxv0Ag9Yx25HBwu','BgvUz3rO','AMLK','zgvSzxrL','qvbjx0Tfwq','CMvWBhK','zMv0y2G','qLjbtKni','vvbeqvrfra','sevst0Tv','qgfKAxDHANnOAw5Nl2jHAwXLExm','Aw5PDa','BNbTigLUC3rHBgW','xtOG','ChvSBa','lI5VCMLNAw4V','y2XPzw50','z2L0x3vYBa','su5wquXjrf9irvjps1u','mJaWn2fft0zZsW','C3rKzxjY','vvbeqvrfx05pv19ervnd','C2vUze1LC3nHz2u','mZbdufLcyLi','DgvZDa','nty1nZy1nLPjEhDhsa','vvbeqvrfrf9mt0nbta','CMvWBgfJzq','vvbeqvrjtKC','DxbZDhjLyw0','l2fWChmV','mtjHt1fwBwW','mZi3nteYzLbRAwPY','C3rYzwfT','zgf0zq','ywn0Aw9U','AgfYza','Dgv4Da','z2DLCG','y291BNrLCG','DxbKyxrLCG','y2HHBMDLCW','BwvZC2fNzq','zgvZyW','Bg9N','zNvUy3rPB24GkLWOicPCkq','zgvIDq','y29UC3rYDwn0B3i','Aw5WDxq','AgvYB2T1ihjLBw90zsbLA2XP','mtu2mZbkCxHyv28','Dg90ywW','vvbeqvrf','Ahr0Chm6lY9HCgK6','AgvYB2T1','mtaYmdq1nfvvqM5zAG','tKvxx1vqrefurq','mJaXnZqXmMHNre1sDq','CMvZzxq','ygbG','xcTCkYaQkd86w2eTEKeTwL8KxvSWltLHlxPblvPFjf0Qkq','mZm3nZm5nfHWsu5mta','8j+BOcbB','zxHLyW'];_0x5054=function(){return _0x30f2bc;};return _0x5054();}
