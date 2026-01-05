const request = require('postman-request')
// const url = 'http://api.weatherstack.com/current?access_key=248af5c41dcc478d3ebc932c44d6231e&query=-0.897103096023137,100.34831894728461'
// 
// request({ url: url}, (error, response) => {
//    console.log(response)
    //  const data = JSON.parse(response.body) 
//    console.log(data) 
//    console.log(data.current) 
    //  console.log(data.current.temperature) 
// })

const place = encodeURIComponent('Universitas Negeri Padang')
const geocodeURL = `https://nominatim.openstreetmap.org/search?q=${place}&format=json&limit=1`

// request({url: geocodeURL, json: true, headers: { 'User-Agent': 'NetworkProgramming-Project/1.0' }}, (error, response) => {
    // if(error){
        // console.log("Tidak dapat terhubung ke layanan lokasi")
    // }else if(response.body.length === 0){
        // console.log('Lokasi tidak ditemukan')
    // }else{
        // const latitude = response.body[0].lat
        // const longitude = response.body[0].lon
        // console.log(latitude, longitude)
    // }
// })

request({url: geocodeURL, json: true, headers: { 'User-Agent': 'NetworkProgramming-Project/1.0' }}, (error, response) => {
    if(error){
        console.log("Tidak dapat terhubung ke layanan lokasi")
    }else if(response.body.length === 0){
        console.log('Lokasi tidak ditemukan')
    }else{
        const {lat, lon, display_name, type} = response.body[0]
        console.log('Data yang anda cari adalah ' + decodeURIComponent(place))
        console.log('Data yang ditemukan yaitu ' + display_name)
        console.log('Tipe lokasi adalah ' + type)
        console.log('Koordinatnya : ' + lat + " " + lon)
    }
})