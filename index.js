const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
require('dotenv').config()
const port = process.env.PORT;
const app = express()
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({ extname: '.hbs', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', '.hbs');
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/seleccion-menu', (req, res) => {
    res.render('menu')
})

app.get('/seleccion-complemento', (req, res) => {
    res.render('complemento')
})


app.listen(port, () => console.log(`App listening on port ${port}!`))