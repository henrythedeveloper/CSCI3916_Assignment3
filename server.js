const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const authJwtController = require('./auth_jwt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const User = require('./Users');
const Movie = require('./Movies');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());

const router = express.Router();

router.post('/signup', async (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({ success: false, msg: 'Please include both username and password to signup.' });
  }

  try {
    const user = new User({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
    });

    await user.save();

    res.status(201).json({ success: true, msg: 'Successfully created new user.' });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ success: false, message: 'A user with that username already exists.' });
    } else {
      console.error(err);
      return res.status(500).json({ success: false, message: 'Something went wrong. Please try again later.' });
    }
  }
});

router.post('/signin', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username }).select('name username password');

    if (!user) {
      return res.status(401).json({ success: false, msg: 'Authentication failed. User not found.' });
    }

    const isMatch = await user.comparePassword(req.body.password);

    if (isMatch) {
      const userToken = { id: user._id, username: user.username, name: user.name };
      const token = jwt.sign(userToken, process.env.SECRET_KEY, { expiresIn: '1h' });
      res.json({ success: true, token: 'JWT ' + token });
    } else {
      res.status(401).json({ success: false, msg: 'Authentication failed. Incorrect password.' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Something went wrong. Please try again later.' });
  }
});

// Movie Routes
router.route('/movies')
    .get(authJwtController.isAuthenticated, async (req, res) => {
        try {
            const includeReviews = req.query.reviews === 'true';
            let query = Movie.find();
            
            if (includeReviews) {
                // Include reviews in response if requested
                // No need for special pipeline since we're storing reviews directly in the Movie schema
            }
            
            const movies = await query.exec();
            return res.status(200).json(movies);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: 'Error retrieving movies' });
        }
    })
    .post(authJwtController.isAuthenticated, async (req, res) => {
        try {
            // Validate movie has required fields
            if (!req.body.title || !req.body.releaseDate || !req.body.genre) {
                return res.status(400).json({ success: false, message: 'Missing required fields (title, releaseDate, or genre)' });
            }
            
            // Validate actors array has at least 3 actors
            if (!req.body.actors || req.body.actors.length < 3) {
                return res.status(400).json({ success: false, message: 'Movie must have at least 3 actors' });
            }
            
            // Validate each actor has actorName and characterName
            for (const actor of req.body.actors) {
                if (!actor.actorName || !actor.characterName) {
                    return res.status(400).json({ success: false, message: 'Each actor must have actorName and characterName' });
                }
            }
            
            const movie = new Movie(req.body);
            const savedMovie = await movie.save();
            return res.status(201).json({ success: true, message: 'Movie added successfully', movie: savedMovie });
        } catch (err) {
            if (err.name === 'ValidationError') {
                return res.status(400).json({ success: false, message: err.message });
            }
            console.error(err);
            return res.status(500).json({ success: false, message: 'Error saving movie' });
        }
    });

router.route('/movies/:movieId')
    .get(authJwtController.isAuthenticated, async (req, res) => {
        try {
            const includeReviews = req.query.reviews === 'true';
            let query = Movie.findById(req.params.movieId);
            
            const movie = await query.exec();
            if (!movie) {
                return res.status(404).json({ success: false, message: 'Movie not found' });
            }
            
            return res.status(200).json(movie);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: 'Error retrieving movie' });
        }
    })
    .put(authJwtController.isAuthenticated, async (req, res) => {
        try {
            // Check if movie with that ID exists
            const movie = await Movie.findById(req.params.movieId);
            if (!movie) {
                return res.status(404).json({ success: false, message: 'Movie not found' });
            }
            
            // Update movie with new data
            const updatedMovie = await Movie.findByIdAndUpdate(
                req.params.movieId,
                req.body,
                { new: true, runValidators: true }
            );
            
            return res.status(200).json({ success: true, message: 'Movie updated successfully', movie: updatedMovie });
        } catch (err) {
            if (err.name === 'ValidationError') {
                return res.status(400).json({ success: false, message: err.message });
            }
            console.error(err);
            return res.status(500).json({ success: false, message: 'Error updating movie' });
        }
    })
    .delete(authJwtController.isAuthenticated, async (req, res) => {
        try {
            const movie = await Movie.findByIdAndDelete(req.params.movieId);
            if (!movie) {
                return res.status(404).json({ success: false, message: 'Movie not found' });
            }
            
            return res.status(200).json({ success: true, message: 'Movie deleted successfully' });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: 'Error deleting movie' });
        }
    });

app.use('/', router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // for testing only