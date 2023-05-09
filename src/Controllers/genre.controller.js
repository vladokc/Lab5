const db = require('../../database/conect');

const { Genre } = db.image;

class GenreController {
  async createGenre(req, res) {
    Genre.create({
      title: req.body.title,
    })
      .then((result) => { res.json(result); }).catch((error) => res.send(error.parent.detail));
  }

  async getAllGenre(req, res) {
    Genre.findAll({}).then((result) => ((!result[0]) ? res.send('Table is empty') : res.json(result)));
  }

  async getGenreById(req, res) {
    Genre.findAll({
      where: {
        id: req.params.id,
      },
    })
      .then((result) => ((!result[0]) ? res.send('Error, check entered id') : res.send(result)))
      .catch((error) => res.send(error.parent.detail));
  }

  async deleteGenre(req, res) {
    Genre.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(res.send(`Genere with id:${req.params.id} was been deleted`))
      .catch((error) => res.send(error.parent.detail));
  }

  async updateGenre(req, res) {
    Genre.update({ title: req.body.title }, {
      where: {
        id: req.params.id,
      },
    })
      .then((result) => ((+result === 0) ? res.send('Error, check entered data') : res.send('Successfully')))
      .catch((error) => res.send(error.parent.detail));
  }
}

module.exports = new GenreController();
