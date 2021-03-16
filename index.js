/*<=====[CommandDetected]=====>*/
/*<=====[loadSyncError507]====>*/
/*<=====[FileSyncodeError]====>*/
/*<=====[GetCodeTaufik-Kun]===>*/
/*<=====[UserID[MiKako]✓]=====>*/
/*<=====[StartProject✓]=====>*/

const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./lib/help')
const { donasi } = require('./lib/donasi')
const { bahasa } = require('./lib/listbahasa')
const { biografi } = require ('./lib/biografi')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { virtex } = require('./src/virtex')
const { virtex2 } = require('./src/virtex2')
const { exec } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const imgbb = require('imgbb-uploader')
const kagApi = require('@kagchi/kag-api')
const lolis = require('lolis.life')
const loli = new lolis()
const doujinshi = require('nhentai-api')
const speed = require('performance-now')
const ms = require('parse-ms')
const toMs = require('ms')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./language')
const apivhtear = ''
const zeksapi = 'apivinz'
const ItsApi = 'itsmeiky633'
const BarBarKey = 'Xs8AoHAm0g9lFHCLzsEW'
const TobzKey = 'BotWeA'
const devcityapi = 'yourapikey'
const TechApi = 'B8r68c-6gwmq1-af4vtS-if1zgD-jni01B'
const vcard = 'BEGIN:VCARD\n'  // Jangan di ubah biar ga error
            + 'VERSION:3.0\n'  // Jangan di ubah biar ga error
            + 'FN:MiKako\n'  // Ganti jadi namamu
            + 'ORG: Pengembang Taufik-Kun;\n'  // Ganti jadi namamu/Botmu
            + 'TEL;type=CELL;type=VOICE;waid=6289675651966:+62 896-7565-1966\n'  // Ganti jadi nomormu, tapi jangan ubah polanya
            + 'END:VCARD' // jangan di ubah
prefix = '.'
blocked = []   
limitawal = '100' //terserah ganti/gk
cr = '*Dhlah Males✅*'
numer = '0'
ghoibsu = 'tes'
myteks = 'okeh nyala'

