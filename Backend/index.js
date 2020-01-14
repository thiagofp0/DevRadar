const express = require('express');

const app = express();

app.use(express.json());

// get, post, put, delete

//Tipos de parâmetros do express:
//Query params - Usa no get - request.query - (Filtros, Ordenação, paginação, ...)
//Route Params - Usa no put e no delete - request.params - (Identificar um recurso na alteração ou remoção)
//Body - Usa no Post e Put - request.body - (Dados para criação ou alteração de um registro)

app.post('/users/:id', (request, response) =>{
    console.log(request.body);
     return response.json({message: 'Hello OmniStack'});
});

app.listen(3333);