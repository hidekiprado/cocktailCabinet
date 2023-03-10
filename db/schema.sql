SELECT 'CREATE DATABASE cocktail_cabinet' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'cocktail_cabinet') \gexec

\c cocktail_cabinet;

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name text,
    email text NOT NULL,
    password text NOT NULL
);

DROP TABLE IF EXISTS liquor CASCADE;
CREATE TABLE liquor (
    id SERIAL PRIMARY KEY,
    name text NOT NULL,
    image text
);

DROP TABLE IF EXISTS cabinet_contents;
CREATE TABLE cabinet_contents (
    id SERIAL PRIMARY KEY,
    user_id integer REFERENCES users (id),
    liquor_id integer REFERENCES liquor (id),
    volume integer NOT NULL
);

DROP TABLE IF EXISTS cocktail CASCADE;
CREATE TABLE cocktail (
    id SERIAL PRIMARY KEY,
    name text NOT NULL,
    description text,
    procedure text
);

DROP TABLE IF EXISTS cocktail_ingredients;
CREATE TABLE cocktail_ingredients (
    id SERIAL PRIMARY KEY,
    cocktail_id integer REFERENCES cocktail (id),
    liquor_id integer REFERENCES liquor (id),
    volume integer NOT NULL
);


