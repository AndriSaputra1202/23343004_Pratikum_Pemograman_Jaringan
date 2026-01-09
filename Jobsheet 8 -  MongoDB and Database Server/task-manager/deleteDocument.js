const { MongoClient, ObjectId } = require('mongodb'); 
const url = 'mongodb://127.0.0.1:27017'; 
const client = new MongoClient(url); 
const namaDatabase = 'task-manager';

async function main(){
    try{
        await client.connect()
        console.log('Berhasil terhubung ke mongoDB')
        const db = client.db(namaDatabase)

        // db.collection('pengguna').deleteMany({
            // usia: 25
        // }).then((result) => {
            // console.log(result)
        // }).catch((error) => {
            // console.error(error)
        // })

        db.collection('tugas').deleteOne(
            {_id: new ObjectId('6960ceeecc66c4858279d7fc')}
        ).then((result) => {
            console.log(result)
        })

    }catch(error){
        console.error(error)
    }
}

main()