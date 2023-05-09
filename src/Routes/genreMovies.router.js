const Router = require('express');

const router = new Router();
const genreMovieController = require('../Controllers/genreMovies.controller');

router.post('/genreMovie', genreMovieController.assignGenre);
router.get('/genreMovie', genreMovieController.getAllRecords);
router.get('/genreMovie/film/:id', genreMovieController.getAllFilmsId);
router.get('/genreMovie/genre/:id', genreMovieController.getAllGenresId);
router.delete('/genreMovie/:id', genreMovieController.deleteRecordsByFilmId);

module.exports = router;
