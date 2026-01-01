const chalk = require('chalk')
// 
// console.log(chalk.grey('print warna biru sukses'))
// 
// 

const fs = require('fs')

const ambilCatatan = function(){
    return 'Ini catatan andri saputra...'
}
// module.exports = ambilCatatan

const tambahCatatan = function(judul, isi){
    const catatan = muatCatatan()
    const catatanGanda = catatan.filter(function(note) {
        return note.tittle === judul
    })

    if(catatanGanda.length === 0){
        catatan.push({
            judul: judul,
            isi: isi
        })
        simpanCatatan(catatan);
        console.log('Catatan baru ditambahkan!');
    }
    else {
        console.log('Judul catatan telah dipakai');
    }
}

const simpanCatatan = function (catatan) { 
    const dataJSON = JSON.stringify(catatan) 
    fs.writeFileSync('catatan.json', dataJSON) 
} 

const muatCatatan = function () { 
    try { 
        const dataBuffer = fs.readFileSync('catatan.json') 
        const dataJSON = dataBuffer.toString() 
        return JSON.parse(dataJSON) 
    } catch (e) { 
        return [] 
    } 
} 

const hapusCatatan = function(judul){
    const catatan = muatCatatan();
    const catatanUntukDisimpan = catatan.filter(function(note){
        return note.judul !== judul
    })

    if(catatan.length > catatanUntukDisimpan.length){
        console.log(chalk.green.inverse('Catatan dihapus!'))
        simpanCatatan(catatanUntukDisimpan)
    }
    else {
        console.log(chalk.red.inverse('Catatan tidak ditemukan!'))
    }
}

const bacaSemua = function(){
    const semuaCatatan = muatCatatan();
    if(semuaCatatan.length === 0){
        console.log(chalk.red.inverse('Catatan kosong!'));
        return;
    }
    semuaCatatan.forEach(({judul, isi}) => console.log({judul, isi}));
    console.log(chalk.green.inverse('Semua catatan berhasil ditampilkan!'));
}

const bacaJudul = function(judul_dicari){
    const semuaCatatan = muatCatatan();
    const target = semuaCatatan.find(catatan => catatan.judul === judul_dicari);

    if(!target){
        console.log(chalk.red.inverse(`Catatan dengan judul ${judul_dicari} tidak ditemukan!`));
        return;
    }
    const {judul, isi} = target;
    console.log({ judul, isi });

    console.log(chalk.green.inverse('Sebuah catatan berhasil ditampilkan'));
}

module.exports = { 
    ambilCatatan: ambilCatatan, 
    tambahCatatan: tambahCatatan ,
    hapusCatatan: hapusCatatan,
    bacaJudul: bacaJudul,
    bacaSemua: bacaSemua
} 
