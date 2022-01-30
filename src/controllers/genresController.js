const db = require('../database/models');

const genresController = {
    list: (req, res) => {
        db.Genres.findAll()
        .then((genres) => {
            res.sender('genresList', {genres})
        })
    },
    detail: (req, res) => {
        db.Genres.findByPk(req.params.id)
        .then((genre) => {
            res.render('genresDetail', {genre})
        })
    }
}

module.exports = genresController;