const express = require('express')
const cors = require('cors')
const app = express()
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(
    cors({
        origin: true,
        credentials: true,
    })
)

app.post('/login', async (req, res, next) => {
    try {
        const { userid, userpw } = req.body
        const payload = userid
        const screct = 'hongcheol'

        const token = jwt.sign(payload, screct)
        const hash = crypto
            .createHmac('sha256', screct)
            .update(userpw)
            .digest('base64')
            .replace(/[=]/g, '')

        console.log('token')
        console.log(token)
        console.log('hash')
        console.log(hash)
        res.json(token)
    } catch (e) {
        next(e)
    }
})

app.listen(3000, () => {
    console.log('back start')
})
