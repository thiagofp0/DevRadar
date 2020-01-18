const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes'); 
const { setupWebSocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect('mongodb+srv://thiago:thiago@cluster0-1ffee.mongodb.net/week10?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})

app.use(cors())
app.use(express.json());
app.use(routes);

// get, post, put, delete

//Tipos de parâmetros do express:
//Query params - Usa no get - request.query - (Filtros, Ordenação, paginação, ...)
//Route Params - Usa no put e no delete - request.params - (Identificar um recurso na alteração ou remoção)
//Body - Usa no Post e Put - request.body - (Dados para criação ou alteração de um registro)

server.listen(3333);