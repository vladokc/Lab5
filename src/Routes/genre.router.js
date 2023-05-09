const Router = require('express');

const router = new Router();
const genreController = require('../Controllers/genre.controller');

router.post('/genre', genreController.createGenre);
router.get('/genre', genreController.getAllGenre);
router.get('/genre/:id', genreController.getGenreById);
router.delete('/genre/:id', genreController.deleteGenre);
router.put('/genre/:id', genreController.updateGenre);

module.exports = router;
