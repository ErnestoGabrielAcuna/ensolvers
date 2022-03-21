const express= require('express')
const app = express()
const mysql=require('mysql')
const con= require('express-myconnection')
const db= {
    host:'localhost',
    port:'3306',
    user:'root',
    password:'admin',
    database:'ensolvers'


}

app.use (con(mysql, db, 'single'))
app.set('port', process.env.PORT || 9090)

app.listen(app.get('port'), ()=>{
    console.log('server running', app.get('port'))
}

)
