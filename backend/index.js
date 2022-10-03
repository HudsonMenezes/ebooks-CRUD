// import express from 'express'
// import mysql from 'mysql'
const express = require('express')
const mysql = require('mysql')
require('dotenv').config({ path: 'variaveis.env' })

const app = express()
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})

app.get('/', (req, res) => {
  res.json('Hello this is the dark force')
})

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books"
  db.query(q, (err, data) => {
    if(err) return res.json(erro)
    return res.json(data)
  })
})

app.listen(8800, () => {
  console.log('Conectado ao backend!!')
})
