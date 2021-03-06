const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

// index, show, store, update, destroy 

module.exports = {
 
    //get
    async index(request, response){
        const devs = await Dev.find();

        return response.json(devs);
    },

    //post
    async store(request, response) {
        
        const { github_username, techs, longitude, latitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {
        console.log(github_username);
        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
        
        //isso se chama desestruturação (estudar mais!!!)
        const {name = login, avatar_url, bio} = apiResponse.data;
    
        const techsArray = parseStringAsArray(techs);
    
    
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        };
        
        dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location,
        })

    }

        return response.json(dev);
}
}