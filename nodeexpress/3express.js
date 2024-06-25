const express = require('express')
const ditto = require('./pokemon/ditto.json')
const path =require('path')

const PORT = process.env.PORT ?? 1234

const app = express()
app.disable('x-powered-by')

app.use(express.json())

app.use((req, res, next) => {
    if (req.method !== 'POST') return next()
    if (req.headers['content-type'] !== 'application/json') return next()
    
    // solo llegan request que son POST y que tienen el header Content-Type: application/json
    let body = ''

    // escuchar el evento data
    req.on('data', chunk => {
        body += chunk.toString()
    })

    req.on('end', () => {
        const data = JSON.parse
    })
})