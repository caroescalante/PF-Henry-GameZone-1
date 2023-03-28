const axios = require('axios');

const { Videogame, Genre, Platform } = require("../db");

const { API_KEY } = process.env;
const { Op } = require('sequelize')


function generatePrice(rating) {
  let price;
  if (rating <= 1) {
    price = 1.999;
  } else if (rating < 3) {
    price = 4.999;
  } else if (rating <= 5) {
    price = Math.round(rating * 6666) / 2;
  }
  return price;
}

const getAllGames = async () => {
                                          //Base de datos
      let dbGames = await Videogame.findAll({
        attributes: ['id','name', 'image', 'rating','price', 'created','released'],
          include: [ 
         {
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
      price: el.price,
      genres: el.genres.map((genre) => genre.name).join(', '),
      platforms: el.platforms.map((platform) => platform.name).join(', '),
      released:el.released,
      }));

  
      //Api
      let pages = 0;
      let response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
      while(pages < 4){ //obtener 80 resultados.
          pages++;
          const gamesMap = response.data.results.map(el => {
          const price = generatePrice(el.rating);
              return {
                  id: el.id,  
                  name: el.name,
                  image: el.background_image, 
                  rating: el.rating,
                  genres: el.genres.map((el) => el.name).join(', '),
                  platforms: el.platforms.map((el) => el.platform.name).join(', '),
                  price: price,
                  released:el.released
              }
          })
          resultAll = [...resultAll, ...gamesMap]  //concateno api y bdd con el spread operator.
          response = await axios.get(response.data.next)
      }  return resultAll;
}  



const getGameByName = async(name) =>{   
    
                                      //Base de datos
    let db = await Videogame.findAll({
      attributes: ['id', 'name','image','rating','price', 'created'],
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
    const price = generatePrice(el.rating);
    return{
        id: el.id,
        name: el.name,
        image: el.background_image,
        rating: el.rating,
        genres: el.genres.map(el => el.name).join(',  '),
        platforms: el.platforms.map(el => el.platform.name).flat().sort().join(',  '),
        price: price
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
  console.log('crear juego', gamePost);
    try {
    const { name, description, released, rating, image, price, website, genres, platforms } = gamePost

    if (!name) throw new Error('The name field is required');
    if (!description) throw new Error('The description field is required');
    if (!platforms) throw new Error('The platforms field is required');
    if (!genres) throw new Error('The genres field is required');
    if (rating < 0 || rating > 5) {
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

    genres.map(async (gen)=>{
      const genresDb = await Genre.findAll({
        where:{name : gen}
       })
    const respgenre = await gameCreated.addGenre(genresDb);
       console.log(respgenre);  
    });
    
    platforms.map(async(plat)=>{
        const platformsDb = await Platform.findAll({
            where:{name : plat}
        })
        const respPlatform = await gameCreated.addPlatform(platformsDb);
        console.log(respPlatform);
    });
    
    // let genresDb = await Genre.findAll({
    //   where: {

    //           name : genres 
    //       }, 
    // });
    //await gameCreated.addGenre(genresDb);


    // let platformsDb = await Platform.findAll({
    //   where: {
    //           name : platforms 
    //       }, 
    // });
    //await gameCreated.addPlatform(platformsDb);

    return gameCreated;
    } catch (error) {
      throw error;
    }
  }




const getById = async(id) =>{

    if(isNaN(id)){
      
      let videogameIdDb = await Videogame.findOne({
        attributes: ['id', 'name', 'description', 'released','price','website', 'image', 'rating', 'created'],
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
      const price = generatePrice(gameData.rating);
      if (!gameData.id) {
        throw new Error("ID of videogame not found :'c"); //** sin terminar
      }
      let game = { 
          id: gameData.id,
          name: gameData.name,
          image: gameData.background_image,
          description: gameData.description_raw ,
          released: gameData.released,
          rating: gameData.rating,
          website: gameData.website,
          platforms: gameData.platforms.map(el => el.platform.name).flat().sort().join(',  '),
          genres: gameData.genres.map(el => el.name).join(',  '),
          price: price
        }  
        return game
    }
};

const updateVideogame = async (id, newData) => {

  const [rowsAffected, [updateVideogame]] = await Videogame.update(newData,{
    where: {
        id: id,
    },
    returning: true,
  });

  if ( rowsAffected === 0) {
    return res.status(404).json({ error: "User not found" });
  }

  return updateVideogame;
};



module.exports = { 
    getAllGames,
    getGameByName,
    postGame,
    getById,
    updateVideogame,
}