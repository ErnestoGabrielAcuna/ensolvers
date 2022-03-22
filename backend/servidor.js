
const express = require('express')
const routes = require('./routes')
const app = express()
const mysql = require('mysql')
const con = require('express-myconnection')
const db = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'admin',
    database: 'ensolversdb'


}


app.use(con(mysql, db, 'single'))
app.use(express.json())

app.set('port', process.env.PORT || 9090)
app.get('/', (req, res) => {
    res.send('Welcome to my API')
})
app.use('/api', routes)
app.listen(app.get('port'), () => {
    console.log('server running', app.get('port'))
}

)


