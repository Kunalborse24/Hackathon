const express = require('express')
const db = require('../db')
const utils = require('../utils')
const crypto = require('crypto-js')
const mailer = require('../mailer')

const jwt = require('jsonwebtoken')
const config = require('../config')

const router = express.Router()

router.get('/', (request, response)=>{
    const query = `select * from user;`
    db.pool.execute(
        query,(error, result)=>{
            if(error)
            {
                response.send(utils.createErrorResult(error))
            }
            else
            {
                response.send(utils.createSuccessResult(result))
            }
        }
    )
})



router.post('/register', (request, response)=> {
    const { name, email, password, phone } = request.body
    
    const query = `insert into user (name, email, password, phone) values (?, ?, ?, ?);`

    const encryptedPassword = String(crypto.SHA256(password))
  
    db.pool.execute(
        query,[name, email, encryptedPassword, phone],
        (error, result)=> {
            if(error)
            {
                response.send(utils.createErrorResult(error))
            }
            else
            {
                
                mailer.sendEmail
                (
                    email,
                    'Welcome to To-Do list app',
                    `<h3>Hi ${name}</h3>
                    <br/>
                    ..
                    ..
                    ..
                    ..
                    <br/>
                    Thank you, Admin
                    `,()=>{
                        response.send(utils.createSuccessResult('user created successfully'))
                    }
                )
            }
        }
    )
})           

router.post('/login',(request, response)=>
{
    const { email, password } = request.body

    const statement = `select id, name, phone, email from user where email = ? and password = ?`

    const encryptedPassword = String(crypto.SHA256(password))

    db.pool.query(statement, [email, encryptedPassword], (error, users)=>{
    if(error)
    {
        response.send(utils.createErrorResult(error))
    }
    else{
        if(users.length == 0)
        {
            response.send(utils.createErrorResult(error, 'invalid email or password'))
        }
        else
        {
            const user = users[0]
            if(user['isDeleted'] == 1)
            {
                response.send(utils.createErrorResult('account was deleted'))
            }
            else
            {
                const payload = { id: user.id }

                const token = jwt.sign(payload, config.secret)

                const userData = {
                    name: `${user.name}`,
                    phone: user.phone,
                    email,
                    token
                }

                response.send(utils.createSuccessResult(userData))

            }
        }
    }
})
})



 module.exports = router
