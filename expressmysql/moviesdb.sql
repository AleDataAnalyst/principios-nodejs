-- creación de la base de datos
DROP DATABASE IF EXISTS moviesdb;
CREATE DATABASE moviesdb;

-- usar
USE moviesdb;

-- crear la tabla movies
CREATE TABLE movie (
	id BINARY(16) PRIMARY KEY DEFAULT (UUID_TO_BIN(UUID())),
    title VARCHAR(255) NOT NULL,
    year INT NOT NULL, 
    director VARCHAR(255) NOT NULL,
    duration INT NOT NULL,
    poster TEXT,
    rate DECIMAL(2, 1) UNSIGNED NOT NULL
);

CREATE TABLE genre (
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE movie_genres (
	movie_id BINARY(16) REFERENCES movies(id),
    genre_id INT REFERENCES genres(id),
    PRIMARY KEY (movie_id, genre_id)
);

INSERT INTO genre (name) VALUES
('Drama'),
('Action'),
('Crime'),
('Adventure'),
('Sci-Fi'),
('Romance');

INSERT INTO movie (id, title, year, director, duration, poster, rate) VALUES
(UUID_TO_BIN(UUID()), "The Shawshank Redemption", 1994, "Frank Darabont", 142, "https://www.filmaffinity.com/en/film161026.html", 9.3),
(UUID_TO_BIN(UUID()), "Pulp Fiction", 1994, "Quentin Tarantino", 154, "https://www.filmaffinity.com/en/filmimagesnojs.php?movie_id=160882", 8.9),
(UUID_TO_BIN(UUID()), "Forrest Gump", 1994, "Robert Zemeckis", 169, "https://m.filmaffinity.com/es/film444796.html", 8.8),
(UUID_TO_BIN(UUID()), "Seven", 1995, "David Fincher", 129, "https://m.filmaffinity.com/es/film575149.html", 8.6),
(UUID_TO_BIN(UUID()), "The Usual Suspects", 1995, "Bryan Singer", 106, "https://www.filmaffinity.com/es/film408515.html", 8.6);

INSERT INTO movie_genres (movie_id, genre_id)
VALUES
  ((SELECT id FROM movie WHERE title = 'The Shawshank Redemption'),
   (SELECT id FROM genre WHERE name = 'Sci-Fi'));

INSERT INTO movie_genres (movie_id, genre_id)
VALUES
  ((SELECT id FROM movie WHERE title = 'Pulp Fiction'),
   (SELECT id FROM genre WHERE name = 'Action'));

INSERT INTO movie_genres (movie_id, genre_id)
VALUES
  ((SELECT id FROM movie WHERE title = 'Forrest Gump'),
   (SELECT id FROM genre WHERE name = 'Drama'));

INSERT INTO movie_genres (movie_id, genre_id)
VALUES
  ((SELECT id FROM movie WHERE title = 'Seven'),
   (SELECT id FROM genre WHERE name = 'Crime'));


 SELECT * FROM movie;




