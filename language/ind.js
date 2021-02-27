exports.wait = () => {
	return`*「 WAIT 」 SEDANG PROSES*`
}

exports.succes = () => {
	return`*「 SUCCES 」*`
}

exports.error = () => {
	return`* 「 EMROR 」*`
}

exports.error.Iv = () => {
 	return` 「 EMROR 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar MiKako|17*`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*kamu sudah terdaftar di database bot*`
}

exports.nomed = () => {
	return`* 「 _MAAF_ 」 *\n${pushname}\n Owner sedang menghemat kuota. fitur media dengan ukuran besar sedang dinonaktifkan`
}

exports.stikga = () => {
	return`*yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW GAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*format salah/text kosong*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA NEGARA 」*\n\nkamu sudah terdaftar dengan data \n\n┏━⊱nama\n┗⊱${namaUser}\n┏━⊱nomer\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱umur\n┗⊱${umurUser}\n┏━⊱waktu pendaftaran\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : jangan sampai lupa nomer ini karena ini penting:v`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku) => { 
	return `
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

╭══─⊱ ❰ *MAKER MENU* ❱ ⊰─══➤
╠☞ *${prefix}sticker* (jika video max. 9det)
╠☞ *${prefix}kuncitext*
╠☞ *${prefix}silktext*
╠☞ *${prefix}makequote*
╠☞ *${prefix}hartatahta*
╠☞ *${prefix}toimg*
╠☞ *${prefix}trigger* (testing)
╠☞ *${prefix}ocr*
╠☞ *${prefix}ttp*
║
╠══─⊱ ❰ *FUN MENU* ❱ ⊰─════➤
╠☞ *${prefix}mutual*
╠☞ *${prefix}next*
╠☞ *${prefix}mining*
╠☞ *${prefix}bisakah*
╠☞ *${prefix}kapankah*
╠☞ *${prefix}apakah*
╠☞ *${prefix}seberapagay*
╠☞ *${prefix}rate*
╠☞ *${prefix}truth*
╠☞ *${prefix}dare*
╠☞ *${prefix}hobby*
╠☞ *${prefix}watak*
╠☞ *${prefix}fitnah*
╠☞ *${prefix}ntahlah*
╠☞ *${prefix}slap*
╠☞ *${prefix}katailham*
╠☞ *${prefix}caklontong*
╠☞ *${prefix}family100*
╠☞ *${prefix}tebakin*
╠☞ *${prefix}kbbi*
╠☞ *${prefix}artinama*
╠☞ *${prefix}memeindo*
╠☞ *~${prefix}tampar~ (Error)*
╠☞ *~${prefix}speed~ (error)*
║
╠══─⊱ ❰ *MEDIA MENU* ❱ ⊰─═══➤
╠☞ *${prefix}beritahoax*
╠☞ *${prefix}brainly*
╠☞ *${prefix}wiki*
╠☞ *${prefix}nulis*
╠☞ *${prefix}quran*
╠☞ *${prefix}pantun*
╠☞ *${prefix}pinterest*
╠☞ *${prefix}tts*
║    contoh : #tts id MiKako yang tampan
╠☞ *${prefix}play*
╠☞ *${prefix}lirik*
╠☞ *${prefix}chord*
╠☞ *${prefix}tomp3*
╠☞ *${prefix}ytmp3*
╠☞ *${prefix}yutubdl*
╠☞ *${prefix}ssweb*
╠☞ *${prefix}map*
╠☞ *${prefix}stalkig*
╠☞ *${prefix}qrcode*
╠☞ *${prefix}wait*
║    
╠══─⊱ ❰ *DUNIA WIBU* ❱ ⊰─═══➤
╠☞ *${prefix}husbu*
╠☞ *${prefix}loli*
╠☞ *${prefix}loli2*
╠☞ *${prefix}neko*
╠☞ *${prefix}nekopoi*
╠☞ *${prefix}nekonime*
╠☞ *${prefix}ranime*
╠☞ *${prefix}randomhentong*
╠☞ *${prefix}blowjob*
╠☞ *${prefix}nsfwloli*
╠☞ *${prefix}nsfwneko*
╠☞ *${prefix}hentai*
╠☞ *${prefix}animekiss*
║    
║───────⟪  CHARACTER ANIME ⟫───────
║     *[ERROR KABEH]*
╠☞ *${prefix}naruto*
╠☞ *${prefix}boruto*
╠☞ *${prefix}sasuke*
╠☞ *${prefix}hinata*
╠☞ *${prefix}sakura*
╠☞ *${prefix}minato*
╠☞ *${prefix}kurumi*
╠☞ *${prefix}miku*
║ 
╠══─⊱ ❰ *LIMIT MENU* ❱ ⊰─═══➤
╠☞ *${prefix}limit*
╠☞ *${prefix}buylimit*
╠☞ *${prefix}dompet*
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
╠☞ *${prefix}add*
╠☞ *${prefix}kick*
╠☞ *${prefix}setname*
╠☞ *${prefix}setdesc*
╠☞ *${prefix}demote*
╠☞ *${prefix}promote*
╠☞ *${prefix}listadmin*
╠☞ *${prefix}antilink* [1/0]
╠☞ *${prefix}group* [buka/tutup]
╠☞ *${prefix}leveling* [enable/disable]
╠☞ *${prefix}nsfw* [1/0]
╠☞ *${prefix}welcome* [1/0]
║
╠══─⊱ ❰ *OWNER MENU* ❱ ⊰─══➤
╠☞ *${prefix}bc*
╠☞ *${prefix}bcgc*
╠☞ *${prefix}kickall* Mau Ngapain Tod? >:
╠☞ *${prefix}setreply*
╠☞ *${prefix}setprefix*
╠☞ *${prefix}clearall*
╠☞ *${prefix}block*
╠☞ *${prefix}unblock*
╠☞ *${prefix}listblock*
╠☞ *${prefix}totaluser*
╠☞ *${prefix}leave*
╠☞ *${prefix}event* [1/0]
╠☞ *${prefix}clone*
╠☞ *${prefix}setppbot*
║
╠══─⊱ ❰ *THANGKS TO* ❱ ⊰─══➤
║
╠☞ *Botol - LoL*
╠☞ *Reyna*
╠☞ *Damar*
╠☞ *FEBRI*
╠☞ *Taufik - Kun*
╰════─⊱  ⸨ *MiKako⚔️* ⸩  ⊰─════╯
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 SELAMAT 」*
┏⊱ *Nama* : ${pushname}
┣⊱ *Nomer* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
┗⊱ ketik ${prefix}leaderboard untuk melihat ranking
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*limit di reset setiap jam 24:00\n hubungi owner untuk mereset limit✌️*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit atau menghubungi owner untuk mereset limit`
}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ *「 ATM 」* ━┓\n┣⊱ *Nama* : ${pushname}\n┣⊱ *Nomer* : ${sender.split("@")[0]}\n┣⊱ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}
