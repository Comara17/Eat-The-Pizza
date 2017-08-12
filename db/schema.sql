create database pizza_db;
use pizza_db;

CREATE TABLE pizzas
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
