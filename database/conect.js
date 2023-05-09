const Sequelize = require('sequelize');

const sequelize = new Sequelize('db_postgres', 'postgres', 'admin', {
  dialect: 'postgres',
  host: 'postgres',
});

const Genre = require('./models/genre')(sequelize);
const Director = require('./models/director')(sequelize);
const Movie = require('./models/movie')(sequelize);
const GenreMovies = require('./models/genreMovies')(sequelize);
const Users = require('./models/users')(sequelize);

Director.hasMany(Movie, {
  foreignKey: 'directorId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
Movie.belongsTo(Director);

Movie.belongsToMany(Genre, { through: GenreMovies });
Genre.belongsToMany(Movie, { through: GenreMovies });

sequelize.sync({ force: false }).then(() => { console.log('Database & tables created! You can work'); })
  .catch((error) => console.log(error));

module.exports = {
  sequelize,
  image: {
    Director, Genre, Movie, GenreMovies, Users
  },
};
