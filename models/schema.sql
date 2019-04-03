DROP DATABASE IF EXISTS galleryDb;
CREATE DATABASE galleryDb;
USE galleryDb;

CREATE TABLE creations 
(
    id          int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    category    varchar(200) NOT NULL,
    item_name   varchar(200) NOT NULL,
    available   BOOLEAN DEFAULT true

);
