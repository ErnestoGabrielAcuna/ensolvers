const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM folders', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO folders set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            
        })
    })
})

routes.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM folders WHERE idfolders = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
            
        })
    })
})

routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE folders set ? WHERE idfolders = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            
        })
    })
})

routes.get('/task:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM tasks WHERE idfolders = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/task', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO tasks set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('task added!')
        })
    })
})

routes.delete('/task:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM tasks WHERE idtasks = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('task excluded!')
        })
    })
})

routes.put('/task:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE tasks set ? WHERE idtasks = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)
        })
    })
})

module.exports = routes