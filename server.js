const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

app.get('/register', (req, res) => {
	res.sendFile(__dirname + '/register.html')
})

app.listen(process.env.port || 3000)
