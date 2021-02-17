//comentario por maria
//comentario por javier
//bfadf
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
require('dotenv').config()
const port = process.env.PORT;
const app = express()
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({ extname: '.hbs', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', '.hbs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }))

var cuenta = [];

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/seleccion-menu', (req, res) => {
    res.render('menu')
})

app.get('/seleccion-complemento', (req, res) => {
    res.render('complemento')
})

app.get('/seleccion-postre', (req, res) => {
    res.render('postre')
})

app.get('/seleccion-bebida', (req, res) => {
    res.render('bebida')
})

app.get('/cuenta', (req, res) => {
    res.render('cuenta', { cuenta: cuenta })
    cuenta = [];
})

app.post('/save', (req, res) => {
    cuenta.push(req.body)
    res.send('ok')
})


app.listen(port, () => console.log(`App listening on port ${port}!`))