const express = require('express')
const app = express()
const port = 3001
// Get the client
const mysql = require('mysql2/promise')
const cors = require('cors')
const session = require('express-session')
app.use(cors({
    origin : 'http://localhost:5174',
    credentials: true
}))
app.use(session({
        secret: 'qwertyuiop',
    }))

// Create the connection to database
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'login',
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/login',async (req, res) => {
    const datos=req.query;
    // A simple SELECT query
    try {
        const [results, fields] = await connection.query(
            "SELECT * FROM `usuarios` WHERE `usuario` = ? AND `clave` = ?",
            [datos.usuario,datos.clave]
            );
        if (results.length > 0){
            req.session.usuario = datos.usuario;
            res.status(200).send('Inicio de sesion Validado')
        } else {
            res.status(401).send('Usuario o clave incorrecta')
        }
    
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
    } catch (err) {
        console.log(err);
    }
    }
)
app.get('/validar', (req, res) => {
    if(req.session.usuario){
        res.status(200).send('Usuario Validado')
    }else{
        res.status(401).send('Usuario no autorizado')
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})