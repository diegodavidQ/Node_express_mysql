import express from 'express' //importar express
import { conectar, agregarContacto, obtenerContactos } from './src/mysql_conector.js' //importar conector mysql

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
    /*conectar()*/
    const todosContactos = obtenerContactos()
    res.render('index', {titulo: 'App node', contactos: todosContactos})
})

app.get('/agregar/:nombre/:numero', function(req, res){
    let nombre = req.params.nombre
    let numero = req.params.numero
    agregarContacto(nombre, numero)
    res.redirect('/')

    console.log(nombre, numero)
})

app.get('/borrar/:id', function(req, res){
    let id = req.params.id
    console.log("id:",id)
    res.redirect('/')
})