/******** OWNER NUMBER**********/
const ownerNumber = ["6289675651966@s.whatsapp.net","6285807479634@s.whatsapp.net"]  //ganti menjadi nomormu
/************************************/

       
/*********** LOAD FILE ***********/
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const ikan = JSON.parse(fs.readFileSync('./database/user/ikan.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const nomedia = JSON.parse(fs.readFileSync('./database/bot/bigfile.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const gambar = JSON.parse(fs.readFileSync('./storage/gambar.json'))
const suara = JSON.parse(fs.readFileSync('./storage/suara.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const antifirtex = JSON.parse(fs.readFileSync('./database/group/antifirtex.json'))
const bad = JSON.parse(fs.readFileSync('./database/group/bad.json'))
const ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/user/premium.json'))
const _afk = JSON.parse(fs.readFileSync('./database/group/afk.json'))
const badword = JSON.parse(fs.readFileSync('./database/group/badword.json'))
/*********** END LOAD ***********/

/********** FUNCTION ***************/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }
	
	//FUNCTION AFK
const addAfkUser = (userid, time, reason) => {
    const obj = { id: userid, time: time, reason: reason }
    	_afk.push(obj)
    	fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
	}

const checkAfkUser = (sender) => {
    let status = false
    Object.keys(_afk).forEach((i) => {
        if (_afk[i].id === sender) {
            status = i
        }
    })
    return status
}

const getAfkReason = (sender) => {
    let position = null
    Object.keys(_afk).forEach((i) => {
        if (_afk[i].id === sender) {
            position = i
        }
    })
    if (position !== null) {
        return _afk[position].reason
    }
}

const getAfkTime = (sender) => {
    let position = null
    Object.keys(_afk).forEach((i) => {
        if (_afk[i].id === sender) {
            position = i
        }
    })
    if (position !== null) {
        return _afk[position].time
    }
}

const getAfkId = (sender) => {
    let position = null
    Object.keys(_afk).forEach((i) => {
        if (_afk[i].id === sender) {
            position = i
        }
    })
    if (position !== null) {
        return _afk[position].id
    }
}

const getAfkPosition = (sender) => {
    let position = null
    Object.keys(_afk).forEach((i) => {
        if (_afk[i].id === sender) {
            position = i
        }
    })
    return position
}
	//END OF AFK FUNCTION
        
	//MANCING FUNCTION BY TAUFIK - KUN
        const addIkan = (sender, amount) => {
        let position = false
        Object.keys(ikan).forEach((i) => {
    	    if (ikan[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ikan[position].fish += amount
    	fs.writeFileSync('./database/user/ikan.json', JSON.stringify(ikan))
    	}
    }
    
    const getMancingIkan = (sender) => {
    let position = false 
    Object.keys(ikan).forEach((i) => {
	if (ikan[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ikan[position].fish
	}
}

    const getMancingId = (sender) => {
    let position = false
    Object.keys(ikan).forEach((i) => {
	if (ikan[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ikan[position].id
    }
}
    
    const addMancingId = (sender) => {
        const ovj = {id: sender, fish: 0}
        ikan.push(ovj)
        fs.writeFileSync('./database/user/ikan.json', JSON.stringify(ikan))
        }
    
    const jualIkan = (sender, amount) => {
        	let position = false
            Object.keys(ikan).forEach((i) => {
                if (ikan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ikan[position].fish -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF MANCING FUNCTION
        
        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
        
       
        const getLimit = (sender) => {
        	let position = false
              Object.keys(limit).forEach ((i) => {
              	if (limit[position].id === sender) {
              	   position = i
                  }
              })
             if (position !== false) {
                return limit[position].limit
            }
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const checkAgeUser = (sender) => {
    	    let position = false
    	    Object.keys(_registered).forEach((i) => {
    	    if (_registered[i].id === sender) {
    	    position = i
    	    }
    	})
    	    if (position !== false) {
    	    return _registered[position].age
    	    }
    	}
    	
    	const checkWhenRegisUser = (sender) => {
    	    let position = false
    	    Object.keys(_registered).forEach((i) => {
    	    if (_registered[i].id === sender) {
    	    position = i
    	    }
    	})
    	    if (position !== false) {
    	    return _registered[position].time
    	    }
    	}
    	
    	const brpLimit = (sender) => {
    	    let position = false
    	    Object.keys(_limit).forEach((i) => {
    	    if (_limit[i].id === sender) {
    	    position = i
    	    }
    	})
    	    if (position !== false) {
    		let lemot = limitawal - _limit[position].limit
    	    return lemot
    	    }
    	}
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
            const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
	    
	   //BUAT FUNCTIONNYA
	    const getPremiumExpired = (sender) => {
		    let position = null
		    Object.keys(prem).forEach((i) => {
		        if (prem[i].id === sender) {
		            position = i
		        }
		    })
		    if (position !== null) {
		        return prem[position].expired
		    }
		} 
		
		const expiredCheck = () => {
		    setInterval(() => {
		        let position = null
		        Object.keys(prem).forEach((i) => {
		            if (Date.now() >= prem[i].expired) {
		                position = i
		            }
		        })
		        if (position !== null) {
		            console.log(`Premium expired: ${prem[position].id}`)
		            prem.splice(position, 1)
		            fs.writeFileSync('./database/bot/prem.json', JSON.stringify(prem))
		        }
		    }, 1000)
		} 
		
		const getAllPremiumUser = () => {
		    const array = []
		    Object.keys(prem).forEach((i) => {
		        array.push(prem[i].id)
		    })
		    return array
		}


        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/********** FUNCTION ***************/

const client = new WAConnection()
   client.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(color('[','white'),color('∆','red'),color(']','white'),color('qr already scan.subscribe','white'),color('YOU','red'),color('TUBE','white'),color('Taufik - Kun','yellow'))
})

client.on('credentials-updated', () => {
	const authInfo = client.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
client.connect();


client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Hallo @${num.split('@')[0]}\Selamat datang di group *${mdata.subject}* yang betah ya di sini`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `akhirnya beban group berkurang 𝟭,bye bye🥳 @${num.split('@')[0]} jasamu akan di kubur dalam²`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
            		body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = client.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
	    const isNoMedia = nomedia.includes(from) || false
	    const isOwner = ownerNumber.includes(sender)
	    const isPrem = prem.includes(sender) || isOwner //tambahin ownerbiar owner bisa gunain fitur prem
	    const isBanned = ban.includes(sender)
	    const isAfkOn = checkAfkUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isBadWord = isGroup ? badword.includes(from) : false
                        const isAntiFirtex= isGroup ? antifirtex.includes(from) : false
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    	client.sendMessage(from, teks, image, {quoted:mek})
		    	}
		    	const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    	const sendPtt = (teks) => {
		    	client.sendMessage(from, audio, mp3, {quoted:mek})
		    	}
	        /*****************END SCURITY FEATURE **************************/
			
			
			
	        //function leveling
            if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
                }
            } catch (err) {
                console.error(err)
            }
        }
			
			//FUNCTION PREMIUM RESPONDER
			var premi = '*X*'
			if (isPrem) {
				premi = '*✓*'
			} 
			if (isOwner) {
				premi = '*owner*'
			}
        
        //FUCNTION MANCING BY TAUFIK - KUN
        if (isGroup && isEventon) {
        const Fisha = getMancingIkan(sender)
        const FishId = getMancingId(sender)
        if (Fisha === undefined && FishId === undefined) addMancingId(sender)
        }
	
	//AFK NGULI
	if (isGroup) {
            for (let ment of sender) {
                if (checkAfkUser(ment, _afk)) {
                    const getId = getAfkId(ment, _afk)
                    const getReason = getAfkReason(getId, _afk)
                    const getTime = getAfkTime(getId, _afk)
                    	client.sendMessage(from, ind.afkMentioned(getReason, getTime), text)
                }
            }
            if (checkAfkUser(sender.id) && !isCmd) {
                _afk.splice(getAfkPosition(sender.id, _afk), 1)
                fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
                	client.sendMessage(from, ind.afkDone(pushname), text)
            }
            
        }
        
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, text,{ quoted: mek})
                            client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 1 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }
     	
        
      
            //function balance
            if (isRegistered && isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
		//AUTO RESPONDER
		if (budy.includes('Bot')){
			const on =['Yoo👋','Hai, nani desuka? :)','What?','Bot on, ketik #menu untuk melihat menu Botol-LoL','apa Tod?']
			const Bot = on[Math.floor(Math.random() * on.length)]
			client.sendMessage(from, Bot, text, {quoted: mek})
		}

			

		//function antilink
		if (budy.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 10detik lagi`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 10000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 9000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 8000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 7000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 6000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 4000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 0)
	}
		//function antivirtext
                if (messagesC.includes('৭৭৭৭৭৭৭৭'|'๒๒๒๒๒๒๒๒'|'๑๑๑๑๑๑๑๑'|'ดุท้่เึางืผิดุท้่เึางื')){
		if (!isGroup) return
		if (!isAntiFirtex) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Firtex Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 10detik lagi. Mamposs lu ajg.`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 10000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 9000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 8000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 7000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 6000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 4000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
		}, 0)
	}
		//FUNCTION ANTIBADWORD
		if (bad.includes(budy)) {
		if (!isGroup) return
		if (!isBadWord) return
		if (isGroupAdmins) return reply(`*${pushname}* ᴀᴅᴀʟᴀʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ ᴋᴀᴍᴜ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ`)
		client.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*ʙᴇʙᴀɴ ʟᴇᴀᴠᴇ ᴛʜᴇ ɢʀᴏᴜᴘ....*`)
		}, 11000)
		setTimeout( () => {
		client.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10000)
		setTimeout( () => {
		reply(`*_「 ʙᴀᴅᴡᴏʀᴅ ᴅᴇᴛᴇᴄᴛᴇᴅ 」_*\nᴍᴀᴀғ *${pushname}* ᴀɴᴅᴀ ʙᴇʀʙɪᴄᴀʀᴀ ᴋᴏᴛᴏʀ!, ᴀɴᴅᴀ ꜱᴇɢᴇʀᴀ ᴅɪᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ *${groupMetadata.subject}*`)
		}, 0)
		}
			
			let authorname = client.contacts[from] != undefined ? client.contacts[from].vname || client.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'Botol LoL'; if (!author) author = 'Bot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
          
           		  //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			switch(command) {
				case 'bot':
				case 'Bot':
					if (isBanned) return reply(ind.ban())
					bot = body.slice(1)
					const on =['Yoo👋','Hai, nani desuka? :)','What?','Bot on, ketik #menu untuk melihat menu Botol-LoL','apa Tod?']
					const Bot = on[Math.floor(Math.random() * on.length)]
					client.sendMessage(from, Bot, text, { quoted: mek })
					await limitAdd(sender)
					break
					
					case 'giftlimit': 
				if (!isOwner,!isPrem) return reply(ind.premon(pushname))
				const nomerr = args[0].replace('@','')
                const jmla = args[1]
                if (jmla <= 1) return reply(`minimal gift limit adalah 1`)
                if (isNaN(jmla)) return reply(`limit harus berupa angka`)
                if (!nomerr) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @62895710074883 20`)
                const cysz = nomerr + '@s.whatsapp.net'
                var found = false
                        Object.keys(_limit).forEach((i) => {
                            if(_limit[i].id === cysz){
                                found = i
                            }
                        })
                        if (found !== false) {
                            _limit[found].limit -= jmla
                            const updated = _limit[found]
                            const result = `Gift kuota limit sukses dengan SN: ${createSerial(8)} pada ${moment().format('DD/MM/YY HH:mm:ss')}
*「 GIFT KUOTA LIMIT 」*
• User : @${updated.id.replace('@s.whatsapp.net','')}
• Limit: ${limitawal-updated.limit}`
                            console.log(_limit[found])
                            fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit));
                            reply(result)
                        } else {
                                reply(`Maaf, nomor ${nomerr} tidak terdaftar di database!`)
                        }
                break
					
					case 'jankenpom':
					if (isBanned) return reply(ind.ban())
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					const player = body.slice(11)
					const botc = ['batu','kertas','gunting'];
					//const p = player.includes('batu','kertas','gunting');  //BIKIN ERROR AJA LU ANJING
					if ( args.length < 1 ) return reply('Lu mau pilih apa?')
					bot = botc[Math.floor(Math.random() * botc.length)]
					var resu = '';
					if ( player == bot ) {
					resu = '*SERI*';
					} else if( player == 'kertas' ) {
					resu = ( bot == 'batu' ) ? 'Kamu MENANG!' : 'Kamu KALAH!';
					} else if( player == 'batu' ) {
					resu = ( bot == 'kertas' ) ? 'Kamu KALAH!' : 'Kamu MENANG!';
					} else if( player == 'gunting' ) {
					resu = ( bot == 'batu' ) ? 'Kamu KALAH!' : 'Kamu MENANG!';
					} else {
					resu = '🥱 Dhalah, Males main sama noob!' ;
					} 
					const suitxp = Math.ceil(Math.random() * 5000);
					addLevelingXp(sender, suitxp)
					teks = '*HASIL PERTANDINGAN*\n\n*Kamu Memilih :* ' + player + '\n*Dan _Botol LoL_ Memilih :* ' + bot + '\n\n*HASIL =* ' + resu + '\n\n Kamu mendapatkan *_EXP_* sebesar = ' + suitxp;
					client.sendMessage(from, teks, text, {quoted: mek})
					await limitAdd(sender)
					break
					
					case 'runtime':
					if (isBanned) return reply(ind.ban())
					me = client.user
					uptime = process.uptime()
					waktu = `*_BOT_* telah aktif selama : ${kyun(uptime)}`;
					client.sendMessage(from, waktu, text, {quoted: mek})
					break
					
					case 'gimeg':
					if (!isOwner) return reply(ind.ownerb())
					if (!isQuotedImage) return reply('Gambarnya mana ngen?')
					if (args.length < 1) return reply('Namaewa?')
					namanya = body.slice(7)
					simpan = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					filenya = await client.downloadMediaMessage(simpan)
					gambar.push(`${namanya}`)
					fs.writeFileSync(`./storage/image/${namanya}.jpeg`, filenya)
					fs.writeFileSync('./storage/gambar.json', JSON.stringify(gambar))
					client.sendMessage(from, 'Gambarnya udh di save gayn. Coba lu cek di tetmux', text, {quoted: mek})
					await limitAdd(sender)
					break
					
					case 'kirim':
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('yg mau di kirim gambar apa Tod? gambar hentai kh?')
					namaewa = body.slice(7)
					buffer = fs.readFileSync(`./storage/image/${namaewa}.jpeg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Njir ginian disimpen'})
					await limitAdd(sender)
					break
					
					case 'lisim':
					if (!isOwner) return reply(ind.ownerb())
					added = '=======================\n'
					teks = 'List Image Bot:\n\n'
					for (let awikwok of gambar) {
					teks += `|• ${awikwok}\n`
					}
					tot = `*Total Image:* ${gambar.length}\n`
					pesa = tot + added + teks + added
					client.sendMessage(from, pesa, text)
					await limitAdd(sender)
					break
					
					case 'gedio':
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('namaewa?')
					if (!isQuotedAudio) return reply('audionya mana ngen?')
					namaewa = body.slice(7)
					suaramu = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					nyolong = await client.downloadMediaMessage(suaramu)
					suara.push(`${namaewa}`)
					fs.writeFileSync(`./storage/audio/${namaewa}.mp3`, nyolong)
					fs.writeFileSync('./storage/suara.json', JSON.stringify(suara))
					client.sendMessage(from, 'audionya udh di simpen gayn. Coba lu cek di termux', text)
					break
					
					case 'kidio':
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('judulnya apa Tod? desahan kah?')
					namaewa = body.slice(7)
					buffer = fs.readFileSync(`./storage/audio/${namaewa}.mp3`)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
					break
					
					case 'lidio':
					if (!isOwner) return reply(ind.ownerb())
					added = '======================\n'
					teks = '*List Suara Bot:*\n\n'
					for (let dhlah of suara) {
					teks += `|• ${dhlah}\n`
					}
					totl = `*Total Suara Bot:* ${suara.length}\n`
					res = totl + added + teks + added
					client.sendMessage(from, res, text)
					break					
					
								
				case 'dompet':
				if (isBanned) return reply(ind.ban())
				if (!isRegistered) return reply(ind.noregis())
					const kantong = checkATMuser(sender)
					reply(ind.uangkau(pushname, sender, kantong))
					break
					
					case 'limit':
				if (isBanned) return reply(ind.ban())
				if (!isRegistered) return reply(ind.noregis())
				checkLimit(sender)
				break
					
				case 'buylimit':
				if (isBanned) return reply(ind.ban())
				if (!isRegistered) return reply(ind.noregis())
					payout = body.slice(10)
					const koinPerlimit = 1000
					const total = koinPerlimit * payout
					if ( checkATMuser(sender) <= total) return reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
					if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*pengirim* : Admin\n*penerima* : ${pushname}\n*nominal pembelian* : ${payout} \n *harga limit* : ${koinPerlimit}/limit\n *sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
				} 
				break
				
				case 'jualikan':
					if (isBanned) return reply(ind.ban())
					if (!isRegistered) return reply(ind.noregis())
					if (!isEventon) return reply('ya maap aja bro, tapi event grub belum di aktifkan')
					bayar = body.slice(10)
					const hargaIkan = 250
					const hasil = bayar * hargaIkan
					if ( getMancingIkan(sender) <= 1 ) return reply(`maaf ${pusname} kamu tidak punya ikan`)
					if ( getMancingIkan(sender) >= 1 ) {
						jualIkan(sender, bayar)
						addKoinUser(sender, hasil)
					await reply(`*「 PUNJUALAN BERHASIL 」*\n\n*Jumlah ikan dijual:* ${bayar}\n*Uang didapat:* ${hasil}\n\n*Sisa ikan:* ${getMancingIkan(sender)}\n*Sisa uang:* ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
					}
					break
						
				case 'resetlimit':
				if (!isOwner) return reply(ind.ownerb())
				var ngonsol = []
				rest = _limit.indexOf([0])
				_limit.splice(rest)
				fs.writeFileSync('./database/user/limit.json', JSON.stringify(ngonsol))
				reply(`LIMIT BERHASIL DI RESET BOS`)
				break
					
				case 'transfer':
				if (isBanned) return reply(ind.ban())
				if (!isRegistered) return reply(ind.noregis())
				if (!q.includes('|')) return  reply(ind.wrongf())
                			const tujuan = q.substring(0, q.indexOf('|') - 1)
                			const jumblah = q.substring(q.lastIndexOf('|') + 1)
                			if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                			if (jumblah < 100 ) return reply(`minimal transfer 100`)
                			if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                			const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
               				fee = 0.005 *  jumblah
                			hasiltf = jumblah - fee
                			addKoinUser(tujuantf, hasiltf)
                			confirmATM(sender, jumblah)
                			addKoinUser('62895710073737@s.whatsapp.net', fee)
                			reply(`*「 SUKSES 」*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : ${fee}`)
                			break
					
				case 'profile':
				if (isBanned) return reply(ind.ban())
				if (!isRegistered) return reply(ind.noregis())
    				client.updatePresence(from, Presence.composing)
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
    				try {
					profil = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					 profile = `╭─「 *_ᴘʀᴏғɪʟᴇ ᴀɴᴅᴀ_* 」\n|• *Nama:* ${pushname}\n|• *Umur :*${checkAgeUser(sender)}\n|• *User Terdaftar:* √\n|• *Terdaftar Sejak :* ${checkWhenRegisUser(sender)}\n|• *Link:* wa.me/${sender.split("@")[0]}\n|• *Uang :* ${checkATMuser(sender)}\n|• *Jumlah Limit :* ${brpLimit(sender)}\n|• *Exp :* ${getLevelingXp(sender)}\n|• *Level :* ${getLevelingLevel(sender)}\n╰──────────────────`
					ngebuff = await getBuffer(profil)
					client.sendMessage(from, ngebuff, image, {quoted: mek, caption: profile})
					break
					
					//MAKER MENU
					case 'silktext':
					if (isBanned) return reply(ind.ban())
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))				
					if (args.length < 1) return reply(ind.wrongf())
					silk = body.slice(10)
					slik1 = silk.split("/")[0];
					slik2 = silk.split("/")[1];
					if (silk.length > 7) return reply('Teksnya kepanjangan Tod, maksimal 6 karakter')
					buffer = await getBuffer(`https://videfikri.com/api/textmaker/silk/?text1=${slik1}&text2=${slik2}`, {method: 'get'})
					reply(ind.wait())
		    			client.sendMessage(from, buffer, image, {quoted: mek})
		    			await limitAdd(sender)	
		    			break
		    			
		    			case 'textsky':
					if (isBanned) return reply(ind.ban())
		    			if (!isRegistered) return reply(ind.noregis())
		    			if (isLimit(sender)) return reply(ind.limitend(pusname))
		    			sky = body.slice(9)
		    			res = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev3?text=${sky}&theme=textsky&apikey=${devcityapi}`)
		    			reply('Wait Ganz, gw ngedit dumlu')
		    			sult = await getBuffer(res.result.url)
		    			client.sendMessage(from, sult, image, {quoted: mek})
		    			await limitAdd(sender)
		    			break
		    			
					case 'cslogo':
					if (isBanned) return reply(ind.ban())
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
          				cslogoo = body.slice(8)
					clogo = await fetchJson(`https://api.zeks.xyz/api/cslogo?text=${cslogoo}&apikey=${zeksapi}`, {method: 'get'})
					buffer = await getBuffer(clogo.result)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Dah nih'})
					await limitAdd(sender)
					break
					
					case 'crossfire':
					if (isBanned) return reply(ind.ban())
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					cf = body.slice(11)
					cross = await fetchJson(`https://api.zeks.xyz/api/crosslogo?text=${cf}&apikey=${zeksapi}`, {method: 'get'})
					reply('Wait Ganz, lagi ngedit')
					fire = await getBuffer(cross.result)
					client.sendMessage(from, fire, image, {quoted: mek})
					await limitAdd(sender)
					break
				
					case 'slide':
					if (isBanned) return reply(ind.ban())
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('*Textnya mana Tod?*')
					teks = `${body.slice(7)}`
					atytyd = await getBuffer(`https://api.vhtear.com/slidingtext?text=${teks}&apikey=${apivhtear}`, {method: 'get'})
					reply(ind.wait)
					client.sendMessage(from, atytyd, video, {quoted: mek})
					await limitAdd(sender) 
					break  
					
					case 'pubg':
					if (isBanned) return reply(ind.ban())
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya mana gan??')
				 	if (args.length > 10) return reply('karakter minimal 10')
					cpubg = `${body.slice(6)}`
					pubg1 = cpubg.split("/")[0];
					pubg2 = cpubg.split("/")[1];
					anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/game?text=${pubg1}&text2=${pubg2}&theme=pubg&apikey=${devcityapi}`, {method: 'get'})
					pubg = await getBuffer(anu.result.url)
					client.sendMessage(from, pubg, image, {quoted: mek})
					await limitAdd(sender) 
					break
					
					case 'cml':
					case 'ml':
					if (isBanned) return reply(ind.ban())
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya mana gan??')
                     			if (args.length > 10) return reply('karakter minimal 10')
					cml = `${body.slice(5)}`
					cml1 = cml.split("/")[0];
					cml2 = cml.split("/")[1];
					buffer = await getBuffer(`https://api.vhtear.com/logoml?hero=${cml1}&text=${cml2}&apikey=${apivhtear}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender) 
					break  
					
					case 'glitch':
					if (isBanned) return reply(ind.ban())
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
              	   			if (args.length < 1) return reply('teksnya mana gan?')
					reply("Wait Gans!")
                    			hm = `${body.slice(8)}`
                    			text1 = hm.split("/")[0];
                    			text2 = hm.split("/")[1];                    
                    			anu = await getBuffer(`https://videfikri.com/api/textmaker/tiktokeffect/?text1=${text1}&text2=${text2}`)
					//glitch = await getBuffer(anu.result.url)
                    			client.sendMessage(from, anu, image, {quoted: mek, caption: 'nih gan'})
			     		await limitAdd(sender) 
			     		break 
					
					case 'narutobanner':
					if (isBanned) return reply(ind.ban())
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('teksnya mana tod?')
					if (args.length < 2) return reply('harus 2 kata kaak')
					nar = body.slice(14)
					anu = await fetchJson(`https://api.zeks.xyz/api/naruto?text=${nar}&apikey=${zeksapi}`, {method: 'get'})
					reply('Wait Ganz, lagi ngedit')
					ngebuff = await getBuffer(anu.result)
					client.sendMessage(from, ngebuff, image, {quoted: mek, caption: 'ckp tw ngebabunya'})
					await limitAdd(sender)
					break
					
					case 'ngopi':
					case 'coffe':
					if (isBanned) return reply(ind.ban())
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('teksnya mana gayn?')
					ngo = `${body.slice(7)}`
					ngebuff = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup/?text=${ngo}`, {method: 'get'})
					client.sendMessage(from, ngebuff, image, {quoted: mek,caption: '1 gelas 5K gayn'})
					await limitAdd(sender)
					break
					
					case 'ngopi2':
					case 'coffe2':
					if (isBanned) return reply(ind.ban())
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('teksnya mana gayn?')
					ffe = `${body.slice(7)}`
					ngebuff = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup2/?text=${ffe}`, {method: 'get'})
					client.sendMessage(from, ngebuff, image, {quoted: mek,caption: '1 gelas 5K gayn, jangan lupa bayar!'})
					await limitAdd(sender)
					break
					
					case 'lovemsg':
					if (isBanned) return reply(ind.ban())
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('teksnya mana gayn?')
					love = `${body.slice(9)}`
					ngebuff = await getBuffer(`https://videfikri.com/api/textmaker/lovemsg/?text=${love}`, {method: 'get'})
					client.sendMessage(from, ngebuff, image, {quoted: mek,caption: 'Love You😘'})
					await limitAdd(sender)
					break
					
					case 'memecreate':
					if (isBanned) return reply(ind.ban())
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					hm = `${body.slice(12)}`
					text1 = hm.split("/")[0];
                    			text2 = hm.split("/")[1];  
                    			var imgbb = require('imgbb-uploader')
                    			if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
                    			ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    			reply('*Wait Ganz*, ngedit dumlu')
                    			owgi = await client.downloadAndSaveMediaMessage(ger)
                    			anu = await imgbb("bfe53fe15a978cf1938d96123f065206", owgi)
                    			teks = `${anu.display_url}`
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/create-meme?text-atas=${teks1}&text-bawah=${teks2}&background-url=${teks}`, {method: 'get'})
					ngebuff = await getBuffer(anu.result)
					client.sendMessage(from, ngebuff, image, {quoted: mek,caption: 'njir, cringe bet dh :v'})
					}
					await limitAdd(sender)
					break
					
					case 'trigger':
					if (isBanned) return reply(ind.ban())
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(ind.wait)
					owgi = await  client.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("bfe53fe15a978cf1938d96123f065206", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(ind.error)
					nobg = fs.readFileSync(rano)
					client.sendMessage(from, nobg, sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					await limitAdd(sender) 
					break
					
					case 'wasted':
					if (isBanned) return reply(ind.ban())
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(ind.wait)
					owgi = await  client.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("bfe53fe15a978cf1938d96123f065206", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(ind.error.stick)
					nobg = fs.readFileSync(rano)
					client.sendMessage(from, nobg, sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					await limitAdd(sender) 
					break
					
					case 'nightbeach':
					if (isBanned) return reply(ind.ban())
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videomessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					reply(ind.wait)
					owgi = await client.downloadAndSaveMediaMessage(ger)
					anu = await imgbb('bfe53fe15a978cf1938d96123f065206', owgi)
					teks = `${anu.display_url}`
					ling = `https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${teks}`
					buffer = await getBuffer(ling)
					client.sendMessage(from, buffer, image, {quoted: mek})
					}
					await limitAdd(sender)
					break
					
case 'crossgun':
if (isBanned) return reply(ind.ban())
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videomessage || isQuotedImage) && args.length == 0) {
ngontol = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
reply(ind.wait)
amat = await client.downloadAndSaveMediaMessage(ngontol)
ngontolAmat = await imgbb('bfe53fe15a978cf1938d96123f065206', amat)
ngonsol = `${ngontolAmat.display_url}`
bet = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${ngonsol}`)
ngonsolBet = '*Nih Gayn*'
client.sendMessage(from, bet, image, {quoted: mek, caption: `${ngonsolBet}`})
}
await limitAdd(sender)
break

case 'smoke':
if (isBanned) return reply(ind.ban())
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
asep = body.slice(7)
anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro3?text=${asep}&theme=smoke&apikey=${devcityapi}`)
reply(ind.wait)
ngonsol = await getBuffer(anu.result.url)
client.sendMessage(from, ngonsol, image, {quoted: mek, caption: 'merokok membunuhmu!'})
await limitAdd(sender)
break
case 'galaxytext':
		    case 'galaxylogo':
			if (isBanned) return reply(ind.ban())
		    if (!isRegistered) return reply(ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    logo = body.slice(11)
		    anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/galaxywp?text=${logo}`)
		    reply(ind.wait)
		    client.sendMessage(from, anu, image, {quoted: mek, caption: 'Nih Gayn'})
		    await limitAdd(sender)
		    break
		    
		    case 'grafity':
		if (isBanned) return reply(ind.ban())
		    if(!isRegistered) return reply(ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    baner = body.slice(9)
		    anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/odc2?text=${baner}&theme=grafity&apikey=${devcityapi}`, {method: 'get'})
		    reply('*Wait Gans, lgi nyeped muka lu*')
		    buferd = await getBuffer(anu.result.url)
		    client.sendMessage(from, buferd, image, {quoted: mek})
		    await limitAdd(sender)
		    break
		    
		    case 'narutext':
		if (isBanned) return reply(ind.ban())
		    if (!isRegistered) return reply(ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    narto = body.slice(10)
		    anu = await fetchJson(`https://api.zeks.xyz/api/naruto?text=${narto}&apikey=${zeksapi}`)
		    reply(ind.wait)
		    bug = await getBuffer(anu.result)
		    client.sendMessage(from, bug, image,{quoted: mek})
		    await limitAdd(sender)
		    break
		    
		    case 'logogaming':
			if (isBanned) return reply(ind.ban())
		    if (!isRegistered) return reply(ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    logo = body.slice(12)
		    anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/gaming?text=${logo}`)
		    reply(ind.wait)
		    client.sendMessage(from, anu, image, {quoted: mek, caption: 'Nih Gayn'})
		    await limitAdd(sender)
		    break
		    
		    case 'lightning':
			if (isBanned) return reply(ind.ban())
		    if (!isRegistered) return reply(ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    var imgbb = require('imgbb-uploader')
		    if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
		    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply(ind.wait)
                    owgi = await client.downloadAndSaveMediaMessage(ger)
                    anu = await imgbb('bfe53fe15a978cf1938d96123f065206', owgi)
                    teks = `${anu.display_url}`
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    pler = `https://docs-jojo.herokuapp.com/api/lightning?image_url=${teks}`
                    exec(`wget ${pler.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
		    fs.unlinkSync(ranp)
		    if (err) return reply(ind.error.stick)
		    nobg = fs.readFileSync(rano)
		    client.sendMessage(from, nobg, sticker, {quoted: mek})
		    fs.unlinkSync(rano)
		    })
		    } else {
		    reply('	Gunakan foto!')
		    }
		    await limitAdd(sender) 
		    break

					
					case 'wanted':
					if (isBanned) return reply(ind.ban())
					if (!isRegistered) return reply(nd.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					want = body.slice(8)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videomessage || isQuotedImage)) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					reply(ind.wait)
					owgi = await client.downloadAndSaveMediaMessage(ger)
					anu = await imgbb('bfe53fe15a978cf1938d96123f065206', owgi)
					teks = `${anu.display_url}`
					teks1 = want.split("/")[0];
					teks2 = want.split("/")[1];
					ling = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${teks}&text1=${teks1}&text2=${teks2}`)
					client.sendMessage(from, ling, image, {quoted: mek})
					}
					await limitAdd(sender)
					break
					
					case 'kalender':
					if (isBanned) return reply(ind.ban())
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					var imgbb = require('imgbb-uploader')
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					ger= isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					reply(ind.wait)
					owgi = await client.downloadAndSaveMediaMessage(ger)
					anu = await imgbb('bfe53fe15a978cf1938d96123f065206', owgi)
					teks = `${anu.display_url}`
					pler = await fetchJson(`https://docs-jojo.herokuapp.com/api/calendar?image_url=${teks}`)
					peler = await getBuffer(pler.result)
					client.sendMessage(from, peler, image, {quoted: mek})
					}
					await limitAdd(sender)
					break
					
					
					case 'ytcomment':
					if (isBanned) return reply(ind.ban())
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('teksnya mana tod?')
					if (args.length < 2) return reply(`caranya:\nkirim foto yang mau digunakan sebagai profile. kasih caption: ${prefix}ytcomment MiKako / Mending nonton wibu`)
					comment = `${body.slice(11)}`
					us = comment.split("/")[0];
                    			komen = comment.split("/")[1];
                    			var imgbb = require('imgbb-uploader')
                    			if ((isMedia && !mek.message.videomessage || isQuotedImage)) {
                    			ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    			reply(ind.wait)
                    			/*try {
                    			pp = await client.getProfilePicture(`${num.split("@")[0]}@c.us`)
                    			} catch {
                    			pp = `https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg`
                    			}
                    			ngebuff = await getBuffer(pp)*/
                    			owgi = await client.downloadAndSaveMediaMessage(ger)
                    			anu = await imgbb('bfe53fe15a978cf1938d96123f065206', owgi)
                    			teks = `${anu.display_url}`
					ling = await getBuffer(`https://some-random-api.ml/canvas/youtube-comment?username=${us}&comment=${komen}&avatar=${teks}&dark=true`)
					client.sendMessage(from, ling, image, {quoted: mek})
					} else {
					reply(`gunakan foto dengan caption ${prefix}ytcomment Namamu / textnya`)
					}
					await limitAdd(sender)
				    	break
					
					
					case 'phlogo':
					if (isBanned) return reply(ind.ban())
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					logo = body.slice(8)
					ph1 = logo.split("/")[0];
					ph2 = logo.split("/")[1];
					ph = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${ph1}&text2=${ph2}&apikey=${zeksapi}`, {method: 'get'})
					reply('*Wait, Ganz*')
					client.sendMessage(from, ph, image, {quoted: mek})
					await limitAdd(sender)
					break
					
					case 'logoepep':
					if (isBanned) return reply(ind.ban())
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					epep = body.slice(10)
					ling = await getBuffer(`https://api.zeks.xyz/api/epep?text=${epep}&apikey=${zeksapi}`, {method: 'get'})
					reply(ind,wait)
					client.sendMessage(from, ling, image, {quoted: mek})
					await limitAdd(sender)
					break
				
					case 'wolflogo':
					if (isBanned) return reply(ind.ban())
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					logo = body.slice(10)
					teksk = logo.split("/")[0];
					teksb = logo.split("/")[1];
					ling = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=${zeksapi}&text1=${teksk}&text2=${teksb}`, {method: 'get'})
					reply(ind.wait)
					client.sendMessage(from, ling, image, {quoted: mek})
					await limitAdd(sender)
					break
					
					case 'hartatahta':
					if (isBanned) return reply(ind.ban())
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(`「❗」Contoh : ${prefix}hartatahta botwea`)
					har = body.slice(12)
					buffer = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${har}&apikey=${zeksapi}` )
					reply('「❗」Hirti tihti Tai Anjg :v')
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
					
					case 'kuncitext':   
					if (isBanned) return reply(ind.ban())
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
              	    			if (args.length < 1) return reply('teksnya mana kak?')
                    			teks = `${body.slice(8)}`
                    			if (teks.length > 10) return client.sendMessage(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: mek})
                   			buffer6 = await getBuffer(`https://api.vhtear.com/padlock?text1=${teks}&text2=${teks}&apikey=${apivhtear}`, {method: 'get'})
                    			client.sendMessage(from, buffer6, image, {quoted: mek, caption: `${teks}`})
		    			await limitAdd(sender)
		    			break
					
					case 'text3d':
					if (isBanned) return reply(ind.ban())
                			if (!isRegistered) return reply(ind.noregis())
                			if (isLimit(sender)) return reply(ind.limitend(pusname))
              	    			if (args.length < 1) return reply('teksnya mana Tod?')
                    			teks = `${body.slice(8)}`
                    			if (teks.length > 10) return client.sendMessage(from, 'Teksnya kepanjangan Bambank', text, {quoted: mek})
                    			buffer = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=${zeksapi}&text=${teks}`, {method: 'get'})
					reply(ind.wait)
                    			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			     		await limitAdd(sender)
					break
					
					case 'text3d2':
					if (isBanned) return reply(ind.ban())
                			if (!isRegistered) return reply(ind.noregis())
                			if (isLimit(sender)) return reply(ind.limitend(pusname))
              	    			if (args.length < 1) return reply('teksnya mana Tod?')
                    			teks = `${body.slice(8)}`
                    			if (teks.length > 10) return client.sendMessage(from, 'Teksnya kepanjangan Bambank', text, {quoted: mek})
                    			buffer = await getBuffer(`https://api.zeks.xyz/api/text3d?text=${teks}&apikey=${zeksapi}`, {method: 'get'})
					reply(ind.wait)
                    			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			     		await limitAdd(sender)
					break
					
					/*<=========================[AKHIR MAKER MENU]=========================>*/
					
					/*<============================[TOOLS MENU]==========================>*/
					
					case 'wait':
					if (!isRegistered) return reply(ind.noregis())
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(ind.wait())
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply(ind.ocron())
					}
					await limitAdd(sender)
					break
					
					case 'cuaca': 
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					ples = body.slice(7)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cuaca?q=${ples}`, {quoted: mek})
					cap = `${anu.result}`
					nex = `*Kota:* ${cap.tempat}\n*Suhu:* ${cap.suhu}\n*Kecepatan Angin:* ${cap.angin}\n*Kelembapan:* ${cap.kelembapan}\n*_Cuaca_:* ${cap.cuaca}\n*Keterangan:* ${cap.desk}\n*Udara:* ${cap.udara}`
					client.sendMessage(from, nex, text, {quoted: mek})
					await limitAdd(sender)
					break
					
					case 'cuacahg':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					ples = body.slice(7)
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/bmkg-cuaca`, {method: 'get'})
					cap = `${anu.result.desc}`
					client.sendMessage(from, cap, text, {quoted: mek})
					await limitAdd(sender)
					break
					
					case 'nulis':
					case 'tulis':
					client.updatePresence(from, Presence.composing)
					if (!isRegistered) return reply(ind.noregis())
          	 			if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (args.length < 1) return reply(`${name} Harus Nulis Apa Kak??`)
						reply(ind.wait)
						tulis = body.slice(7)
				  		nama = tulis.split("/")[0];
						kelas = tulis.split("/")[1];
						isi = tulis.split("/")[2];
						nulis = await getBuffer(`https://api.zeks.xyz/api/magernulis?nama=${nama}&kelas=${kelas}&text=${isi}&tinta=4`, {method: 'get'})
						client.sendMessage(from, nulis, image, {quoted: mek})
						await limitAdd(sender) 
						break  
					
					case 'infonomor':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length < 1) return reply(`Masukan Nomor\nContoh : ${prefix}infonomor 0812345678`)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
                if (data.error) return reply(data.error)
                if (data.result) return reply(data.result)
                hasil = `╠➥ internasional : ${data.international}\n╠➥ nomor : ${data.nomor}\n╠➥ operator : ${data.op}`
                reply(hasil)
                await limitAdd(sender)
					break 
                
                	case 'beritahoax':
                     if (!isRegistered) return reply(ind.noregis())
                     if (isLimit(sender)) return reply(ind.limitend(pusname))
                    client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Gambar* : ${i.image}\n*Title* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break 
					case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
				    	client.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya,Wangy sekali😗')
					break 
					
					case 'brainly':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                    			brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					client.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                        		console.log(res)
                    			})
					await limitAdd(sender)
					break 
					
					case 'wiki':
					if (!isRegistered) return reply(ind.noregis())				
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('masukan kata kunci')
					tels = body.slice(6)	
					anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/wikipedia?search=${tels}&apikey=${devcityapi}`, {method: 'get'})
					iskon = `*${anu.result.title}*\n\n${anu.result.result}`
					client.sendMessage(from, iskon, text, {quoted: mek})
                                        await limitAdd(sender)
					break	
					
					case 'jamdunia':
			if (isLimit(sender)) return reply(ind.limitend(pushname))
			if (!isRegistered) return reply(ind.noregis())	
			reply(ind.wait)
		 	jamdunia = `${body.slice(10)}`
			anu = await fetchJson(`https:// tobz-api.herokuapp.com/api/jamdunia?lokasi=${jamdunia}&apikey=${TobzKey}`, {method: 'get'})
			wtime = `*${anu.result.tittle}*\n*${anu.result.date}*\n*${anu.result.time}*\n*${anu.result.sun}*`
			client.sendMessage(from, wtime, text, {quoted: mek})
			await limitAdd(sender) 
			break  
					
					case 'jadwalsholat':
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (!isRegistered) return reply(ind.noregis())	
					reply(ind.wait)
		 			jadwal = `${body.slice(14)}`
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/jadwalshalat?q=${jadwal}&apikey=${TobzKey}`, {method: 'get'})
					js = `*Imsak: ${anu.result.imsak}*\n*Subuh: ${anu.result.subuh}*\n*Matahari Terbit: ${anu.result.sunrise}*\n*Dzuhur${anu.result.dzuhur}*\n*Ashar: ${anu.result.ashar}*\n*Matahari Tenggelam: ${anu.result.sunset}*\n*Maghrib: ${anu.result.maghrib}*\n*Isya: ${anu.result.isha}*\n*Tahajud: ${anu.result.midnight}*`
					client.sendMessage(from, js, text, {quoted: mek})
					await limitAdd(sender)
					break
					
					case 'jadwaltv':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					tv = body.slice(10)
					anu = await fetchJson(`https://api.zeks.xyz/api/jadwaltv?channel=${tv}&apikey=${zeksapi}`, {method: 'get'})
					jadwal = `Jadwal TV *${tv}* adalah:\n\n${anu.result}`
					client.sendMessage(from, jadwal, text, {quoted: mek})
					await limitAdd(sender)
					break
					
					case 'faktaunik':
					case 'fakta':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limiten(pusname))
						anu = await fetchJson(`https://videfikri.com/api/fakta`, {method: 'get'})
						buffer = `${anu.result.fakta}`
						client.sendMessage(from, buffer, text, {quoted: mek})
						await limitAdd(sender)
						break

					case 'map':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                			anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
               				buffer = await getBuffer(anu.gambar)
                			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
					await limitAdd(sender)
					break
					
					case 'bcgc':
				   	if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
						}
						reply('Sukses broadcast group')
					}
					break 
					
					case 'pinterest':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*PINTEREST*\n\n_KeyWord:_ ${body.slice(11)}`})
					await limitAdd(sender)
					break 
					
					case 'wpmuntainview':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					wp = await fetchJson(`https://onlydevcity.herokuapp.com/api/wallpaper/pegunungan?apikey=${devcityapi}`, {method: 'get'})
					reply(ind.wait)
					view = JSON.parse(JSON.stringify(wp.result));
					mountain = view[Math.floor(Math.random() * view.length)];
					imge = await getBuffer(mountain)
					client.sendMessage(from, imge, image, {quoted: mek})
					await limitAdd(sender)
					break
					
					case 'pixabay':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					tek = body.slice(9);
					serc = await fetchJson(`https://onlydevcity.herokuapp.com/api/pixabay?q=${tek}&apikey=${devcityapi}`, {method: 'get'})
					reply(ind.wait)
					data = JSON.parse(JSON.stringify(serc.result.hits));
					rand = data[Math.floor(Math.random() * data.length)];
					pict = await getBuffer(rand)
					client.sendMessage(from, pict, image, {quoted: mek, caption: `*PIXABAY*\n\n_*KeyWord :*_ ${serc}`});
					await limitAdd(sender)
					break
					
	/*<==========================================[ANIME MENU]==============================================>*/
				case 'husbu':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					res = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu?apikey=${TobzKey}`)
					reply(ind.wait())
					buffer = await getBuffer(res.image)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '>_<'})
					await limitAdd(sender)
					break
					
				case 'waifu':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				anu = await fetchJson(`https://api.shizukaa.xyz/api/waifu?apikey=${ItsApi}`, {method: 'get'})
					reply(ind.wait)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '>_<'})
					await limitAdd(sender)
					break
					
				case 'loli':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/randomloli`, {method: 'get'})
					reply(ind.wait())
					//nyeee = await getBuffer(anu.result)
					client.sendMessage(from, anu, image, { caption: 'O... Oni B. Bakaa >///<', quoted: mek })
					await limitAdd(sender)
					break
				case 'loli2':
					loli.getSFWLoli(async (err, res) => {
						if (err) return reply('❌ *ERROR* ❌')
						buffer = await getBuffer(res.url)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'O...oni - Chan, bakaaa >///<'})
					})
					break
					
					case 'nhentai2':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender))return reply(ind.limitend(pusname))
					code = body.slice(10)
					doujinshi = doujinshi.new(`${code}`) (async (err, res) => {
					if (err) return reply('error')
					buffer = await getBuffer(res.url)
					client.sendMessage(from, buffer, image, {quoted: mek})
					})
					await limitAdd(sender)
					break
				case 'nsfwloli2':
					if (!isNsfw) return reply('❌ *FALSE* ❌')
					loli.getNSFWLoli(async (err, res) => {
						if (err) return reply('❌ *ERROR* ❌')
						buffer = await getBuffer(res.url)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					})
					break
					
					case 'shota':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					ntah = body.slice(7)
					img = await fetchJson(`https://tobz-api.herokuapp.com/api/randomshota?apikey=${TobzKey}`, {method: 'get'})
					reply(ind.wait)
					buffer = await getBuffer(img.result)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '😒'})
					await limitAdd(sender)
					break
					
					
					
				case 'nekonime':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					gatauda = body.slice(10)
					anu = await fetchJson(`https://api.vhtear.com/randomnekonime&apikey=${apivhtear}`, {method: 'get'})
					reply(ind.wait())
					buffer = await getBuffer(anu.result.result)
					client.sendMessage(from, buffer, image, { caption: 'Save loli, Pukul furry', quoted: mek})
					await limitAdd(sender)
					break
				case 'neko':
                		if (!isRegistered) return reply(ind.noregis())
               			if (isLimit(sender)) return reply(ind.limitend(pusname))
					res = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime?apikey=${TobzKey}`, {method: 'get'})
					reply(ind.wait())
					buffer = await getBuffer(res.result)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih nekonime mu >_<'})
					await limitAdd(sender)
					break
				case 'ranime':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isNsfw) return reply(ind.nsfwoff())
					gatauda = body.slice(8)
					reply(ind.wait())
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=${TobzKey}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
					
				case 'anime':
					if(!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					teks = body.slice(9)
					reply(ind.wait)
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/anime?query=${teks}`)
					reply(anu.result)
					await limitAdd(sender)
					break
				
				case 'nsfwloli':
				try {   
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isNsfw) return reply(ind.nsfwoff())
				if (!isGroup) return reply(ind.groupo()) 
				res = await fetchJson(`https://api.vhtear.com/randomloli&apikey=${apivhtear}`, {method: 'get'})
					reply(ind.wait())
					buffer = await getBuffer(res.result.result)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
				} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
				}
					await limitAdd(sender)
					break 
				case 'nsfwneko':
				try {  
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (!isNsfw) return reply(ind.nsfwoff())
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=${TobzKey}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
					
				case 'yuri':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (!isNsfw) return reply(ind.nsfwoff())
				res = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/yuri?apikey=${devcityapi}`, {method: 'get'})
				buffer = await getBuffer(res.result.url)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Yurification🤤'})
				await limitAdd(sender) 
				break 
			
				case 'wibu':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					data = await fetchJson(`https://api.vhtear.com/randomwibu&apikey=${apivhtear}`)
					reply(ind.wait())
					buffer = await getBuffer(data.result.foto)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '^W^'})
					await limitAdd(sender)
					break
			case 'nekopoi':
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isNsfw) return reply(ind.nsfwoff())
			if (!isGroup) return reply(ind.groupo()) 
              	    if (args.length < 1) return reply('teksnya mana gan?')
                    teks = body.slice(9)
                    anu = await fetchJson(`https://api.vhtear.com/nekosearch?query=${teks}&apikey=${apivhtear}`, {method: 'get'})
			reply(ind.wait())
                    teks = `===============\n`
                    for (let neko of anu.result) {
                    teks += `Title: ${neko.title}\nImage: ${neko.image}\nDeskripsi: ${neko.detail}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break  
					
				/*case 'kusonime':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('teksnya mana gan?')
                    		kuso = body.slice(10)
					anu = await fetchJson(`https://api.shizukaa.xyz/api/kusonime?apikey=${ShizukaApi}&q=${kuso}`, {method: 'get'})
					reply(ind.wait)
					teks = `===============\n`
					for (let kuso of anu.result) {
					teks += `${kuso.info}\nSinopsis: ${kuso.sinopsis}\nLink: ${kuso.link_dl}\n===============\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
*/
					
					case 'cp':
					case 'couple':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limiend(pusname))
					reply(ind.wait)
					anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/coupleship?apikey=${devcityapi}`, {method: 'get'})
					cp = JSON.parse(JSON.stringify(anu.result.data));
					pp = cp[Math.floor(Math.random() * cp.length)];
					im = await getBuffer(pp.coupleImages.imageUrlOne)
					age = await getBuffer(pp.coupleImages.imageUrlTwo)
					cpt = `*${pp.names}*`
					client.sendMessage(from, im, image,{quoted: mek})
					client.sendMessage(from, age, image, {caption: `${cpt}`});
					await limitAdd(sender)
					break
					
					case 'kusonime':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = body.slice(11)
					anime = await fetchJson(`https://tobz-api.herokuapp.com/api/kuso?q=${anu}&apikey=${TobzKey}`, {method: 'get'})
					if (anime.error) return reply(anime.error)
					res = `Judul: ${anime.title}\nIngfo: ${anime.info}\nLink: ${anime.link_dl}\nSinopsis: ${anime.sinopsis}`
					buffer = await getBuffer(anime.thumb)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: `${res}`})
					await limitAdd(sender)
					break
					
					case 'topanime':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anime = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/topanime?apikey=${devcityapi}`, {method: 'get'})
					//imeg = await getBuffer(`https://images.app.goo.gl/bSpYrvRaSeKFU58R7>`)
					reply(ind.wait)
					let ki = 0
					let mikk = `${anime.result.data}`
					let klein = `*${anime.result.message}--------------*\n\n`
					let kto = `${anime.result.data.stats}`
					try {
					for (let g = 0;g < 3; g++) {
					ki++
					klein += `${ki}*Rank:* ${mikk[g].rank}\nTittle:* ${mikk[g].title}\n*Studio:* ${mikk[g].studio}\n\n*WeeksOnTop:* ${kto[g].weeksOnTop}\n*Previously:* ${kto[g].previously}\n*Stat:* ${kto[g].stat}\n*-----------------*`
					}
					client.sendMessage(from, klein, text, {quoted: mek})
					} catch {
					reply('terjadi kesalahan, mohon jangan digunakan dulu')
					}
					await limitAdd(sender)
					break
					
					case 'manga':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					manga = body.slice(7)
					ling = await fetchJson(`https://onlydevcity.herokuapp.com/api/manga?search=${manga}&apikey=${devcityapi}`, {method: 'get'})
					reply(ind.wait)
					downloads = `${ling.result.downloads}`
					ngebuff = await getBuffer(ling.result.thumb)
					capt = `*Judul:* *_${ling.result.name}_*\n*Author:* ${ling.result.author}\n*Genre:* ${ling.result.genre}\n*Type:* ${ling.result.type}\n*Rating:* ${ling.result.rating}\n*Status:* ${ling.result.status}\n*Deskripsi:* ${ling.result.description}\n\n⚠ _*NOTE*_ ⚠ : ${ling.result.note}\n*Downloads:* ${downloads}`
					client.sendMessage(from, ngebuff, image, {quoted: mek, caption: `${capt}`})
					await limitAdd(sender)
					break
					
					case 'nhentai':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isNsfw) return reply(ind.nsfwoff())
					if (!isGroup) return reply(ind.groupo())
					if (args.length < 1) return reply('I need nuclear code!🤤')
					code = body.slice(9)
					anu = await fetchJson(`lhttps://mnazria.herokuapp.com/api/nhentai?code=${code}`, {method: 'get'})
					reply(ind.wait())
					ngebuff = await getBuffer(anu)
					client.sendMessage(from, ngebuff, image, {quoted: mek})
					await limitAdd(sender)
				  	break
					
			case 'randomhentong':
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (isNoMedia) return reply(ind.nomed())
			if (!isNsfw) return reply(ind.nsfwoff())
					gatauda = body.slice(15)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=${TobzKey}`)
					reply(ind.wait())
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, { caption: 'Comli teross', quoted: mek})
					await limitAdd(sender)
					break	
					
			case 'blowjob':
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isNsfw) return reply(ind.nsfwoff())
				ranp = getRandom('.gif')
				rano = getRandom('.webp')
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${TobzKey}`, {method: 'get'})
				if (anu.error) return reply(anu.error)
				exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
				fs.unlinkSync(ranp)
				if (err) return reply(ind.stikga())
				buffer = fs.readFileSync(rano)
				client.sendMessage(from, buffer, sticker, {quoted: mek})
				fs.unlinkSync(rano)
				})
				await limitAdd(sender)
				break
				
				case 'attp':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				tek = body.slice(6)
				anu = await getBuffer(`https://xteam.xyz/attp?file&text=${tek}`)
				if (anu.error) return reply(anu.error)
				client.sendMessage(from, anu, sticker, {quoted: mek})
				await limitAdd(sender)
				break
				
				
				case 'baka':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				ranp = getRandom('.gif')
				rano = getRandom('.webp')
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/baka?apikey=${devcityapi}`, {method: 'get'});
				if (anu.error) return reply(anu.error)
				exec(`wget ${anu.result.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
		fs.unlinkSync(ranp)
		if (err) return reply(ind.stikga())
		buffer = fs.readFileSync(rano)
		client.sendMessage(from, buffer, sticker, {quoted: mek})
		fs.unlinkSync(rano)
		})
		await limitAdd(sender)
		break
				    
			case 'nangis':
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=${TobzKey}`, {method: 'get'})
					reply('「❗」KASIH JEDA 1 MENIT HABIS INI YA KAK')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(ind.stikga())
					buffer = fs.readFileSync(rano)
					client.sendMessage(from, buffer, sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
				case 'hentai':
				try {
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (!isNsfw) return reply(ind.nsfwoff())
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=${TobzKey}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
					case 'animekiss':
                			if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isNsfw) return reply(ind.nsfwoff())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=${TobzKey}`, {method: 'get'})
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
	/*<==========================================[AKHIR ANIME MENU]==============================================>*/
					
	/*<===========================================[CHARACTER MENU]===============================================>*/
					case 'kaneki':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					reply(ind.wait)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=kaneki&apikey=${apivhtear}`, {method: 'get'})
					var ka = JSON.parse(JSON.stringify(anu.result));
					var ne =  ka[Math.floor(Math.random() * ka.length)];
					ki = await getBuffer(ne)
					client.sendMessage(from, ki, image, { caption: 'kaneki!!', quoted: mek })
					await limitAdd(sender) 
					break 
					
					case 'kurumi':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					reply(ind.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					client.sendMessage(from, nye, image, { caption: 'kurumi chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
					
				case 'miku':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					reply(ind.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+miku`, {method: 'get'})
					mi = JSON.parse(JSON.stringify(anu));
					ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					client.sendMessage(from, nye, image, { caption: 'miku chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
					
					case 'megumin':
					if (!isRegistered) return reply(ind.noregis());
					if (isLimit(sender)) return reply(ind.limitend(puname))
					ani = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/megumin?apikey=${devcityapi}`, {method: 'get'});
					reply('*Wait, Ganz*')
					me = await getBuffer(ani.result.url)
					client.sendMessage(from, me, image, {quoted: mek, caption: '💣explotion💥'});
					await limitAdd(sender)
					break
					
					case 'shinobu':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					kny = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/shinobu?apikey=${devcityapi}`, {method: 'get'});
					reply('*Wait, Ganz*')
					kaenye = await getBuffer(kny.result.url)
					client.sendMessage(from, kaenye, image, {quoted: mek, caption: 'ara ara, daijoubu desu ka?'});
					await limitAdd(sender)
					break
					
				case 'naruto':
				if (!isRegistered)return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					reply(ind.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Naruto`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					client.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: mek })
					await limitAdd(sender)
					break 
					
				case 'minato':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					reply(ind.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Minato`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					client.sendMessage(from, nye, image, { caption: 'minato!!', quoted: mek })
					await limitAdd(sender)
					break 
				case 'boruto':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					reply(ind.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Boruto`, {method: 'get'})
					bor = JSON.parse(JSON.stringify(anu));
					uto =  bor[Math.floor(Math.random() * bor.length)];
					nye = await getBuffer(uto)
					client.sendMessage(from, nye, image, { caption: 'boruto!!', quoted: mek })
					await limitAdd(sender)
					break 
					
				case 'hinata':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					reply(ind.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Hinata`, {method: 'get'})
					hina = JSON.parse(JSON.stringify(anu));
					ta =  hina[Math.floor(Math.random() * hina.length)];
					nye = await getBuffer(ta)
					client.sendMessage(from, nye, image, { caption: 'hinata!!', quoted: mek })
					await limitAdd(sender)
					break 
				case 'sasuke':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					reply(ind.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sasuke`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					client.sendMessage(from, nye, image, { caption: 'sasuke!!', quoted: mek })
					await limitAdd(sender) 
					break 
					
				case 'sakura':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					reply(ind.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sakura`, {method: 'get'})
					sak = JSON.parse(JSON.stringify(anu));
					kura =  sak[Math.floor(Math.random() * sak.length)];
					nye = await getBuffer(kura)
					client.sendMessage(from, nye, image, { caption: 'sakura!!', quoted: mek })
					await limitAdd(sender) 
					break 
					
					
					/*<========================[AKHIR CHARACTER MENU]========================>*/
					
					/*<============================[EDUKASI MENU]=============================>*/
					
		case 'resepmasakan':
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
                   anu = await fetchJson(`https://mnazria.herokuapp.com/api/resep?key=${body.slice(14)}`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   buffer = await getBuffer(anu.thumb_item)
                   hasil = `*title* \n ${anu.title} *item_name* \n ${anu.item_name} *ingredient* \n${anu.ingredient} *step* \n${anu.step}`
                   client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                   await limitAdd(sender)
		break 
					
		case 'quran':
		if (!isRegistered) return reply(ind.noregis())
           	if (isLimit(sender)) return reply(ind.limitend(pusname))
			anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
			quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
			client.sendMessage(from, quran, text, {quoted: mek})
			await limitAdd(sender) 
			break 
				
		case 'randomKPOP':
		case 'randomkpop':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=${TobzKey}`, {method: 'get'})
                   buff = await getBuffer(anu.result)
                   client.sendMessage(from, buff, image, {quoted: mek})
                   break 
                    case 'kickall':
                    if (!isOwner) return reply(ind.ownerb())
			if (!isGroupAdmins) return reply(ind.admin())
			        members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					client.groupRemove(from, members_id)
					break 
					case 'setreply':
					if (!isOwner) return reply(ind.ownerb())
                    			client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break 
					case 'grouplist':
					if (!isRegistered) return reply(ind.noregis())
					client.updatePresence(from, Presence.composing) 
					teks = `\`\`\`Ini adalah list group XPTN BOT :\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grup : ${groupId.length}\`\`\``
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
					break
					case 'blocklist':
					teks = 'List Beban Kontak :\n'
					for (let block of blocked) {
						teks += `➢ @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
		case 'daftar':
                if (isRegistered) return  reply(ind.rediregis())
                if (!q.includes('|')) return  reply(ind.wrongf())
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
		if (umurUser <= 8) return reply('bocil pake bot mana paham😈👎')
		if (umurUser >= 70) return reply('Umurmu dh bau tanah Tod')
                const serialUser = createSerial(20)
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
					break
		/*<=================================[MENU GABUT/SIMPLE/]======================================>*/
					
          	case 'mining':
                      if (!isRegistered) return reply(ind.noregis())
                      if (isLimit(sender)) return reply(ind.limitend(pushname))
                      if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)
                      if (isOwner) {
                      const one = 999999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`karena anda owner kami dari team bot mengirim ${one}Xp untuk anda`)
                      }else{
                      setTimeout( () => {
                      const mining = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, mining)
                      reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
                      }, 120000); //2minute
                      setTimeout( () => { 
                      reply('Sedang mining selama 2 menit, silahkan tunggu...')
                      }, 0); //1sec
                      }
               		await limitAdd(sender)
			break
			
			case 'mancing':
			if (!isRegistered) return reply(ind.noregis())
			if (!isEventon) return reply('ya maap aja bro, tapi event grub belum di aktifkan')
			setTimeout( () => {
			const fishing = Math.ceil(Math.random() * 5)
			addIkan(sender, fishing)
			reply(`*SELAMAT*\n\n ${pushname} kamu mendapatkan *${fishing}*🐟 selama 2 menit`)
			}, 120000); //2 minute
			setTimeout( () => {
			reply('Sedang Mancing selama 2 menit, silahkan tunggu...')
			}, 0) //1sec
			break
					case 'casino':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isEventon) return reply('ya maap aja bro, tapi event grub belum di aktifkan')
					cas = body.slice(8)
					if ( cas == NaN ) return reply('Lu mau taruhan brp?')
					res = [ "Kamu MENANG!" , "Kamu KALAH" ];
					bayar = confirmATM(sender, cas)
					setTimeout( () => {
					const rand = Math.ceil(Math.random() * 1000)
					const judi = cas + rand 
					const hasil = res(Math.floor[Math.random() * res.length])
					if ( resug == "Kamu MENANG" ) {
						addKoinUser(sender, judi)
						reply(`*SELAMAT🥳*\n\n${pushname} Kamu memenangkan casino sebesar *_${judi}_*\n\nKumpulkan uang untuk membeli limit`)
					} else {
						reply("Kamu KALAH!")
					}
					}, 60000); //1 Minute
					setTimeout( () => {
						reply(`Wait Ganz, Sedang bermain dengan *_MASTAH_* pro pler!!\nSelama 1 menit.`)
					}, 0) //1 sec
						await limitAdd(sender)
						break
					
					
			
			case 'ikanku':
			if (!isRegistered) return reply(ind.noregis())
			teks = `*Jumlah Ikan Yang didapatkan _${pushname}_ adalah:*\n\n*_${getMancingIkan(sender)}_*🐟`
			client.sendMessage(from, teks, text, {quoted: mek})
			break
			
				case 'bisakah':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
					
					case 'katailham':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					katailham = body.slice(1)
					const kata =['kamu baik','kamu suka coli/colmek','mending rakit PC','Mending nonton wibu?','kamu besok jadian','kamu suka owner','kamu anak babi','@3 suka coli','@2 suka sm kamu😘','@1 autis sekali','ngentot lu ya?','ngapain tidur, kalau besok bangun lagi','dia cuman penasaran, udah jangan baperan','semua cwk sama aja','Kalau dia bercanda,Ketawa.jgn jatuh cinta','mending save no owner:v','lu wibu, nolep lagi','mak lu gayming']
					const ilham = kata[Math.floor(Math.random() * kata.length)]
					client.sendMessage(from, 'Pertanyaan : *'+katailham+'*\n\nJawaban : '+ ilham, text, { quoted: mek })
					await limitAdd(sender)
					break
					
				case 'kapankah':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Tidak Akan Pernah']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					client.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
					
         			case 'apakah':
         			if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','Tanyakan Ayam']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
					
				case 'rate':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					client.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
					
				case 'babi':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					membr = []
					const mes = groupMembers
					const msk = groupMembers
					const siaps = mes[Math.floor(Math.random() * mes.length)]
					const sips = pushname[Math.floor(Math.random() * msk.length)]
					teks = `*Yang Paling Babi Disini Adalah :* @${siaps.jid.split('@')[0]}`
					membr.push(siaps.jid)
					mentions(teks, membr, true)
					break
					
				case 'watak':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					watak = body.slice(1)
					wa =["penyayang","pemurah","Pemarah","Pemaaf","Penurut","Baik","baperan","Baik Hati","penyabar","Uwu","top deh, pokoknya","Suka Membantu"]
					const tak = wa[Math.floor(Math.random() * wa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
					break 
					
					case 'gantengcek':
				case 'cekganteng':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ganteng = body.slice(12)
					const gan =['10%','30%','20%','40%','50%','60%','70%','62%','74%','83%','97%','100%','29%','94%','75%','82%','41%','39%']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					client.sendMessage(from, 'Pertanyaan : Cek Ganteng Bang *'+ganteng+'*\n\nJawaban : '+ teng +'', text, { quoted: mek })
					break
					
				case 'cantikcek':
				case 'cekcantik':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					cantik = body.slice(11)
					if (args.length < 1) return reply('Yg Mau dicek Siapa Kak??')
					const can =['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya KakaðŸ‘','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai CantikðŸŠ','70% Hai UkhtyðŸŠ','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum UkhtyðŸŠ','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih SemangatðŸŠ']
					const tik = can[Math.floor(Math.random() * can.length)]
					client.sendMessage(from, 'Pertanyaan : Cantik Cek Kakak *'+cantik+'*\n\nPersen Kecantikan : '+ tik +'', text, { quoted: mek })
					break
					
				case 'terbalik':
				case 'tebalik':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ngebuff = `${body.slice(9)}`
					anu = await fetchJson(`https://videfikri.com/api/hurufterbalik/?query=${ngebuff}`, {method: 'get'})
					ngebuff = `${anu.result.kata}`
					client.sendMessage(from, ngebuff, text, {quoted: mek})
					await limitAdd(sender)
					break
					
				case 'terbalik':
				case 'tebalik':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ngebuff = `${body.slice(9)}`
					anu = await fetchJson(`https://videfikri.com/api/hurufterbalik/?query=${ngebuff}`, {method: 'get'})
					ngebuff = `${anu.result.kata}`
					client.sendMessage(from, ngebuff, text, {quoted: mek})
					await limitAdd(sender)
					break
					
				case 'slap':
				if (!isRegistered) return reply(ind.noregis())
                    		if (isLimit(sender)) return reply(ind.limitend(pusname))
					const slap =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','memek lu semua','lihat anak anjing lagi baca','ngentot lu ya?','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak dajjal','puki lu','anjing ngajak gelud?','sama hantu takut cupu ngentod','cupu cupu aja gausah bacot','kontol lu semua','bocah lu semua kontol','3 Hari Lagi','Ngontol Amat']
					const ple = slap[Math.floor(Math.random() * slap.length)]
					pod = await getBuffer(`https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`)
					client.sendMessage(from, pod, image, { quoted: mek, caption: '*Toxic*\n\n'+ ple })
					await limitAdd(sender)
					break
					
				case 'tampar':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer(`https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`, {method: 'get'})
					exec(`wget ${buffer.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
	
			case 'pasangan':
			if (!isRegistered) return reply(ind.noregis())
           		if (isLimit(sender)) return reply(ind.limitend(pusname))
				pa = `${body.slice(10)}`
				sa = pa.split("/")[0];
				ngan = pa.split("/")[1];
				anu = await fetchJson(`https://api.vhtear.com/primbonjodoh?nama=${sa}&pasangan=${ngan}&apikey=${apivhtear}`, {method: 'get'})
				client.sendMessage(from, `${anu.result.hasil}`, {quoted: mek})
				await limitAdd(sender) 
				break 
					
				case 'say':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					teks = body.slice(5)
					if (args.length < 1) return reply('teksnya mana kak?')
                                        saying = teks
                                        client.sendMessage(from, saying, text)
                                        break
					
	  case 'seberapagay':
           if (!isRegistered) return reply(ind.noregis())
           if (isLimit(sender)) return reply(ind.limitend(pusname))
		teks = body.slice(1)
		   anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
		   hasil = `Nih Liat Data Gay Si ${teks}\n\n\nPersentase Gay : ${anu.persen}%\nAlert!!! : ${anu.desc}`
		   reply(hasil)
		   await limitAdd(sender)
		   break
				case 'pbucin':
				if (!isRegistered) return reply(ind.noregis())
           			if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Mana Nama?')
				rate = body.slice(8)
				const pbucin = persenbucin[Math.floor(Math.random() * persenbucin.length)]
				client.sendMessage(from, 'Persen Bucin Kak: *'+rate+'*\n\nJawaban : '+ pbucin +'', text, { quoted: mek })
				await limitAdd(sender) 
				break 
					
					case 'quotes':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.zeks.xyz/api/quote?apikey=${zeksapi}`, {method: 'get'})
					reply(anu.result.quotes)
					await limitAdd(sender)
					break
					case 'quoteanime':
				if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
			data = await fetchJson(`https://videfikri.com/api/anime/randomquoteanime`, {method: 'get'}) 
			nim = data.result 
			teks = `➸ Anime: ${nim.anime}\n*➸ Karakter*: ${nim.karakter}\n*➸ quote:* ${nim.quote}`
			client.sendMessage(from, teks, text, {quoted: mek})
			break
			case 'pantun':
			if (!isRegistered) return reply(ind.noregis())
           		if (isLimit(sender)) return reply(ind.limitend(pusname))
			anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/pantun`, {method: 'get'})
			client.sendMessage(from, `${anu.result}`, text, {quoted: mek})
			await limitAdd(sender) 
			break  
		case 'fitnah':
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))				
		if (!isGroup) return reply(ind.groupo())                 
				if (args.length < 1) return reply(`Gini kak : ${prefix}fitnah [@tag&pesan&balasanbot]\n\nContoh : ${prefix}fitnah @tagmember&hai&hai juga`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("&")[0];
					var target = gh.split("&")[1];
					var bot = gh.split("&")[2];
					client.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
					case 'ntahlah':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query={body.slice(11)}&apikey=${apivhtear}`, {method: 'get'})
					var inu = JSON.parse(JSON.stringify(anu.result));
					var uni =  inu[Math.floor(Math.random() * inu.length)];
					nye = await getBuffer(uni)
					client.sendMessage(from, nye, image, { caption: 'Inu!!', quoted: mek })
					break
	case 'hobby':
           if (!isRegistered) return reply(ind.noregis())
           if (isLimit(sender)) return reply(ind.limitend(pusname))
					hobby = body.slice(1)
					const hob =['Desah Di Game','Ngocokin Doi','Stalking sosmed nya mantan','Kau kan gak punya hobby awokawok','Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri','Nonton Wibu']
					const by = hob[Math.floor(Math.random() * hob.length)]
					client.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					break
					
					case 'meme':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
		    meme = await fetchJson('https://kagchi-api.glitch.me/meme/memes', { method: 'get' })
		    buffer = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
		    client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Cringe is pilihan'})
		    await limitAdd(sender)
		    break
		    
				case 'memeindo':    
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				reply(ind.wait)
					memein = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=${zeksapi}`)
					buffer = await getBuffer(memein.result)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'hargai meski cringe :v'})
					await limitAdd(sender)
					break 
					
					case 'memen':
					meme = await kagApi.memes()
					buffer = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
					
					case 'memein':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/${memein.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
					
		case 'kisahnabi':
		if (!isRegistered) return reply(ind.noregis())
           	if (isLimit(sender)) return reply(ind.limitend(pusname))
		kisah = `${body.slice(11)}`
		nabi = await fetchJson(`https://onlydevcity.herokuapp.com/api/kisahnabi?nabi=${kisah}&apikey=onlyonedeveloper`, {method: 'get'})
		hasil = `*Nabi: ${nabi.result.nabi.nabi}\nTahun Lahir: ${nabi.result.nabi.lahir}\nUmur: ${nabi.result.nabi.umur}\nTempat: ${nabi.result.nabi.tempat}*\n\n*Kisah: *${nabi.result.nabi.kisah}`
		client.sendMessage(from, hasil, text)
		await limitAdd(sender)
		break

		case 'caklontong':
                if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/kuis/caklontong?apikey=${devcityapi}`, {method: 'get'})
					caklontong = `*${anu.result.soal}*`
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban+ '\n\n• Penjelasan: *'+ anu.result.deskripsi+'*', text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, caklontong, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
			case 'family100':
                if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`https://api.vhtear.com/family100&apikey=${apivhtear}`, {method: 'get'})
					family = `*${anu.result.soal}*`
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, family, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
				case 'tebakin':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://videfikri.com/api/tebakgambar/`, {method: 'get'})
					ngebuff = await getBuffer(anu.result.soal_gbr)
					tebak = `➸ Jawaban : *${anu.result.jawaban}*`
					setTimeout( () => {
					client.sendMessage(from, tebak, text, {quoted: mek})
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, ngebuff, image, { caption: '_Tebak bro!!! gak bisa jawab donasi ya:v_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
		/*<==========================================[AKHIR GABUT/SIMPLE MENU]==============================================>*/
					
         	case 'speed':
                case 'ping':
                const timestamp = speed();
                const latensi = speed() - timestamp 
                client.sendMessage(from, `Speed: ${latensi.toFixed(4)} _Second_`, text, { quoted: mek})
                break
case 'help': 
case 'menu':
case 'openmenu':
if (!isRegistered) return reply(ind.noregis())
const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
const uangku = checkATMuser(sender)
try {
	buffer = fs.readFileSync('./src/imenu.png')
} catch {
	buffer = await getBuffer(`https://imgur.com/a/M9oiU76`)
}

runtime = process.uptime()
teks = `${kyun(runtime)}`
//result = fs.readFileSync('sticker/iky.ekif')
var itsme = `${numer}@s.whatsapp.net`
var split = `${cr}`
// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
const bruhhhh = {
	contextInfo: {
		participant: itsme,
			quotedMessage: {
				extendedTextMessage: {
					text: split,
						}
					}
				}
			}

dftr = `
╭══─⊱ ❰ *ABOUT USER* ❱ ⊰─══
╠☞ *Nama* : ${pushname}
╠☞ *Nomer* : wa.me/${sender.split("@")[0]}
╠☞ *Uang mu* : Rp${uangku}
╠☞ *XP* : ${getLevelingXp(sender)}/${reqXp}
╠☞ *Level* : ${getLevelingLevel(sender)}
╠☞ *User register* : ${_registered.length}
╰════─⊱  ⸨ *Taufik - Kun* ⸩  ⊰─════╯

           Rules - Simple
▬▭▬▭▬▭▬▭▬▭▬▭▬
●⧐ *Spam : Auto Block!*
●⧐ *telpon/chat bot block*
●⧐ *Beri Jeda 5detik Saat Menggunakannya!!*
●⧐ *Bug/Error Harap Cht Owner!*
●⧐ *Harap Sabar Dengan Bug²nya!*
●⧐ *Gunakan Bot Sebaik-baiknya!*
▬▭▬▭▬▭▬▭▬▭▬▭▬
⚠️ *_Donasi lah_* ⚠️
*${prefix}donasi*
*${prefix}owner*
*${prefix}ingfo*
*${prefix}bot*
*${prefix}profile*
*${prefix}bahasa*

*-=[Bot Bukan Untuk Orang Baperan]=-*
╭══─⊱ ❰ *MAKER MENU* ❱ ⊰─══➤
╠☞ *${prefix}sticker* (jika video max. 9det)
╠☞ *${prefix}stickerhide* 
╠☞ *${prefix}silktext* [text]
╠☞ *${prefix}glitch* [text/text]
╠☞ *${prefix}coffe* [text]
╠☞ *${prefix}coffe2* [text]
╠☞ *${prefix}attp* [text]
╠☞ *${prefix}galaxytext* [text]
╠☞ *${prefix}textsky* [text]
╠☞ *${prefix}phlogo* [text / text]
╠☞ *${prefix}ytcomment* [text / text]
╠☞ *${prefix}pubg* [text / text]
╠☞ *${prefix}makequote* [text | watermark]
╠☞ *${prefix}hartatahta* [text]
╠☞ *${prefix}*lovemsg* [text]
╠☞ *${prefix}smoke* [text]
╠☞ *${prefix}logoepep* [text]
╠☞ *${prefix}wolflogo* [text / text]
╠☞ *${prefix}logogaming* [text]
╠☞ *${prefix}nulis* [nama / kelas / text]
╠☞ *${prefix}toimg*
╠☞ *${prefix}trigger*
╠☞ *${prefix}wasted*
╠☞ *${prefix}wanted* [nama / text]
╠☞ *${prefix}nightbeach*
╠☞ *${prefix}kalender*
╠☞ *${prefix}ocr*
╠☞ ~${prefix}ttp~
╠☞ ~${prefix}kuncitext~
║
╠══─⊱ ❰ *FUN MENU* ❱ ⊰─════➤
╠☞ *${prefix}jankenpom* [pilihanmu]
╠☞ *${prefix}mancing* 
╠☞ *${prefix}mutual*
╠☞ *${prefix}next*
╠☞ *${prefix}mining* 
╠☞ *${prefix}bisakah* [question]
╠☞ *${prefix}kapankah* [question]
╠☞ *${prefix}apakah* [question]
╠☞ *${prefix}seberapagay* [nama]
╠☞ *${prefix}rate* [question]
╠☞ *${prefix}truth*
╠☞ *${prefix}dare*
╠☞ *${prefix}tebalik* [text]
╠☞ *${prefix}say* [text]
╠☞ *${prefix}hobby* [nama]
╠☞ *${prefix}watak* [nama]
╠☞ *${prefix}fitnah* [tag & text & balasan}
╠☞ *${prefix}ntahlah*
╠☞ *${prefix}slap*
╠☞ *${prefix}babi*
╠☞ *${prefix}cekganteng*
╠☞ *${prefix}cekcantik*
╠☞ *${prefix}katailham*
╠☞ *${prefix}caklontong*
╠☞ *${prefix}family100*
╠☞ *${prefix}tebakin*
╠☞ *${prefix}faktaunik*
╠☞ *${prefix}kbbi* [text]
╠☞ *${prefix}artinama* [nama]
╠☞ *${prefix}memeindo*
╠☞ *${prefix}moddroid* [judul]
╠☞ *${prefix}happymof* [judul]
╠☞ *${prefix}ping*
╠☞ *~${prefix}tampar~ (Error)*
║
╠══─⊱ ❰ *MEDIA MENU* ❱ ⊰─═══➤
╠☞ *${prefix}beritahoax*
╠☞ *${prefix}brainly* [question]
╠☞ *${prefix}wiki* [question]
╠☞ *${prefix}jadwalsholat* [tempat]
╠☞ *${prefix}kisahnabi* [nama]
╠☞ *${prefix}quran*
╠☞ *${prefix}pantun*
╠☞ *${prefix}pinterest* [judul]
╠☞ *${prefix}wpmuntainview*
╠☞ *${prefix}tts*
║    contoh : #tts id MiKako yang tampan
╠☞ *${prefix}play* [judul]
╠☞ *${prefix}lirik* [judul]
╠☞ *${prefix}chord* [judul]
╠☞ *${prefix}tomp3*
╠☞ *${prefix}ytmp3* [link]
╠☞ *${prefix}yutubdl* [link]
╠☞ *${prefix}ssweb* [link]
╠☞ *${prefix}qrcode* [link]
╠☞ *${prefix}map* [tempat]
╠☞ *${prefix}stalkig* [username]
╠☞ *${prefix}qrcode* [link]
╠☞ *${prefix}randomkpop*
╠☞ *${prefix}wait*
╠☞ *${prefix}img2url*
║    
╠══─⊱ ❰ *DUNIA WIBU* ❱ ⊰─═══➤
╠☞ *${prefix}wibu*
╠☞ *${prefix}husbu*
╠☞ *${prefix}waifu*
╠☞ *${prefix}couple*
╠☞ *${prefix}loli*
╠☞ ~${prefix}loli2~
╠☞ *${prefix}shota*
╠☞ *${prefix}neko*
╠☞ ~${prefix}nekopoi~
╠☞ *${prefix}nekonime*
╠☞ *${prefix}ranime*
╠☞ *${prefix}anime*
╠☞ *${prefix}randomhentong*
╠☞ *${prefix}baka*
╠☞ *${prefix}nangis
╠☞ *${prefix}blowjob*
╠☞ *${prefix}nsfwloli*
╠☞ *${prefix}nsfwneko*
╠☞ *${prefix}hentai*
╠☞ *${prefix}yuri*
╠☞ *${prefix}animekiss*
╠☞ *${prefix}kusonime* [judul]
║    
║───────⟪  CHARACTER ANIME ⟫───────
║  
╠☞ *${prefix}naruto*
╠☞ *${prefix}boruto*
╠☞ *${prefix}sasuke*
╠☞ *${prefix}hinata*
╠☞ *${prefix}sakura*
╠☞ *${prefix}minato*
╠☞ *${prefix}kurumi*
╠☞ *${prefix}miku*
╠☞ *${prefix}megumin*
╠☞ *${prefix}shinobu*
║ 
╠══─⊱ ❰ *LIMIT MENU* ❱ ⊰─═══➤
╠☞ *${prefix}limit*
╠☞ *${prefix}buylimit* [jumlah]
╠☞ *${prefix}dompet*
╠☞ *${prefix}transfer* [nomor | jumlah]
╠☞ *${prefix}jualikan* [jumlah]
╠☞ *${prefix}ikanku*
║
╠══─⊱ ❰ *NSFW MENU* ❱ ⊰─═══➤
╠☞ *${prefix}pokemon*
╠☞ *${prefix}anjing*
║
╠══─⊱ ❰ *GROUP MENU* ❱ ⊰─══➤
╠☞ *${prefix}hidetag*
╠☞ *${prefix}grouplist*
╠☞ *${prefix}level*
╠☞ *${prefix}leaderboard*
╠☞ *${prefix}linkgc*
╠☞ *${prefix}tagall*
╠☞ *${prefix}delete*
╠☞ *${prefix}setpp*
╠☞ *${prefix}add* [nomor]
╠☞ *${prefix}kick* [tag]
╠☞ *${prefix}setname* [nama]
╠☞ *${prefix}setdesc* [text]
╠☞ *${prefix}demote* [tag]
╠☞ *${prefix}promote* [tag]
╠☞ *${prefix}listadmin*
╠☞ *${prefix}lstbadword*
╠☞ *${prefix}addbadword* [text]
╠☞ *${prefix}delbadword* [text]
╠☞ *${prefix}antibadword* [on/off]
╠☞ *${prefix}antilink* [1/0]
╠☞ *${prefix}group* [buka/tutup]
╠☞ *${prefix}leveling* [enable/disable]
╠☞ *${prefix}nsfw* [1/0]
╠☞ *${prefix}welcome* [1/0]
║
╠══─⊱ ❰ *OWNER MENU* ❱ ⊰─══➤
╠☞ *${prefix}bc* [text]
╠☞ *${prefix}bcgc* [text]
╠☞ *${prefix}kickall* Mau Ngapain Tod? >:
╠☞ *${prefix}setreply*
╠☞ *${prefix}setprefix*
╠☞ *${prefix}clearall*
╠☞ *${prefix}resetlimit*
╠☞ *${prefix}block* [nomor]
╠☞ *${prefix}unblock* [nomor]
╠☞ *${prefix}listblock*
╠☞ *${prefix}totaluser*
╠☞ *${prefix}leave*
╠☞ *${prefix}event* [1/0]
╠☞ *${prefix}clone* [tag]
╠☞ *${prefix}setppbot*

╠══─⊱ ❰ *THANGKS TO* ❱ ⊰─══➤
║
╠☞ *Botol - LoL*
╠☞ *Reyna*
╠☞ *Damar*
╠☞ *Yuno*
╠☞ *★Taufik - Kun★*
╰════─⊱  ⸨ *MiKako⚔️* ⸩  ⊰─════╯
`
client.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "★彡[Bot͢͢͢oℓ]彡 *•* MiKako★ ", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('storage/image/takagi-san.jpeg')}}}, caption: `${dftr}`})
break
//client.sendMessage(from, buffer, image, {quoted: mek, caption: dftr})
//await costum(ind.menu(pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku), text, tescuk, cr)
//break
					
				case 'donasi':
				case 'donate':
				if (!isRegistered) return reply(ind.noregis())
					client.sendMessage(from, donasi(), text)
					break
                case 'level':
		case 'lvl':
                if (!isRegistered) return reply(ind.noregis())
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `┏━━❉ *LEVEL* ❉━━\n┣⊱ *Nama* : ${pushname}\n┣⊱ Nomor : wa.me/${sender.split("@")[0]}\n┣⊱ User XP :  ${userXp}/${requiredXp}\n┣⊱ User Level : ${userLevel}\n┗━━━━━━━━━━━━`
               client.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
					break
				case 'leaderboard':
				case 'lb':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
                let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom++
                        leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n┗⊱ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
                        leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n┣⊱ *Uang*: _Rp${uang[i].uang}_\n`
                    }
                    await reply(leaderboardlvl)
                    await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`minimal 10 user untuk bisa mengakses database`)
                }
					break
					case 'info':
					case 'ingfo':
					case 'ingfokan':
					me = client.user
					uptime = process.uptime()
					teks = `*Nama bot* : ${me.name}\n*OWNER* : *MiKako*\n*AUTHOR* : Taufik-Kun\n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block Contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
				case 'blocklist': 
					teks = '𝗕𝗟𝗢𝗖𝗞 𝗟𝗜𝗦𝗧 :\n'
					for (let block of blocked) {
						teks += `┣➢ @${block.split('@')[0]}\n`
					}
					teks += `𝗧𝗼𝘁𝗮𝗹 : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
                case 'hidetag':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					await limitAdd(sender)
					break
            
		case 'makequote':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                var gh = body.slice(11)
					var quote = gh.split("|")[0];
					var wm = gh.split("|")[1];
					const pref = `Usage: \n${prefix}quotemaker teks|watermark\n\nEx :\n${prefix}quotemaker ini contoh|bicit`
					if (args.length < 1) return reply(pref)
					reply(ind.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {caption: 'Nih anjim', quoted: mek})
					await limitAdd(sender)
					break
                    case 'truth':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					await limitAdd(sender)
					break
				case 'dare':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					await limitAdd(sender)
					break	
		case 'ssweb':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Urlnya mana om')
					teks = body.slice(7)
					reply(ind.wait())
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
					buffer = await getBuffer(anu.gambar)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
/*<==========================================[NSFW MENU]==============================================>*/
					
                case 'pokemon':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
                case 'anjing':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'cersex':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
                   anu = await fetchJson(`https://api.vhtear.com/cerita_sex&apikey=${apivhtear}`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   sex = await getBuffer(anu.result.image)
                   reply (ind.wait)
                   cerita = `• *Judul:* ${anu.result.judul}\n\n${anu.result.cerita}`
                   client.sendMessage(from, sex, image, {quoted: mek, caption: cerita})
                   await limitAdd(sender) 
                   break 
					
		/*case '1cak':
		try {
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (!isGroup) return reply(ind.groupo())
		if (!isNsfw) return reply(ind.nsfwoff())
			res = await fetchJson(`https://st4rz.herokuapp.com/api/1cak`, {method: 'get'})
			buffer = await getBuffer(res.result)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
			} catch (e) {
			console.log(`Error :`, color(e,'red'))
			reply(ind.wrongf())
			}
			await limitAdd(sender)
			break*/
/*<==========================================[AKHIR NSFW MENU]==============================================>*/

/*<==========================================[MUSIC&MEDIA MENU]==============================================>*/
		case 'chord':
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pushname))
                anu = await fetchJson(`https://tobz-api.herokuapp.com/api/chord?q=${body.slice(7)}&apikey=${TobzKey}`)
                client.sendMessage(from, anu.result, text, {quoted:mek})
                break
		case 'tomp3':
                if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pushname))
		if (isNoMedia) return reply(ind.nomed)
                	client.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('_*Reply Video nya Gan!*_')
					reply(ind.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
						bufferlkj = fs.readFileSync(ran)
						client.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender) 
					break 

		case 'fb':
		client.updatePresence(from, Presence.composing)
		if (isNoMedia) return reply(ind.nomed)
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pushname))
		reply(ind.wait)
					vid = body.slice(4)
					reply(ind.wait)
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/fbdownloadervideo?url=${vid}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					client.sendMessage(from, '[ WAIT ] Sedang Diproses\n\nLinknya Only Google Gan Biar Bisa Didownload', text, {quoted: mek})
					efbe = `*[ ❗ WAIT ❗ ]* DIPROSES DUMLU YAKAN...`
					client.sendMessage(from, efbe, text, {quoted: mek})
					buffer = await getBuffer(anu.resultHD)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: 'Nih Gan'})
					await limitAdd(sender) 
					break 
                case 'ytmp4':
    		if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (isNoMedia) return reply(ind.nomed)
					if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('youtu.be')) return reply(ind.error.Iv)
					anu = await fetchJson(`https://api.vhtear.com/ytdl?link=${args[0]}&apikey=${apivhtear}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					ytt = `「 *YOUTUBE MP4 DOWNLOADER* 」\n\n• Title : *${anu.result.title}*\n• *Size:* ${anu.result.size}\n• *Link:* https://www.youtu.be/${anu.result.id}\n\n Tunggu Sebentar 1 menit Mungkin Agak Lama Karna Mendownload Video`
					buff = await getBuffer(anu.result.imgUrl)
					reply(ind.wait)
					buffer = await getBuffer(anu.result.UrlVideo)
					client.sendMessage(from, buff, image, {quoted: mek, caption: ytt})
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek, caption: 'Nih Anjim'})
					await limitAdd(sender) 
					break 

				case 'ytmp3':
                    if (!isRegistered) return reply(ind.noregis())
                    if (!isPrem) return reply(ind.premon(pushname))
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.wrogf())
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ytmp3?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Size* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					await limitAdd(sender)
					break
				case 'lirik':    
               			if (!isRegistered) return reply(ind.noregis())
              			if (isLimit(sender)) return reply(ind.limitend(pusname))
                		reply(ind.wait)
					teks = body.slice(7)
					anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${teks}`, {method: 'get'})
					reply('Lirik dari lagu '+teks+' adalah :\n\n'+anu.result.lirik)
					await limitAdd(sender) 
					break 
					
					case 'yutubdl':
					if (!isRegistered) return reply(ind.noregis())
              				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isMedia) return reply(ind.nomed)
					if (args.length < 1) return reply('Urlnya mana um?')
					if (!isRegistered) return reply(ind.noregis())
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('URL NYA TIDAK VALID KAK')				
					anu = await fetchJson(`https://videfikri.com/api/ytmp4/?url=${body.slice(9)}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*➸ JUDUL* : ${anu.result.judul}\n\n*[WAIT] Proses Dumlu Yakan*`
					thumb = await getBuffer(anu.result.imgUrl)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result.UrlVideo)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
					break

		case 'play':
                if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (isNoMedia) return reply(ind.nomed)
                data = await fetchJson(`https://videfikri.com/api/ytplay/?query=${body.slice(6)}`, {method: 'get'})
               	if (data.error) return reply(data.error)
                infomp3 = ` *PLAY* \n*Judul* : ${data.result.title}\n*Duration* : ${data.result.duration}\n*Filesize* : ${data.result.size}\n\n*[ WAIT ] Di PROSES DUMLU YEKAN....*`
                bufferddd = await getBuffer(data.result.thumbnail)
                lagu = await getBuffer(data.result.url)
                client.sendMessage(from, bufferddd, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek})
		await limitAdd(sender)
                break
					
		case 'film':
		if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (args.length < 1) return reply('Mau Cari Film Apa?')
		reply(ind.wait)
		anu = await fetchJson(`https://api.vhtear.com/downloadfilm?judul=${body.slice(6)}&apikey=${apivhtear}`, {method: 'get'})
		if (anu.error) return reply(anu.error)
		film = `• Judul: *${anu.result.judul}*\n• Resolusi: *${anu.result.data.resolusi}*\n• Link Download: *${anu.result.data.urlDownload}*\n`
		client.sendMessage(from, film, text, {quoted: mek})
		await limitAdd(sender) 
		break 
					
		case 'stalkig':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                     teks = body.slice(9)
                     anu = await fetchJson(`https://tobz-api.herokuapp.com/api/stalk?username=${teks}&apikey=${TobzKey}`, {method: 'get'})
                     reply('「❗」Sabar Lagi Stalking IG nya kak')
                     buffer = await getBuffer(anu.Profile_pic)
                     hasil = `YAHAHA TELAH DI STALK BOS KU UNTUK USERNAME ${teks} \n\n *Username?* : _${anu.Username}_ \n *Nama??* : _${anu.Name}_ \n *Jumlah Follower??﹦?* : _${anu.Jumlah_Followers}_ \n *Jumlah Following?* : _${anu.Jumlah_Following}_ \n *Jumlah Post?* : _${anu.Jumlah_Post}_ \n *Biografi?? :* _${anu.Biodata}`
                    client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                    await limitAdd(sender)
		break 
					
					case 'instaimg':
 				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(ind.error.lv)
				    anu = await fetchJson(`https://alfians-api.herokuapp.com/api/ig?url=${args[0]}`, {method: 'get'})
				    insta = getBuffer(anu.result)
				    reply(ind.wait)
				    client.sendMessage(from, insta, image, {quoted: mek})
				    await limitAdd(sender) 
				    break  
					
				case 'instavid':
				if (!isRegistered) return reply(ind.noregis())
                   		if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(ind.error.lv)
				    anu = await fetchJson(`https://alfians-api.herokuapp.com/api/ig?url=${args[0]}`, {method: 'get'})
				    insta = getBuffer(anu.result)
				    reply(ind.wait)
				    client.sendMessage(from, insta, video, {mimtype: 'video/mp4', filename: 'instagram'.mp3, quoted: mek})
				    await limitAdd(sender) 
				    break  
				    
				case 'instastory':
				if (!isRegistered) return reply(ind.noregis())
                   		if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('username??')
				instor = `${body.slice(12)}`
				anu = await fetchJson(`https://api.vhtear.com/igstory?query=${instor}&apikey=${apivhtear}`, {method: 'get'})
				insta = '=========================\n'
				for (let i of anu.result) {
				insta += `• *User:* ${anu.result.owner_username}\n• *Type:* ${i.story.itemlist.type}\n• *Link:* ${i.story.itemlist.urlDownload}\n=========================\n`
				}
				reply(insta.trim())
				await limitAdd(sender)
				break
					
				case 'fototiktok':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                    			gatauda = body.slice(12)
                    			anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tiktokpp?user=${gatauda}` , {method: 'get'})
			        	buff = await getBuffer(anu.result)
                    			reply(buff)
			       		await limitAdd(sender)
					break
/*<==========================================[AKHIR MUSIC&MEDIA MENU]==============================================>*/
					
                
			    
			    
                case 'kbbi':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('Menurut Kbbi:\n\n'+anu.result)
					await limitAdd(sender)
					break
                case 'artinama':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(10)}`, {method: 'get'})
					reply('Menurut nama:\n\n'+anu.result)
					await limitAdd(sender)
					break
			case 'img2url':
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pushname))
			reply(ind.wait)
            var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            var media = await  client.downloadAndSaveMediaMessage(encmedia)
            var imgbb = require('imgbb-uploader')
            imgbb('bfe53fe15a978cf1938d96123f065206', media)
                .then(data => {
                    var caps = `「 *IMAGE TO URL* 」\n\n*╠➥  ID :* ${data.id}\n*╠➥  MimeType :* ${data.image.mime}\n*╠➥  Extension :* ${data.image.extension}\n\n*╠➥  URL :* ${data.display_url}`
                    ibb = fs.readFileSync(media)
                     client.sendMessage(from, ibb, image, { quoted: mek, caption: caps })
                })
                .catch(err => {
                    throw err
                })
            await limitAdd(sender) 	
            break  
			//tools
			case 'qrcode':
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			const tex = encodeURIComponent(body.slice(8))
			if (!tex) return client.sendMessage(from, 'MASUKAN URL/TEKS UNTUK DI JADIKAN QR', text, {quoted: mek})
			const buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
			client.sendMessage(from, buff, image, {quoted: mek})
			await limitAdd(sender)
			break
				case 'moddroid':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=${TobzKey}`)
			hepi = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*publisher*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*latest version*: ${hepi.latest_version}\n*genre*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
				case 'happymod':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=${TobzKey}`)
			hupo = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*version*: ${hupo.version}\n*size:* ${hupo.size}\n*root*: ${hupo.root}\n*purchase*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
				case 'translate':
				case 'translete':
				case 'ts':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				    if (args.length < 1) return client.sendMessage(from, 'Kode Bahasanya???', text, {quoted: mek})
				    if (args.length < 2) return client.sendMessage(from, 'Text Yg Mau Di translate??', text, {quoted: mek})
				    ts = body.slice(11)
				    kode = ts.split("/")[0]
				    teks = ts.split("/")[1]
				    anu = await fetchJson(`https://api.arugaz.my.id/api/edu/translate?lang=${kode}&text=${teks}`)
				    reply(ind.wait)
				    translate = `Text Asli: *${body.slice(11)}*\n\nHasil: *${anu.text}*`
				    client.sendMessage(from, translate, text, {quoted: mek})
				   await limitAdd(sender)
				   break 
				case 'ocr': 
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('kirim foto dengan caption ${prefix}𝗼𝗰𝗿')
					}
					await limitAdd(sender)
					break
					
				case 'stiker':
				case 'sticker':
				case 'stick':
				case 's':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply("terjadi kesalahan, reply gambarnya!")
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('BOT', authorname)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply('terjadi kesalahan, reply gambarnya')
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
								/*client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('BOT', authorname)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(ind.error.stick)
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
								/*client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(ind.wait)
						keyrmbg = 'kX7ctdkQviRbxw7FRKtk5ZVf'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(ind.error.stick)
								exec(`webpmux -set exif ${addMetadata('BOT', authorname)} ${ranw} -o ${ranw}`, async (error) => {
									if (error) return reply(ind.error.stick)
									client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
									fs.unlinkSync(ranw)
								})
								//client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
					}
					break
					
				
					case 'nobg2':
                                     
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         owgi = await client.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.display_url}`
                                        ranpp = getRandom('.png')
                                        ranop = getRandom('.webp')
                                        anu1 = await fetchJson(`https://api.vhtear.com/removebgwithurl?link=${teks}&apikey=Aris komtol`, {method: 'get'})
                                         exec(`wget ${anu1.result.image} -O ${ranpp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranop}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(ranop)
                                                client.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(ranop)
})
                                          } else {
                                                 reply('Gunakan foto!')
                                          }
                                        break
					
				case 'tts':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return baby.sendMessage(from, 'Kode bahasanya mana kak? contoh : ${prefix}tts id mending nonton wibu', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, `Teksnya mana kak | contoh : ${prefix}tts id ah yamete kudasai`, text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? reply('Teks nya terlalu panjang kak')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
					break
					
					case 'stickerhide':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    	ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/screed?text=${args[0]}`,{method: 'get'})
					exec(`wget ${anu} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					
				case 'bahasa':
				if (!isRegistered) return reply(ind.noregis())
			 	if (isLimit(sender)) return reply(ind.limitend(pusname))
					client.sendMessage(from, bahasa(), text)
					await limitAdd(sender)
					break
					
					case 'biografiowner':
					client.sendMessage(from, biografi(), text)
					await limitAdd(sender)
					break
					
					case 'ttp':
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/ttp?text=${body.slice(5)}&apikey=BotWeA`)
				res = await getBase64(anu.base64)
				client.sendMessage(from, res, sticker, {quoted:mek})
				break
					
					case 'ttp2': 
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					pngttp = './tmp/ttp.png'
					webpng = './tmp/ttp.webp'
					const ttptext = body.slice(5)
					fetch(`https://api.areltiyan.site/sticker_maker?text=${ttptext}`, { method: 'GET'})
					.then(async res => {
					const ttptxt = await res.json()
					base64Img.img(ttptxt.base64, 'tmp', 'ttp', function(err, filepath) {
					if (err) return console.log(err);
					exec(`ffmpeg -i ${pngttp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${webpng}`, (err) => {
					buffer = fs.readFileSync(webpng)
					client.sendMessage(from, buffer, sticker)
					fs.unlinkSync(webpng)
					fs.unlinkSync(pngttp)
					})
					})
					});
				break
			
				case 'ttp3d':
				if (!isRegistered) return reply(ind.noregis())
			 	if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('yang mau dijadiin text sticker apaan, titit kah?')
                    			teks = `${body.slice(7)}`
                    			if (teks.length > 10) return client.sendMessage(from, 'Teksnya kepanjangan Bambank', text, {quoted: mek})
                    			buffing = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=${zeksapi}&text=${teks}`, {method: 'get'})
					var imgbb = require('imgbb-uploader')
                                         anu = await imgbb("718078e929dfa75e7612e23d70d8dad7", buffing)
                                        teks = `${anu.display_url}`
                                        ranpp = getRandom('.png')
                                        ranop = getRandom('.webp')
                                        anu1 = await fetchJson(`https://videfikri.com/api/imgbb/?urlgbr=${teks}`, {method: 'get'})
                                         exec(`wget ${anu1.url} -O ${ranpp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranop}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(ind.error.stick)
                                                nobg = fs.readFileSync(ranop)
                                                client.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(ranop)
                                          })
                                        break
			
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					prefix = args[0]
					reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
					break 
				case 'tiktokstalk':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				try {
						if (args.length < 1) return client.sendMessage(from, '𝘂𝘀𝗲𝗿𝗻𝗮𝗺𝗲 𝗺𝗮𝗻𝗮 ?', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(ind.wait())
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('[𝗘𝗥𝗥𝗢𝗥] 𝗸𝗲𝗺𝘂𝗻𝗴𝗸𝗶𝗻𝗮𝗻 𝘂𝘀𝗲𝗿𝗻𝗮𝗺𝗲 𝘁𝗶𝗱𝗮𝗸 𝘃𝗮𝗹𝗶𝗱')
					}
					await limitAdd(sender)
					break
					
                 			case 'linkgc':
				    	if (!isGroup) return reply(ind.groupo())
				    	if (isLimit(sender)) return reply(ind.limitend(pusname))
				    	if (!isBotGroupAdmins) return reply(ind.badmin())
				    	linkgc = await client.groupInviteCode (from)
				    	yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				   	client.sendMessage(from, yeh, text, {quoted: mek})
			        	await limitAdd(sender)
					break
					
					case 'tagall':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `┣➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
					
					case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
					
			       		case 'block':
				 	client.updatePresence(from, Presence.composing) 
				 	client.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					client.blockUser (`${body.slice(7)}@c.us`, "add")
					client.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
					
                    			case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    	client.blockUser (`${body.slice(9)}@c.us`, "remove")
					client.sendMessage(from, `Perintah diterima, Membuka ${body.slice(9)}@c.us`, text)
					break
					
					case 'leave': 
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					await client.sendMessage(from, buffer, image, {caption: 'nice to meet you all. But i would leave from this group.\n*sayonara~*\n\n*cheers:* Botol LoL ^w^'}).then (() => client.groupLeave(from))
					break 
					
					case 'totaluser':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.only.ownerb())    
					teks = `╭────「 *TOTAL USER ${_registered.name}* 」\n`
					user = `${_registered.name}`
					no = 0
					for (let hehehe of user) {
						no += 1
						teks += `[${no.toString()}] @${hehehe.split('@')[0]}\n`
					}
					teks += `│+ Total Pengguna : ${_registered.length}\n╰──────⎿ *${_registered.name}* ⏋────`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": user}})
					break
					
			case 'delete':
			case 'del':
			case 'd':
			if (!isGroup) return reply(ind.groupo())
                        if (!isGroupAdmins) return reply(ind.admin())
                        if (!isBotGroupAdmins) return reply(ind.badmin())
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
					case 'leave': 
				if (!isGroup) return reply(ind.groupo())
				if (!isOwner) return reply(ind.ownerb())
				await reply(from, 'bye').then(() => client.groupLeave(from))
					break 
				case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `❮ 𝙋𝙀𝙎𝘼?? 𝘽??𝙊𝘼𝘿𝘾𝘼𝙎𝙏 ❯\n\n${body.slice(4)}`})
						}
						reply('*_succes broadcast_* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST BOT 」*\n\n${body.slice(4)}`)
						}
						reply('*_succes broadcast_* ')
					}
					break
			   	case 'setpp': 
                        if (!isGroup) return reply(ind.groupo())
                       if (!isGroupAdmins) return reply(ind.admin())
                        if (!isBotGroupAdmins) return reply(ind.badmin())
                       media = await client.downloadAndSaveMediaMessage(mek)
                         await client.updateProfilePicture (from, media)
                        reply('SUCCESS CHANGE PROFILE GROUP')
					break						
				case 'add':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
					case 'grup':
					case 'group':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break      
            case 'admin':
            case 'owner':
            case 'creator':
                  client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                  client.sendMessage(from, 'Tuh nomer owner ku >_<, jangan spam atau ku block kamu',MessageType.text, { quoted: mek} )
					break    
           	case 'setname':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateSubject(from, `${body.slice(9)}`)
                client.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: mek})
					break
                case 'setdesc':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateDescription(from, `${body.slice(9)}`)
                client.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: mek})
					break
           				case 'demote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Status adminmu dicopot. Makanya jan jadi sider🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`YA YAHYA WAHYU @${mentioned[0].split('@')[0]} Jabatan adminmu di copt, Makanya jan jadi sider🏃`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Selamat🥳 anda naik menjadi admin grub (+_+) :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`selamat🥳 @${mentioned[0].split('@')[0]} anda naik menjadi admin grub (+_+)`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break	
			     	case 'kick':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `asek dapat makanan,otw mengkickmu, 🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`asek dapat makanan,otw mengkickmu, @${mentioned[0].split('@')[0]} 🏃`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
					
					//BIKIN CASE NYA
					//COCOKIN SM SC MU
				case 'addprem':
				if (!isOwner) return reply(ind.ownerb()) //owner only
				expired = "30d"
				if (args.length < 1 ) return reply(' tag member')
				mente = `${args[0].replace('@','')}@s.whatsapp.net`
				const pnom = {id: mente , expired: Date.now() + toMs(expired) }
				prem.push(pnom) 
				fs.writeFileSync('./database/user/prem.json',JSON.stringify(prem))
				reply(ind.premadd(args[0])) //nah ini tambahin pesannya 
				break
				
				case 'delprem':
				if (!isOwner) return reply(ind.ownerb())
				if (args.length < 1 ) return reply(' tag member')
				mente = `${args[0].replace('@','')}@s.whatsapp.net`
 			   for( var i = 0; i < arr.length; i++){ 
 		       if ( arr[i] === mente) { 
    		      	  arr.splice(i, 1); 
      		   	  i--; 
      				fs.writeFileSync('./database/user/prem.json',JSON.stringify(arr))
       			 }
 			    }
				reply(ind.dellprem(args[0])) //ini juga
				break 
					
			case 'premlist':
	            case 'listprem':
	                if (!isRegistered) return reply( ind.noregis())
	                let listPremi = '「 *PREMIUM USER LIST* 」\n\n'
	                let nomorList = 0
	                const deret = getAllPremiumUser()
	                const arrayPremi = []
	                for (let i = 0; i < deret.length; i++) {
	                    const checkExp = ms(getPremiumExpired(deret[i]) - Date.now())
	                    arrayPremi.push(getAllPremiumUser()[i])
	                    nomorList++
	                    listPremi += `${nomorList}. wa.me/${getAllPremiumUser()[i].split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
	                }
	                await reply(listPremi)
	           	 break
					
					case 'checkprem':
				const cekExp = ms(getPremiumExpired(sender) - Date.now())
				reply(`*「 PREMIUM EXPIRED 」*\n\n➸ *ID*: ${sender.split('@')[0]}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
				break
			
					case 'kicktime':
					case 'hedshot':
					case 'headshoot':
					if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di headshoot palanya!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					setTimeout( () => {
					client.sendMessage(from, 'Malah PBan ajg!!!', text)
					}, 8000)
					setTimeout( () => {
					reply('Boom, Headshoot!')
					}, 7000)
					setTimeout( () => {
					client.groupRemove(from, mentioned)
					}, 6000)
					setTimeout( () => {
					client.sendMessage(from, `OTW Menembakmu @${mentioned[0].split('@')[0]}`, text) // ur cods
					}, 5000)
					setTimeout( () => {
					client.sendMessage(from, 'Enemy Spotted!!', text)
					}, 2500)
					setTimeout( () => {
					reply('Sector Clear!!')
					}, 0)
					break
								
				case 'listadmin':
					if (!isGroup) return reply(ind.groupo())
					teks = `List admin of group *${groupMetadata.subject}*\n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
		//no group feature
		case 'mutual':
                if (!isRegistered) return reply( ind.noregis())
                if (isGroup) return reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
           	break
		case 'next':
                if (!isRegistered) return reply( ind.noregis())
                if (isGroup) return reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
        	break
				case 'toimg':
				if (!isRegistered) return reply(ind.noregis())
				if (!isQuotedSticker) return reply('Reply/tag sticker !')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'tuh dh jadi '})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
                			
				case 'simi':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					teks = body.slice(6)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/simsimi?text=${teks}&apikey=${TobzKey}`)
					simii = `${anu.result}`
					client.sendMessage(from, simii, text, {quoted: mek})
					await limitAdd(sender)
					break
					
				case 'simih':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('SUDAH AKTIF !!!')
						samih.push(from)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('❬ SUKSES ❭ MENGAKTIFKAN FITUR SIMI DI GRUB INI')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('❬ SUKSES ❭ MENONAKTIFKAN FITUR SIMI DI GRUB INI')
					} else {
						reply(ind.satukos())
					}
					break
					
				case 'nsfw':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply(' *sudah aktif*  !!')
						nsfw.push(from)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬ SUKSES ❭ Mengaktifkan NSFW di grub ini')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬ SUKSES ❭ Menonaktifkan NSFW di grub ini')
					} else {
						reply(ind.satukos())
					}
					break
					
                case 'leveling':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('Boo :𝘃')
                if (args[0] === 'enable') {
                    if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                    _leveling.push(from)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvlon())
                } else if (args[0] === 'disable') {
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvloff())
                } else {
                    reply(ind.satukos())
                }
					break
				case 'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*SUDAH AKTIF* !!!')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUKSES ❭ Mengaktifkan fitur Welcome/Left di grub ini')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUKSES ❭ Menonaktifkan Welcome/Left di grub ini')
					} else {
						reply(ind.satukos())
					}
					break
                			case 'event':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*SUDAH AKTIF* !!!')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ SUKSES ❭ MENGAKTIFKAN EVENT DI GRUB INI*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ SUKSES ❭ MENONAKTIFKAN EVENT DI GRUB INI*')
					} else {
						reply(ind.satukos())
					}
					break
	
				case 'antilinkgroup':
				case 'antilinkgrup':
				case 'antilink':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('*SUDAH AKTIF* !!!')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('*❬ SUCCESS ❭ ACTIVATED ANTILINK*')
					} else if (Number(args[0]) === 0) {
						antilink.splice(from, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('*❬ SUCCESS❭ DEACTIVATED ANTILINK*')
					} else {
						reply(ind.satukos())
					}
					break
					
					case 'nomedia':
					if (!isOwner) return reply(ind.ownerg())
					if (args.length < 1) return reply('parameternya apa ngonsol')
				if (args[0] === 'on') {
					if (isNoMedia) return reply('Fitur Tanpa Media sudah ON sebelumnya')
					nomedia.push(from)
					fs.writeFileSync('./database/bot/bigfile.json', JSON.stringify(bigfile))
					reply(`* 「 _SUKSES_ 」 * _Mengaktifkan Fitur Tanpa Media_`)
				} else if (args[0] ==='off') {
					if(!isMedia) return reply('Fitur Tanpa Media sudah OFF sebelumnya')
					nomedia.splice(from, 1)
					fs.writeFileSync('./database/bot/bigfile.json', JSON.strigify(bigfile))
					reply(`* 「 _SUKSES_ 」 * _Menonaktifkan Fitur Tanpa Media_`)
				} else {
					reply(ind.satukos())
				}
					break
					
					case 'antidelete':
				const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return client.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
				if (argz[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return client.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						client.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						client.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return client.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
						dataCtRevoke.data = true
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						client.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						client.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return client.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return client.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					client.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						client.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						client.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						client.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						client.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
					}
				}
				break
					
				case 'ban':
					if (!isOwner) return reply(ind.ownerb())
					bnnd = body.slice(5)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah dibanned Yahaha HAyyuk !`)
					break
					
				case 'unban':
					if (!isOwner) return reply(ind.ownerb())
					bnnd = body.slice(7)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
					break
					
					case 'antibadword':
					if (!isRegistered) return reply(ind.noregis())
                    			if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
                			if (args.length < 1) return reply('on untuk mengaktifkan, off untuk menonaktifkan')
                		if (args[0] === 'on') {
                			if (isBadWord) return reply('anti badword sudah on')
                 	   		badword.push(from)
                 	   		fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                  	   		reply(`\`\`\`✓“Sukses mengaktifkan fitur anti badword di group\`\`\` *${groupMetadata.subject}*`)
              	  		} else if (args[0] === 'off') {
                    			if (!isBadWord) return reply('anti badword sudah off')
                  	  		badword.splice(from, 1)
                 	   		fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                 	    		reply(`\`\`\`✓“Sukses menonaktifkan fitur anti badword di group\`\`\` *${groupMetadata.subject}*`)
             	   		} else {
                 	   		reply(ind.satukos())
                		}
                    			break
					
                    case 'addbadword':
                    if (!isOwner) return reply(ind.ownerg())
			if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Bad Word!')
                    break
					
                	case 'delbadword':
                    if (!isOwner) return reply(ind.ownerg())
			if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}delbadword [kata kasar]. contoh ${prefix}delbadword ngontol`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Success Menghapus BAD WORD!')
                    break 
					
                	case 'listbadword':
                    let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break 

					case 'afk2':
					if (!isRegistered) return reply(ind.noregis())
                                        tels = body.slice(4)
                                        if (args.length < 1) return reply('kakak afk karena apa?')
                                        var wong = mek.participant
                                        const tag = {
                                                text: `@${wong.split("@s.whatsapp.net")[0]} *SEDANG AFK ${tels} JANGAN GANGGU YA*`,
                                                contextInfo: { mentionedJid: [wong] }
                                        }
                                        client.sendMessage(from, tag, text, {quoted: mek})
                                        break
					
					case 'afk':
                			if (!isRegistered) return reply(ind.noregis())
                			if (!isGroup) return reply(ind.groupo())
               	 			if (isAfkOn) return reply(ind.afkOnAlready())
                			const reason = q ? q : 'Nothing.'
                			addAfkUser(sender.id, time, reason, _afk)
                			client.sendMessage(from, ind.afkOn(pushname, reason), text)
            				break

					case 'antifirtex':
					case 'antivirtex':
                                	if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiFirtex) return reply('anti firtex group sudah aktif')
						antifirtex.push(from)
						fs.writeFileSync('./database/group/antifirtex.json', JSON.stringify(antifirtex))
						reply('Sukses mengaktifkan anti firtex di group ini ✔️')
						client.sendMessage(from,`Perhatian kepada seluruh member anti firtex aktif apabila anda mengirim firtex anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiFirtex) return reply('Mode anti firtex sudah disable')
						var ini = anti.indexOf(from)
						antifirtex.splice(ini, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antifirtex))
						reply('Sukes menonaktifkan anti firtex di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
					
					case 'virtex':
                  		if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					await costum(virtex(pushname, prefix, botNumber, ownerNumber, getLevelingLevel, sender, _registered), text, tescuk, cr)
					await limitAdd(sender)
					break
					
                	case 'virtex2':
                  	if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					await costum(virtex2(pushname, prefix, botNumber, ownerNumber, getLevelingLevel, sender, _registered), text, tescuk, cr)
					await limitAdd(sender)
					break
					
				case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					await limitAdd(sender)
					break
					
				
				default:
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
