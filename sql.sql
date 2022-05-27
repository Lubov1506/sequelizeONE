CREATE TABLE User(
    id serial PRIMARY KEY,
    first_name varchar(255) NOT NULL CHECK (first_name !=''),
    last_name varchar(255) NOT NULL CHECK (last_name !=''),
    email varchar(255) NOT NULL CHECK (email !=''),
    password text NOT NULL, 
    birthday date,
    gender varchar(255),
    created_at timestamp NOT NULL,
    updated_at timestamp NOT NULL
)