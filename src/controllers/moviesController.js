const db = require('../database/models');

const moviesController = {
    list: (req, res) => {
        db.Movies.findAll()
        .then((movies)=> {
            res.render('moviesList', {movies})
        })
    },
    detail: (req, res) => {
        db.Movies.findByPk(req.params.id)
        .then((movie) => {
            res.render('moviesDetail', {movie})
        })
    },
    new: (req, res) => {
        db.Movies.findAll({
            order: [
                ['release_date','DESC']
            ]
        }
        
        )
            .then((movies) => {
                res.render('newestMovies', {movies})
            })
    },
    recommended: (req, res) => {
        db.Movies.findAll({
            where: {
                release_date: {
                    [db.Sequelize.Op.lte]: new Date()
                }
            },
            order: [
                ['release_date','DESC']
            ], limit:5
        }
        )
        .then((movies) => {
            res.render('recommendedMovies', {movies})
        })
    }
}

module.exports = moviesController;