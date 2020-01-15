const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/ParseStringAsArray');

module.exports = {
    async index(request, response){
        //Buscar todos os devs em um raio de 10km
        //Filtrar por tecnologias

        const {latitude, longitude, techs} = request.query;
        
        const techsArray  = parseStringAsArray(techs);

        const devs = await Dev.find({
           techs: {
                $in: techsArray,
           },
        });

        return response.json({devs});

    }
}