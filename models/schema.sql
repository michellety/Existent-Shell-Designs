-- Drops the database if it currently exists  --
DROP DATABASE IF EXISTS galleryDb;
-- Creates the "galleryDb" database --
CREATE DATABASE galleryDb;

INSERT INTO Creations (category, title, description, available, price) VALUES ("test", "A", "photo", true, 15);

