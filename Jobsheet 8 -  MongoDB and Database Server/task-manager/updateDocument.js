const { MongoClient, ObjectId } = require('mongodb'); 
const url = 'mongodb://127.0.0.1:27017'; 
const client = new MongoClient(url); 
const namaDatabase = 'task-manager';

async function main(){
    try{
        await client.connect()
        console.log('Berhasil terhubung ke mongoDB')
        const db = client.db(namaDatabase)

        //Memperbarui data dengan updateOne
        // const updateOnePromise = db.collection('pengguna').updateOne(
            // {_id: new ObjectId('6960ce885f56c460600e8859')},
            // {$set: {nama: 'AndriCuy'}}
            // {$inc: {usia: 1}}
        // )
// 
        // updateOnePromise.then((result) => {
            // console.log(result)
        // }).catch((error) => {
            // console.error(err)
        // }).finally(() => {
            // client.close()
        // })

        //Memperbarui data dengan updateMany
        db.collection('tugas').updateMany(
            { StatusPenyelesaian: false },
            { $set: { StatusPenyelesaian: true }
        }).then(result => { 
            console.log(result.modifiedCount); 
        }).catch(err => { 
            console.error(err); 
        }).finally(() => { client.close(); } );
        
    }catch(error){
        console.error(err)
    }
}

main()