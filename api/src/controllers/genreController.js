const axios = require('axios');
const { Genre } = require("../db");
const { API_KEY } = process.env;

const getGenres = async() => {

    const dbLog = await Genre.findAll({
        attributes: ['name'],
    })
    try {
        let dbClear = dbLog.map(el => {
                return{
                    name: el.name
                }
            })
        if (dbClear.length) return dbClear

        const response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
        const genres = response.data.results
        for (let i = 0; i < genres.length; i++) {
            const genreFor = genres[i]
            await Genre.findOrCreate({
                where: {
                    name: genreFor.name
                }
            })
        }
        return genres
    } catch (error) {
        throw error
    }
}

module.exports = {
    getGenres
}