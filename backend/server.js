const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')

const app = express();
const puerto = 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'biblioteca',

})

app.get('/traer', async (req,res) => {
    try {
        const [libros] = await db.query('SELECT * FROM libros');
        res.json(libros);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Error libros no encontrados'})
    }
})

app.listen(puerto, () => {
    console.log("conexion exitosa")
});

