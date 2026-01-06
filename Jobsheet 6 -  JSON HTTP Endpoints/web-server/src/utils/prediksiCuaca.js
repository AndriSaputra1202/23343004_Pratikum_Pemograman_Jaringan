const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const lat = encodeURIComponent(latitude)
    const lon = encodeURIComponent(longitude)
    const url = `http://api.weatherstack.com/current?access_key=248af5c41dcc478d3ebc932c44d6231e&query=${lat},${lon}&units=m`

    request({url, json: true}, (err, res) => {
        if(err){
            callback('Tidak dapat terkoneksi ke layanan', undefined)
        }else if(res.body.error) {
            callback('Tidak dapat menemukan lokasi', undefined)
        }else{
            callback(undefined,
                'Info Cuaca : ' + res.body.current.weather_descriptions[0] +
                ' Suhu saat ini adalah ' + res.body.current.temperature +
                ' Index UV adalah ' + res.body.current.uv_index + 
                ' nm. ' + 'Visibilitas ' + res.body.current.visibility + 'kilometer'
            )
        }

    })
}

module.exports = forecast