-- CREATE TABLES --------------------------

CREATE TABLE roles (
	role_id SERIAL PRIMARY KEY,
	name VARCHAR(50)
);

CREATE TABLE files (
    file_id SERIAL PRIMARY KEY,
    file_name VARCHAR(125),
    file_path VARCHAR(150)
);

CREATE TABLE users (
	user_id SERIAL PRIMARY KEY,
	user_name VARCHAR(125),
	user_email VARCHAR(125),
	user_login VARCHAR(125),
	user_password VARCHAR(150),
	role_id int REFERENCES roles(role_id),
	avatar_id int REFERENCES files(file_id)
);

CREATE TABLE conferences (
      conference_id SERIAL PRIMARY KEY,
      conference_name VARCHAR(125),
      conference_text VARCHAR(2000),
      author_id int,
      datetime timestamp
);

CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    comment_text VARCHAR(255),
    datetime timestamp,
    author_id int references users(user_id),
    conference_id int references conferences(conference_id)
);

CREATE TABLE votes (
    vote_id SERIAL PRIMARY KEY,
    conference_id int references conferences(conference_id),
    user_id int references users(user_id),
    vote int
);

-- INSERT INTO TABLES --------------------------

SELECT md5('password');

INSERT INTO roles (name) VALUES('admin'), ('moder'), ('user');

INSERT INTO files (file_name, file_path) VALUES (null, null);

INSERT INTO users (user_name, user_email, user_login, user_password, role_id, avatar_id) VALUES (
    'User', 'email@c.ru', 'userlog', md5('123'), 3, 1
);