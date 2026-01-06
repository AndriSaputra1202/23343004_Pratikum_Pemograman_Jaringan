const path = require('path')
const express = require('express')
const app = express()
const hbs = require('hbs')

app.set('view engine', 'hbs') 
const direktoriPublic = path.join(__dirname, '../public')
const direktorViews = path.join(__dirname, '../templates/views')
const direktorPartials = path.join(__dirname, '../templates/partials')

//handlebars engine dan lokasi folder views
app.set('view engine', 'hbs')
app.set('views', direktorViews)
hbs.registerPartials(direktorPartials)

//Setup direktori statis
app.use(express.static(direktoriPublic))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Aplikasi Cek Cuaca',
        judul: 'Aplikasi Cek Cuaca',
        nama: 'Andri Saputra'
    })
})

app.get('/bantuan', (req, res) => {
    //res.send('<h1>Ini halaman bantuan</h1>')
    res.render('bantuan', {
        title: 'Bantuan',
        judul: 'Bantuan',
        teksBantuan: 'Ini adalah teks bantuan',
        nama: 'Andri Saputra'
    })
})

app.get('/infoCuaca', (req, res) => {
    res.send([{
        prediksiCuaca: 'Cuaca sedang berawan',
        lokasi: 'Padang'
    }])
})

app.get('/tentang', (req, res) => {
    res.render('tentang', {
        title: 'Tentang',
        judul: 'Tentang Saya',
        nama: 'Andri Saputra',
        status: 'Mahasiswa'
    })
})

app.get('/bantuan/*', (req, res) => {
    res.render('404', {
        title: '404',
        judul: '404',
        nama: 'Andri Saputra',
        pesanKesalahan: 'Artikel yang dicari tidak ditemukan'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        judul: '404',
        nama: 'Andri Saputra',
        pesanKesalahan: 'Halaman tidak ditemukan'
    })
})

app.listen(4000, () => {
    console.log('Server berjalan pada port 4000')
})
