const request = require('postman-request')
const urlCuaca = 'http://api.weatherstack.com/current?access_key=248af5c41dcc478d3ebc932c44d6231e&query=-0.897103096023137,100.34831894728461&units=m'
// 
request({ url: urlCuaca, json: true}, (error, response) => {
    console.log('Saat ini suhu diluar mencapai ' + response.body.current.temperature + ' derajat celcius')
    console.log('Kemungkinan terjadinya hujan adalah ' + response.body.current.precip + ' %')
    console.log('Kondisi cuaca saat ini adalah '+ response.body.current.weather_descriptions[0])
})

