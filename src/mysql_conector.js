//importar mysql
import mysql from 'mysql'

let todos
//crear conexión 
const conector = mysql.createConnection(
    {
        host: 'localhost',
        user: 'test',
        password: '1234',
        database: 'agenda'
    }
)

const conectar = () => {
    conector.connect( err => {
        if(err) throw err
        console.log('conectado')
    })
}

const agregarContacto = (nombre, numero) => {
    const sql = `INSERT INTO agend (id_agenda, nombre, numero) VALUES (${null}, "${nombre}", ${numero})`
    conector.query(sql, function(err, result, filed){
        if(err) throw err
        console.log(result)
    })
}


const obtenerContactos = () => {
    const sql = 'SELECT * FROM agend'
    conector.query(sql, function(err, result, field){
        todos = result
    })
    return todos
}

const borrarContacto = (id) => {
    const sql = `DELETE FROM agend WHERE id_agenda=${id}`
    conector.query(sql)
}


export{conectar, agregarContacto, obtenerContactos, borrarContacto}

