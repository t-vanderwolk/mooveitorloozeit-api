const mysql = require('mysql')
const { dbconfig } = require('../dbconfig')
const db = mysql.createConnection(dbconfig)
db.connect()
