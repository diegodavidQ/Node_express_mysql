import express from 'express' //importar express

const app = express() //iniciar express

//iniciar servidor
app.listen('8000', function(){

    console.log("app iniciada en el puerto 8000")
})

//configuración pug
app.set('views', './vistas')
app.set('view engine', 'pug')

//configuración de archivos estáticos
app.use(express.static('./vistas'))
app.use(express.static('./src'))
app.use(express.static('./css'))



app.get('/', function(req, res){
    /* res.send('app iniciada') */
    res.render('index', {titulo: 'App node', dato: 'parrafo'})
})