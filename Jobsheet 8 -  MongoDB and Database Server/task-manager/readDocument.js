const { MongoClient, ObjectId } = require('mongodb'); 
const url = 'mongodb://127.0.0.1:27017'; 
const client = new MongoClient(url); 
const namaDatabase = 'task-manager';

async function main() {
    try{
        await client.connect()
        console.log('Berhasil terhubung ke mongoDB')
        const db = client.db(namaDatabase)

        //Mencari satu dokukem dalam collection pengguna berdasarkan nama 'Andri'
        const byNama = await db.collection('pengguna').findOne({nama:'Andri'})

        // Mencari satu dokumen dalam koleksi 'pengguna' berdasarkan ID objek tertentu. 
        const byObjectID = await db.collection('pengguna').findOne({
            _id: new ObjectId("6960ce885f56c460600e8859")
        })

        // Mencari beberapa dokumen dalam koleksi 'pengguna' dengan kriteria usia dan mengubahnya menjadi array. 
        const toArray = await db.collection('pengguna').find({
            usia: 20
        }).toArray()

        //Ini menggunakan if statement dengan kondisi yang salah
        if(byNama && byObjectID && toArray){
            console.log('Data Pengguna ditemukan (berdasarkan nama):', byNama)
            console.log('Data Pengguna ditemukan (berdasarkan ID Objek):', byObjectID)
            console.log('Data Pengguna ditemukan (dalam format Array):', toArray)
        }else{
            console.log('Data Pengguna tidak ditemukan')
        }
    }catch{
        console.error(err)
    }finally{
        await client.close()
    }
}

main().catch(console.error); 