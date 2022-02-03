module.exports = (sequelize, dataTypes) => {
    let alias='Genres';

    let config = {
        tableName: 'genres',
        timestamps: false
    };

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        ranking: {
            type: dataTypes.INTEGER
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        }
    };

    const Genre = sequelize.define(alias, cols, config);

    return Genre
}