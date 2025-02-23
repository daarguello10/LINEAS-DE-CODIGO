const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/login', (req, res) => {
    const datos=req.query;
    console.log(datos)
    res.send('Inicio sesion')
})
app.get('/validar', (req, res) => {
    res.send('Usuario Validado')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})