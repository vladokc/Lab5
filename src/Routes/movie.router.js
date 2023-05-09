const Router = require('express');

const router = new Router();
const movieController = require('../Controllers/movie.controller');

router.post('/movie', movieController.createMovie);
router.get('/movie', movieController.getAllMovie);
router.get('/movie/:id', movieController.getMovieById);
router.delete('/movie/:id', movieController.deleteMovie);
router.put('/movie/:id', movieController.updateMovie);

module.exports = router;
