const Router = require('express');

const router = new Router();
const directorController = require('../Controllers/director.controller');

router.post('/director', directorController.createDirector);
router.get('/director', directorController.getAllDirectors);
router.get('/director/:id', directorController.getDirectorById);
router.delete('/director/:id', directorController.deleteDirector);
router.put('/director/:id', directorController.updateDirector);

module.exports = router;
