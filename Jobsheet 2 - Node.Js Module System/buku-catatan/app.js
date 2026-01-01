const fs = require('fs')

//fs.writeFileSync('catatan.txt', 'Nama saya andri saputra')
//fs.appendFileSync('catatan.txt', 'Saya tinggal di bukittinggi')

//const pesan = catatan()
//console.log(pesan)

// const validator = require('validator')
//const ambilCatatan = require('./catatan.js')
// const pesan = ambilCatatan()
// console.log(pesan)
// console.log(validator.isURL('https://proska.com'))

//const command = process.argv[2]
//console.log(process.argv[2])
//console.log(process.argv[5])

// if(command === 'tambah'){
    // console.log('Tambah catatan')
// }else if(command === 'hapus'){
    // console.log('Hapus catatan')
// }

//const yargs = require('yargs')
const yargs = require('yargs/yargs')(process.argv.slice(2))
const catatan = require('./catatan.js')
const { describe, demandOption } = require('yargs')

yargs.version('10.1.0')

//Perintah (command) 'tambah'
yargs.command({
    command: 'tambah',
    describe: 'tambah sebuah catatan baru',
    builder:{
        judul:{
            describe: 'Judul Catatan',
            demandOption: true,
            type: 'string'
        },
        isi:{
            describe: 'Isi catatan',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        catatan.tambahCatatan(argv.judul, argv.isi)
    }
})

//Perintah hapus
yargs.command({
    command: 'hapus',
    describe: 'Hapus catatan',
    handler: function(argv){
        catatan.hapusCatatan(argv.judul)
    }
})

yargs.command({
    command: 'baca_semua',
    describe: 'menampilkan semua catatan',
    handler: function(argv){
        catatan.bacaSemua(argv);
    }
});

yargs.command({
    command: 'baca',
    describe: 'menampilkan sebuah catatan',
    builder: {
        judul: {
            describe: 'Menampilkan satu catatan',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        catatan.bacaJudul(argv.judul);
    }
});

yargs.parse()
//console.log(yargs.argv)
