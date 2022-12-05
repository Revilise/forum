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
    author_id int
        references users(user_id)
        on DELETE CASCADE on UPDATE CASCADE,
    conference_id int
        references conferences(conference_id)
        on DELETE CASCADE on UPDATE CASCADE
);

-- DROP TABLE votes;

CREATE TABLE votes (
    vote_id SERIAL PRIMARY KEY,
    conference_id int
        references conferences(conference_id)
        on DELETE CASCADE on UPDATE CASCADE,
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

--------------------------------------------------

DROP TRIGGER trigger_on_conference_insert ON conferences;

CREATE OR REPLACE FUNCTION on_conference_insert()
RETURNS TRIGGER
    LANGUAGE plpgsql
    AS
$$
BEGIN
    INSERT INTO conference_sum_vote (conference_id, vote)
    VALUES (NEW.conference_id, 0);

    RETURN NEW;
END;
$$;

-- DROP TRIGGER trigger_on_conference_insert ON conferences;

CREATE TRIGGER trigger_on_conference_insert
    AFTER INSERT
    ON conferences
    FOR EACH ROW
    EXECUTE PROCEDURE on_conference_insert();


SELECT MD5(' ');
--------------------------------------------------

CREATE OR REPLACE FUNCTION on_vote_insert()
RETURNS TRIGGER
    LANGUAGE plpgsql
    AS
$$
BEGIN
    UPDATE conference_sum_vote
        SET vote = (
            SELECT SUM(vote) FROM user_votes
            WHERE user_votes.conference_id = conference_sum_vote.conference_id
        )
    WHERE NEW.conference_id = conference_id;

    RETURN NEW;
END;
$$;

CREATE TRIGGER trigger_on_vote_insert
    AFTER INSERT
    ON user_votes
    FOR EACH ROW
    EXECUTE PROCEDURE on_vote_insert();

CREATE TRIGGER trigger_on_vote_update
    AFTER UPDATE
    ON user_votes
    FOR EACH ROW
    EXECUTE PROCEDURE on_vote_insert();

--------------------------------------------------

CREATE OR REPLACE PROCEDURE InsertOrUpdateUserVote(_user_id int, _conference_id int, _vote int)
LANGUAGE plpgsql
AS
$BODY$
BEGIN
    IF (EXISTS(SELECT user_vote_id FROM user_votes WHERE user_id = _user_id AND conference_id = _conference_id))
        THEN UPDATE user_votes SET vote = _vote WHERE conference_id = _conference_id AND user_id = _user_id;
    ELSE INSERT INTO user_votes (conference_id, user_id, vote)
        VALUES (_conference_id, _user_id, _vote);
    END IF;

    DELETE FROM user_votes WHERE vote = 0;
END;
$BODY$;

SELECT
    conferences.conference_id,
    conference_name as title,
    conference_text as text,
    datetime,
    u.vote as vote
FROM conferences LEFT JOIN user_votes u ON conferences.conference_id = u.conference_id AND u.user_id = 1;


SELECT CASE WHEN EXISTS(SELECT user_vote_id FROM user_votes WHERE user_votes.user_id = 2 AND conference_id = 6) THEN 1 ELSE 2 END AS value;

SELECT
    conference_name as title,
    conference_text as text,
    datetime,
    u.user_name as author
FROM conferences c
JOIN users u ON c.author_id = u.user_id
WHERE c.conference_id = 7;


SELECT
       r.name as role,
       user_id as id,
       user_name as name,
       f.file_path as filepath
FROM users
JOIN roles r on users.role_id = r.role_id
JOIN files f on users.avatar_id = f.file_id
WHERE user_id = $1;
-- WHERE user_login = $1 AND user_password = MD5($2)



SELECT
    com.conference_id,
    com.author_id,
    conference_name as title,
    conference_text as text,
    TO_CHAR(conferences.datetime :: DATE, 'dd-mm-yyyy') as datetime,
    u.vote as vote,
    c.vote as total
FROM conferences LEFT JOIN user_votes u ON conferences.conference_id = u.conference_id AND u.user_id = 2
LEFT JOIN conference_sum_vote c on conferences.conference_id = c.conference_id
INNER JOIN comments com on conferences.conference_id = com.conference_id
GROUP BY com.conference_id, com.author_id, com.conference_id, conference_name, conference_text, TO_CHAR(conferences.datetime :: DATE, 'dd-mm-yyyy'), u.vote, c.vote
HAVING com.author_id = 2
ORDER BY total DESC


SELECT
    conferences.conference_id as conference_id,
    conference_name as title,
    conference_text as text,
    comments.author_id,
    TO_CHAR(conferences.datetime :: DATE, 'dd-mm-yyyy') as datetime,
    u.vote as vote,
    c.vote as total
FROM conferences
LEFT JOIN user_votes u ON conferences.conference_id = u.conference_id AND u.user_id = 1
LEFT JOIN conference_sum_vote c on conferences.conference_id = c.conference_id
INNER JOIN comments on conferences.conference_id = comments.conference_id
WHERE EXISTS(
    SELECT comments.author_id FROM comments WHERE comments.author_id = 1
          ) = true;

SELECT
       conferences.conference_id,
       conference_name as title,
       conference_text as text,
       TO_CHAR(datetime :: DATE, 'dd-mm-yyyy') as datetime,
       u.vote as vote,
       c.vote as total,
       filepath
FROM conferences LEFT JOIN user_votes u ON conferences.conference_id = u.conference_id AND u.user_id = 1
LEFT JOIN conference_sum_vote c on conferences.conference_id = c.conference_id

ORDER BY total DESC;


SELECT
       comment_id,
       comment_text as text,
       TO_CHAR(datetime :: DATE, 'dd-mm-yyyy hh:mm') as datetime,
       u.user_name as author,
       f.file_path as filepath
FROM comments
JOIN users u on comments.author_id = u.user_id
JOIN files f on u.avatar_id = f.file_id
WHERE conference_id = 8


CREATE OR REPLACE FUNCTION on_conference_delete()
RETURNS TRIGGER
    LANGUAGE plpgsql
    AS
$$
BEGIN
    DELETE FROM conference_sum_vote WHERE conference_id = NEW.conference_id;
    RETURN NEW;
END
$$;

DROP FUNCTION on_conference_delete



DROP TRIGGER on_conference_delete_trigger ON conferences

CREATE TRIGGER on_conference_delete_trigger BEFORE DELETE
    ON conferences
    FOR EACH ROW
    EXECUTE PROCEDURE on_conference_delete();


CREATE OR REPLACE PROCEDURE ChangeUserAvatar(filename varchar(255), userId int)
LANGUAGE plpgsql
AS
$$
BEGIN
    IF (NOT EXISTS(SELECT * FROM files WHERE filename = file_name))
        THEN INSERT INTO files (file_name, file_path) VALUES (filename, concat('/uploads/', filename));
        UPDATE users SET avatar_id = (SELECT MAX(file_id) FROM files) WHERE user_id = userId;
    END IF;
END;
$$;

CALL ChangeUserAvatar('3', 3)