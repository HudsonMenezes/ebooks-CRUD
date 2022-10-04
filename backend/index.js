// import express from 'express'
// import mysql from 'mysql'
const express = require('express')
const mysql = require('mysql')
require('dotenv').config({ path: 'variaveis.env' })
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})

app.get('/', (req, res) => {
  res.json('Hello this is the dark force')
})

app.get('/books', (req, res) => {
  const q = 'SELECT * FROM books'
  db.query(q, (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
})

app.post('/books', (req, res) => {
  const q = 'INSERT INTO books (`title`, `description`, `cover`) VALUES (?)'
  const values = ['titulo aqui', 'descricao aqui', 'foto qualquer']

  console.log(values)
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err)
    return res.json('Book has been created successfully.')
  })
})

app.listen(8800, () => {
  console.log('Conectado ao backend!!')
})
