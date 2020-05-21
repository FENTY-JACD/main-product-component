DROP DATABASE fentymain;

CREATE DATABASE fentymain;

\c fentymain;


CREATE TABLE products (
  id serial PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price INTEGER NOT NULL,
  category VARCHAR(50) NOT NULL,
  description VARCHAR(1000) NOT NULL,
  rating INTEGER NOT NULL,
  reviews INTEGER NOT NULL,
  marketing VARCHAR (255),
  background VARCHAR(1000) NOT NULL,
  img1 VARCHAR(1000),
  img2 VARCHAR(1000),
  img3 VARCHAR(1000),
  name1 VARCHAR(255) NOT NULL,
  name2 VARCHAR(255) NOT NULL,
  name3 VARCHAR(255) NOT NULL,
  color1 VARCHAR(255) NOT NULL,
  color2 VARCHAR(255) NOT NULL,
  color3 VARCHAR(255) NOT NULL
);

-- This is my redux of the database to create one table.