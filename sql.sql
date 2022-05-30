DROP TABLE "users";
CREATE TABLE users(
    id serial PRIMARY KEY,
    first_name varchar(255) NOT NULL CHECK (first_name !=''),
    last_name varchar(255) NOT NULL CHECK (last_name !=''),
    email varchar(255) NOT NULL CHECK (email !=''),
    password text NOT NULL, 
    birthday date,
    gender varchar(255)
);
INSERT INTO users (first_name, last_name, email, password, birthday, gender) VALUES 
('mike', 'rout', 'erfq@mail', '123456sdf', '2000/05/05', 'male'),
('Nike', 'pitt', 'erfq@dgsmail', '1sgdr56sdf', '2005/05/05', 'male'),
('Garry', 'rout', 'erfq@mail', '1sgh56sdf', '2000/06/05', 'male'),
('Like', 'rout', 'erfq@mail', '12eatgsdf', '2000/01/01', 'male');