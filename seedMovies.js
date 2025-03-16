require('dotenv').config();
const mongoose = require('mongoose');
const Movie = require('./Movies');

const sampleMovies = [
  {
    title: 'Inception',
    releaseDate: 2010,
    genre: 'Science Fiction',
    actors: [
      { actorName: 'Leonardo DiCaprio', characterName: 'Cobb' },
      { actorName: 'Joseph Gordon-Levitt', characterName: 'Arthur' },
      { actorName: 'Ellen Page', characterName: 'Ariadne' }
    ],
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg',
    reviews: [
      { username: 'user1', review: 'Mind-blowing!', rating: 5 },
      { username: 'user2', review: 'Confusing but enjoyable', rating: 4 }
    ],
    avgRating: 4.5
  },
  {
    title: 'The Dark Knight',
    releaseDate: 2008,
    genre: 'Action',
    actors: [
      { actorName: 'Christian Bale', characterName: 'Bruce Wayne/Batman' },
      { actorName: 'Heath Ledger', characterName: 'Joker' },
      { actorName: 'Aaron Eckhart', characterName: 'Harvey Dent/Two-Face' }
    ],
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
    reviews: [
      { username: 'user3', review: 'Ledger\'s Joker is iconic!', rating: 5 },
      { username: 'user4', review: 'Best superhero movie ever', rating: 5 }
    ],
    avgRating: 5
  },
  {
    title: 'Pulp Fiction',
    releaseDate: 1994,
    genre: 'Drama',
    actors: [
      { actorName: 'John Travolta', characterName: 'Vincent Vega' },
      { actorName: 'Samuel L. Jackson', characterName: 'Jules Winnfield' },
      { actorName: 'Uma Thurman', characterName: 'Mia Wallace' }
    ],
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    reviews: [
      { username: 'user5', review: 'Tarantino at his best!', rating: 5 },
      { username: 'user6', review: 'A cult classic', rating: 4 }
    ],
    avgRating: 4.5
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    releaseDate: 2001,
    genre: 'Fantasy',
    actors: [
      { actorName: 'Elijah Wood', characterName: 'Frodo Baggins' },
      { actorName: 'Ian McKellen', characterName: 'Gandalf' },
      { actorName: 'Viggo Mortensen', characterName: 'Aragorn' }
    ],
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg',
    reviews: [
      { username: 'user7', review: 'Epic beginning to an epic trilogy!', rating: 5 },
      { username: 'user8', review: 'Masterpiece of cinema', rating: 5 }
    ],
    avgRating: 5
  },
  {
    title: 'The Shawshank Redemption',
    releaseDate: 1994,
    genre: 'Drama',
    actors: [
      { actorName: 'Tim Robbins', characterName: 'Andy Dufresne' },
      { actorName: 'Morgan Freeman', characterName: 'Ellis Boyd \'Red\' Redding' },
      { actorName: 'Bob Gunton', characterName: 'Warden Norton' }
    ],
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    reviews: [
      { username: 'user9', review: 'The best movie ever made!', rating: 5 },
      { username: 'user10', review: 'Inspirational and moving', rating: 5 }
    ],
    avgRating: 5
  }
];

const seedMovies = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log('Connected to MongoDB');
    
    // Delete existing movies
    await Movie.deleteMany({});
    console.log('Cleared existing movies');
    
    // Insert new movies
    const createdMovies = await Movie.insertMany(sampleMovies);
    console.log(`Added ${createdMovies.length} movies to the database`);
    
    mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedMovies();