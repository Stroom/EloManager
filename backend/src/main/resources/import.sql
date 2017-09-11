insert into game (game_id, game_type, name) values (1, 'POOL_8_BALL', '8 Ball Pool');
insert into game (game_id, game_type, name) values (2, 'CHESS', 'Chess');

insert into user (user_id, name) values (1, 'Sander');
insert into user (user_id, name) values (2, 'Viljar');
insert into user (user_id, name) values (3, 'Uno');

insert into ranking (ranking_id, value, game_game_id, user_user_id) values (1, 1200, 1, 1);
insert into ranking (ranking_id, value, game_game_id, user_user_id) values (2, 1200, 1, 2);
insert into ranking (ranking_id, value, game_game_id, user_user_id) values (3, 1400, 2, 1);

--insert into match (match_id, date_time, game_game_id)  values ();
--insert into player (player_id, score, match_match_id, user_user_id) values ();

--default admin user with password
insert into authority (id, name) values (1, 'ROLE_ADMIN');
insert into site_user (id, username, password, enabled, last_password_reset_date) values (1, 'admin', '$2a$10$080R7I9288brL.fzDYS32ugoe2mzqJxuuJjLg0r/ibIH0Lrj2Bonm', true, PARSEDATETIME('2016-11-09', 'yyyy-MM-dd'));
insert into site_user_authorities (site_user_id, authorities_id) values (1, 1);