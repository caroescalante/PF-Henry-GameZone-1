const {
    getGenres
  } = require('../controllers/genreController')
  
  const getGenresHandler = async(req, res, next) => {
      try {
          let genres = await getGenres()
          res.status(200).json(genres)
      } catch (error) {
          next(error)
      }
  }
  
  module.exports = { getGenresHandler } 