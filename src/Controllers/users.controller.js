const db = require('../../database/conect');
const jwt = require('jsonwebtoken');

const { Users } = db.image;

class UsersController {
    async createUser(req, res) {
      Users.create({
        login: req.body.login,
        password: req.body.password,
      })
        .then((result) => res.json(result)).catch((error) => res.send(error.parent.detail));
    }
    async getAllUsers(req, res) {
      Users.findAll({}).then((result) => ((!result[0]) ? res.send('Table is empty') : res.json(result)));
    }
    async deleteUser(req, res) {
      Users.destroy({
        where: {
          id: req.params.id,
        },
      })
        .then(res.send(`User with id:${req.params.id} was been deleted`));
    }
    async login(req, res) {
      const user = Users.findAll({
        where: {
          login: req.body.login,
          password: req.body.password
        },
      })
      if (user) {
        const accessTokenSecret = 'youraccesstokensecret';
        const accessToken = jwt.sign({ username: user.username }, accessTokenSecret);

        res.json({
            accessToken
        });
    } else {
        res.send('Username or password incorrect');
    }
        // .then((result) => ((!result[0]) ? res.send('Error, check entered id') : res.send(jwt.sign({ username: result.login}, accessTokenSecret))))
        // .catch((error) => res.send(error));
    }
}

module.exports = new UsersController();