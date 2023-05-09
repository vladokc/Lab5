const db = require('../../database/conect');

const { Movie } = db.image;

class MovieController {
  async createMovie(req, res) {
    Movie.create({
      directorId: req.body.directorId,
      name: req.body.name,
    })
      .then((result) => { res.json(result); }).catch((error) => res.send(error.parent.detail));
  }

  async getAllMovie(req, res) {
    Movie.findAll({}).then((result) => ((!result[0]) ? res.send('Table is empty') : res.json(result)));
  }

  async deleteMovie(req, res) {
    Movie.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(res.send(`Movie with id:${req.params.id} was been deleted`))
      .catch((error) => res.send(error.parent.detail));
  }

  async getMovieById(req, res) {
    Movie.findAll({
      where: {
        id: req.params.id,
      },
    })
      .then((result) => ((!result[0]) ? res.send('Error, check entered id') : res.send(result)))
      .catch((error) => res.send(error.parent.detail));
  }

  async updateMovie(req, res) {
    Movie.update({ name: req.body.name, directorId: req.body.directorId }, {
      where: {
        id: req.params.id,
      },
    })
      .then((result) => ((+result === 0) ? res.send('Error, check entered data') : res.send('Successfully')))
      .catch((error) => res.send(error.parent.detail));
  }
}

module.exports = new MovieController();
