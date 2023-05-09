const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const director = require('./Routes/director.router');
const genre = require('./Routes/genre.router');
const movie = require('./Routes/movie.router');
const genreMovie = require('./Routes/genreMovies.router');
const user = require('./Routes/user.router')

const PORT = 3000;
const app = express();

app.use(express.json());
app.use('/api', director);
app.use('/api', genre);
app.use('/api', movie);
app.use('/api', genreMovie);
app.use('/api', user)

app.listen(PORT, () => console.log(`Server start on ${PORT} port`));
