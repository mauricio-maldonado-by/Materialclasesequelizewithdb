module.exports = (sequelize, dataTypes) => {
    let alias='Movie';

    let config = {
        tableName: 'movies',
        timestamps: false
    };

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING
        },
        rating: {
            type: dataTypes.INTEGER
        },
        awards: {
            type: dataTypes.INTEGER
        },
        length: {
            type: dataTypes.INTEGER
        },
        genre_id: {
            type: dataTypes.INTEGER
        },
        release_date: {
            type: dataTypes.DATE
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        }
    };

    const Movie = sequelize.define(alias, cols, config);

    return Movie
}