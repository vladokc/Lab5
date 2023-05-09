module.exports = function (sequelize) {
  return sequelize.define('genreMovies', {}, { timestamps: false });
};
