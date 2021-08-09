//importar mysql
import mysql from 'mysql'

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



