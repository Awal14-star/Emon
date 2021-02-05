exports.wait = () => {
	return`*「 WAIT 」 SEDANG PROSES*`
}

exports.succes = () => {
	return`*「 SUCCES 」*`
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
●⧐ *Beri Jeda 5detik Saat Menggunakannya!!*
●⧐ *Bug/Error Harap Cht Owner!*
●⧐ *Harap Sabar Dengan Bug²nya!*
●⧐ *Gunakan Bot Sebaik-baiknya!*
▬▭▬▭▬▭▬▭▬▭▬▭▬

╭══─⊱ ❰ *MAKER MENU (Sedang Error)* ❱ ⊰─══➤
╠☞ *${prefix}sticker (jika video max. 9det)*
║     Mengubah gambar/video yang kamu kirimkan menjadi sticker.
╠☞ *${prefix}vinta*
╠☞ *${prefix}avengers*
╠☞ *${prefix}summer*
╠☞ *${prefix}sandwrite*
╠☞ *${prefix}metaldark*
╠☞ *${prefix}dropwater*
╠☞ *${prefix}greenneon*
╠☞ *${prefix}neontext*
╠☞ *${prefix}sumery*
╠☞ *${prefix}blood*
╠☞ *${prefix}firework*
╠☞ *${prefix}lava*
╠☞ *${prefix}toimg*
║     Mengubah stiker menjadi gambar
║
╠══─⊱ ❰ *FUN MENU* ❱ ⊰─════➤
╠☞ *${prefix}mining (error)*
╠☞ *${prefix}bisakah*
║    Bertanya kepada Bot apakah kamu bisa melakukan suatu hal
╠☞ *${prefix}kapankah*
║    Bertanya kepada Bot kapankah kamu bisa/melakukan suatu hal
╠☞ *${prefix}apakah*
║    Bertanya kepada Bot tentang kebenaran suatu hal
╠☞ *${prefix}seberapagay* (testing/new)
║    Bertanya kepada Bot berapa % tingkat Gay kamu
╠☞ *${prefix}rate*
║    Bertanya kepada Bot tentang nilai suatu hal
╠☞ *${prefix}slap*
║    Tamaparan dengan Toxic
╠☞ *${prefix}tampar (Error)*
╠☞ *${prefix}speed (error)*
║
╠══─⊱ ❰ *MEDIA MENU* ❱ ⊰─═══➤
╠☞ *${prefix}toxic (error)*
╠☞ *${prefix}quotes (error)*
╠☞ *${prefix}beritahoax*
║    Mencari berita Hoax
╠☞ *${prefix}brainly*
║    Mencari jawaban di Brainly, makanya pintar, *gblk*
╠☞ *${prefix}pinterest*
║    Mencari gambar di pinterest dengan keyword yang kamu ketik
╠☞ *${prefix}tts*
║    Mengirimkan suara dari yang kamu ketik
║    contoh : #tts id MiKako yang tampan
╠☞ *${prefix}resepmasakan (error)*
╠☞ *${prefix}igstalk (error)*
║
╠══─⊱ ❰ *LIMIT MENU* ❱ ⊰─═══➤
╠☞ *${prefix}limit*
║    Mengecek sisa penggunaan Bot kamu
╠☞ *${prefix}buylimit*
║    Membeli token untuk pengunaan Bot
╠☞ *${prefix}dompet*
║    Mengecek sisa pointmu
║
╠══─⊱ ❰ *NSFW MENU* ❱ ⊰─═══➤
╠☞ *${prefix}pokemon*
║    Bot akan mengirimkan gambar pokemon
╠☞ *${prefix}anjing*
║    Bot akan mengirimkan gambar anjing
╠☞ *${prefix}1cak (error)*
║
╠══─⊱ ❰ *GROUP MENU* ❱ ⊰─══➤
╠☞ *${prefix}hidetag*
║    Mengetag semua orang dengan teks kosong
╠☞ *${prefix}grouplist*
║    Menampilkan anggota grub
╠☞ *${prefix}limit*
║    Menampilkan sisa penggunaan Bot kamu
╠☞ *${prefix}level*
║    Mengecek tingkat Levelmu
╠☞ *${prefix}linkgc*
║    Bot akan mengirim Link Grub
╠☞ *${prefix}tagall*
║    Mengetag semua orang yg ada di grub
╠☞ *${prefix}setpp*
║    Mengubah foto profil grup
╠☞ *${prefix}add*
║    Menambahkan seseorang ke dalam grup
╠☞ *${prefix}kick*
║    Mengeluarkan salah satu anggota grub
╠☞ *${prefix}setname*
║    Mengubah nama grup
╠☞ *${prefix}setdesc*
║    Mengubah deskripsi grup
╠☞ *${prefix}demote*
║    Menurunkan status admin seseorang menjadi anggota grub
╠☞ *${prefix}promote*
║    Menaikkan salah satu member menjadi admin grub
╠☞ *${prefix}listadmin*
║    Menampilkan daftar admin di grub
╠☞ *${prefix}group* [buka/tutup]
║    Mengaktifkan/menonaktifkan Grub
╠☞ *${prefix}leveling* [enable/disable]
║    Mengaktifkan/menonaktifkan fitur Level
╠☞ *${prefix}nsfw* [1/0]
║    Mengaktifkan/menonaktifkan NSFW
╠☞ *${prefix}simih* [1/0]
║    Mengobrol dengan Bot
╠☞ *${prefix}welcome* [1/0]
║    Mengaktifkan/menonaktifkan selamat datang
║
╠══─⊱ ❰ *OWNER MENU* ❱ ⊰─══➤
╠☞ *${prefix}bc*
╠☞ *${prefix}bcgc*
╠☞ *${prefix}kickall*
╠☞ *${prefix}setreply*
╠☞ *${prefix}setprefix*
╠☞ *${prefix}clearall*
╠☞ *${prefix}block*
╠☞ *${prefix}unblock*
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
╠☞ *Mutia*
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
┗⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*limit di reset setiap jam 24:00*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ *「 ATM 」* ━┓\n┣⊱ *Nama* : ${pushname}\n┣⊱ *Nomer* : ${sender.split("@")[0]}\n┣⊱ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}
