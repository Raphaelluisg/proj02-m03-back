const express = require('express');
const cors = require('cors');


const TodolistsRoutes = require('./routes/todolists.routes');
const Conn = require('./conn/conn');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/todolists', TodolistsRoutes);
Conn();


const PORT = 4000;


app.listen(PORT, () =>{
    console.log(`App listening on port: http://localhost:${PORT}`);
})