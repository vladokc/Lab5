const db = require('../../database/conect');

const { GenreMovies } = db.image;

class MovieController {
  async assignGenre(req, res) {
    GenreMovies.create({
      movieId: req.body.movieId,
      genreId: req.body.genreId,
    })
      .then((result) => res.json(result)).catch((error) => res.send(error.parent.detail));
  }

  async getAllRecords(req, res) {
    GenreMovies.findAll().then((result) => ((!result[0]) ? res.send('Table is empty') : res.json(result)));
  }

  async getAllFilmsId(req, res) {
    GenreMovies.findAll({
      where: {
        movieId: req.params.id,
      },
    })
      .then((result) => ((!result[0]) ? res.send('Error, check entered id') : res.send(result)))
      .catch((error) => res.send(error.parent.detail));
  }

  async getAllGenresId(req, res) {
    GenreMovies.findAll({
      where: {
        genreId: req.params.id,
      },
    })
      .then((result) => ((!result[0]) ? res.send('Error, check entered id') : res.send(result)))
      .catch((error) => res.send(error.parent.detail));
  }

  async deleteRecordsByFilmId(req, res) {
    GenreMovies.destroy({
      where: {
        movieId: req.params.id,
      },
    })
      .then(res.send(`Film with id:${req.params.id} was been deleted`))
      .catch((error) => res.send(error.parent.detail));
  }
}

module.exports = new MovieController();
