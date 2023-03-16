const axios = require('axios');

const { Videogame, Genre, Platform } = require("../db");

const { API_KEY } = process.env;
const { Op } = require('sequelize')


const getAllGames = async () => {
                                          //Base de datos
      let dbGames = await Videogame.findAll({
        attributes: ['id','name', 'image', 'rating', 'created'],
          include: [ {
            model: Genre,
            attributes: ["name"],
            through: {
                attributes: [],
            },
        },
        {
            model: Platform,
            attributes: ["name"],
            through: {
                attributes: [],
            },
        }
    ] 
    });  

      let resultAll = dbGames.map((el) => ({
      id: el.id,
      name: el.name,
      image: el.image,
      rating: el.rating,
      genres: el.genres.map((genre) => genre.name).join(', '),
      platforms: el.platforms.map((platform) => platform.name).join(', '),
      }));
                                  
                                          //Api
      let apiGames = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=100`);
      let response = apiGames.data.results.map(el => {
          return{
              id: el.id,
              name: el.name,
              image: el.background_image,
              rating: el.rating,
              genres: el.genres.map((el) => el.name).join(', '),
              platforms: el.platforms.map((el) => el.platform.name).join(', ')
          }
      })
      resultAll = [...resultAll, ...response]
     
      if (!resultAll) {
        // Lanzamiento de un error personalizado
        const error = new Error("sorry, we can't obtain all games ☹");
        error.name = 'NotFoundError';
        error.status = 404;
        throw error;
      }
      return resultAll;
};  




const getGameByName = async(name) =>{   
    
                                      //Base de datos
    let db = await Videogame.findAll({
      attributes: ['id', 'name','image','rating', 'created'],
      where:{
          name : {
              [Op.iLike]: `%${name}%`  
          },
      },
      include: [
        {
          model: Genre,
          attributes: ["name"]
        },
        {
          model: Platform,
          attributes: ["name"]
        }
      ]
    });

      const dbGames = db.map((game) => {
        const genres = game.genres.map(gen => gen.name).join(', ');
        const platforms = game.platforms.map((plat) => plat.name).flat().sort().join(', ');
        return {
          ...game.toJSON(),
          genres,
          platforms
        };
      });

  let response = [...dbGames]

                                      //Api
    let apiName = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`);
    let results = apiName.data.results.map(el => {
    return{
        id: el.id,
        name: el.name,
        image: el.background_image,
        rating: el.rating,
        genres: el.genres.map(el => el.name).join(',  '),
        platforms: el.platforms.map(el => el.platform.name).flat().sort().join(',  ')
        }
    })
    response = [...response, ...results]

    if (!response.length) {
      // Lanzamiento de un error personalizado
      const error = new Error(`"Sorry, the Videogame  "${name}" does not exist, Try a different name ☹ "`);
      error.name = 'NotFoundError';
      error.status = 404;
      throw error;
    }
      return response;
  }




const postGame = async(gamePost) => {
  
    try {
    const { name, description, released, rating, image, price, website, genres, platforms } = gamePost

    if (!name) throw new Error('The name field is required');
    if (!description) throw new Error('The description field is required');
    if (!platforms) throw new Error('The platforms field is required');
    if (!genres) throw new Error('The genres field is required');
    if (typeof rating !== 'number' || rating < 0 || rating > 5) {
    throw new Error('The rating field must be a number between 0 and 5 (e.g. 4.5)');
    }

    let gameCreated = await Videogame.create({
      name,
      description,
      released,
      rating,
      image,
      price,
      website,
      // platforms
    })
    let genresDb = await Genre.findAll({
      where: {

              name : genres 
          }, 
    });
    await gameCreated.addGenre(genresDb);


    let platformsDb = await Platform.findAll({
      where: {
              name : platforms 
          }, 
    });
    await gameCreated.addPlatform(platformsDb);

    return gameCreated;
    } catch (error) {
      throw error;
    }
  }




const getById = async(id) =>{

    if(isNaN(id)){
      
      let videogameIdDb = await Videogame.findOne({
        attributes: ['id', 'name', 'description', 'released', 'image', 'rating', 'created'],
        where: {
            id: id     
        },      
        include: [
          {
            model: Genre,
            attributes: ["name"],
          },
          {
            model: Platform,
            attributes: ["name"],
          }
        ] 
    });     
        
        videogameIdDb = JSON.stringify(videogameIdDb);
        videogameIdDb = JSON.parse(videogameIdDb);
        videogameIdDb.genres = videogameIdDb.genres.map(g => g.name).join(',  ');
        videogameIdDb.platforms = videogameIdDb.platforms.map((plat) => plat.name).flat().sort().join(', ');
        
        if (!videogameIdDb) {
          // Lanzamiento de un error personalizado
          const error = new Error("ID of videogame not found :'c");     //sin terminar
          error.name = 'NotFoundError';
          error.status = 404;
          throw error;
        }
        return videogameIdDb;

                                  //      Api
    } else if(!isNaN(id)){
      let gameId = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
      let gameData = gameId.data;
      if (!gameData.id) {
        throw new Error("ID of videogame not found :'c"); //** sin terminar
      }
      let game = { 
          id: gameData.id,
          name: gameData.name,
          image: gameData.background_image,
          description: gameData.description,
          released: gameData.released,
          rating: gameData.rating,
          platforms: gameData.platforms.map(el => el.platform.name).flat().sort().join(',  '),
          genres: gameData.genres.map(el => el.name).join(',  ')
        
        }  
        return game
    }
};



module.exports = { 
    getAllGames,
    getGameByName,
    postGame,
    getById
}