const db = require('../../database/conect');

const { Director } = db.image;

class DirectorController {
  async createDirector(req, res) {
    Director.create({
      full_name: req.body.full_name,
      year_of_birth: req.body.year_of_birth,
    })
      .then((result) => { res.json(result); }).catch((error) => res.send(error.parent.detail));
  }

  async getAllDirectors(req, res) {
    Director.findAll({}).then((result) => ((!result[0]) ? res.send('Table is empty') : res.json(result)));
  }

  async deleteDirector(req, res) {
    Director.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(res.send(`Director with id:${req.params.id} was been deleted`));
  }

  async getDirectorById(req, res) {
    Director.findAll({
      where: {
        id: req.params.id,
      },
    })
      .then((result) => ((!result[0]) ? res.send('Error, check entered id') : res.send(result)))
      .catch((error) => res.send(error.parent.detail));
  }

  async updateDirector(req, res) {
    Director.update({ full_name: req.body.full_name, year_of_birth: req.body.year_of_birth }, {
      where: {
        id: req.params.id,
      },
    })
      .then((result) => ((+result === 0) ? res.send('Error, check entered data') : res.send('Successfully')))
      .catch((error) => res.send(error.parent.detail));
  }
}

module.exports = new DirectorController();
