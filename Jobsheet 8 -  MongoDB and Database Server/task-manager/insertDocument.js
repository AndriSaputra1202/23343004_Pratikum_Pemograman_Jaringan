const { MongoClient, ObjectId } = require('mongodb')
const url = 'mongodb://127.0.0.1:27017'

const client = new MongoClient(url); 
const namaDatabase = 'task-manager';
const id = new ObjectId()

//Mencetak ObjectId yang baru dibuat ke consol
console.log(id);

//Mencetak representasi hexadecimal dari ObjectId ke consol
console.log(id.id)

// Mencetak panjang (jumlah karakter) dari representasi hexadecimal ObjectId ke konsol. 
console.log(id.id.length);

// Mencetak timestamp yang terkait dengan ObjectId ke konsol. Kode ini akan 
// memberikan data waktu kapan ObjectId tersebut dibuat. 
console.log(id.getTimestamp()); 

// Mencetak panjang dari representasi ObjectId dalam bentuk string heksadesimal. 
console.log(id.toHexString().length); 

//Bagian ini merupakan fungsi utama berjalan secara async
async function main(){
    try{
        //Ini terkait koneksi ke server mongodb
        // Menggunakan 'await' untuk menghubungkan ke server MongoDB. 
        await client.connect()
        console.log('Berhasil terhubung ke mongoDB')

        //Memilih database yang telah didefiniskan sebelumnya
        const db = client.db(namaDatabase)

        //Memilih koleksi 'pengguna' di dalam database
        const  clPengguna = db.collection('pengguna')

        //Memilih koleksi 'tugas' di dalam database
        //const  clTugas = db.collection('tugas')

        //Insert data ke collection pengguna
        // const insertPengguna = await clPengguna.insertOne(
            // {
                // _id: id,
                // nama: 'Andri',
                // usia: 20
            // }
        // )

        // const insertPengguna = await clPengguna.insertMany([
            // {
                // nama: 'Saputra',
                // usia: 22
            // },{
                // nama: 'Syadza',
                // usia: 23
            // }
        // ])

        const insertPengguna = await clPengguna.insertMany([
            {
                nama: 'Oktifani',
                usia: 25
            },{
                nama: 'Ansya',
                usia: 25
            }
        ])

        

        console.log('Memasukkan data Pengguna ke koleksi =>', insertPengguna)
        
        //Memasukkan banyak data
        //Memasukkan beberapa dokumen ke dalam collection tugas
        // const insertTugas = await clTugas.insertMany([
            // {
                // Deskripsi:'Membersihkan rumah', 
                // StatusPenyelesaian: true 
            // },{
                // Deskripsi:'Belajar Javascript', 
                // StatusPenyelesaian: true 
            // },{
                // Deskripsi:'Zoom Bootcamp', 
                // StatusPenyelesaian: true 
            // }
        // ])

        // console.log('Memasukkan data tugas ke koleksi =>', insertTugas)

        return 'Data selesai dimasukkan'

    } catch(err) {
        //Menangani kesalahan dengan mencetka pesan kesalahan
        console.error(err)
    } finally {
        //Menutup koneksi walau gagal
        client.close()
    }
}

main().then(console.log).catch(console.error)