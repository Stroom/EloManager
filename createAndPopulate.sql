drop table site_user_authorities;
drop table site_user;
drop table ranking;
drop table player;
drop table match_players;
drop table match;
drop table game_user;
drop table game;
drop table authority;

create table authority (id bigint primary key, name varchar(255) not null);
create table game (game_id bigint primary key, game_type varchar(255), name varchar(255) not null);
create table game_user (user_id bigint primary key, name varchar(255) not null);
create table match (match_id bigint primary key, date_time timestamp, game_game_id bigint);
create table match_players (match_match_id bigint not null, players_player_id bigint not null);
create table player (player_id bigint primary key, score decimal(19,2), game_user_user_id bigint);
create table ranking (ranking_id bigint primary key, value decimal(11,5) not null, game_game_id bigint not null, game_user_user_id bigint not null);
create table site_user (id bigint primary key, enabled boolean not null, last_password_reset_date timestamp not null, password varchar(255) not null, username varchar(255) not null);
create table site_user_authorities (site_user_id bigint not null, authorities_id bigint not null);

alter table authority add constraint UK_jdeu5vgpb8k5ptsqhrvamuad2 unique (name);
alter table game add constraint UK_jare70vqqti665ds3b2eh7rk8 unique (name);
alter table game_user add constraint UK_7acswnrsg3hrxc7m48xg91eue unique (name);
alter table match_players add constraint UK_t78tum2324o6t3fp1jmaoldte unique (players_player_id);
alter table site_user add constraint UK_jerlw3g2urnh55wcrm2b5kqnj unique (username);
alter table match add constraint FK1gf3fp6fh6km1227w3n1aout1 foreign key (game_game_id) references game;
alter table match_players add constraint FKpjh7ye4m8sun14guedfjxk50j foreign key (players_player_id) references player;
alter table match_players add constraint FKphqdy50irsn7dphvjl9lckohk foreign key (match_match_id) references match;
alter table player add constraint FKeappnu7r7mhg70gm5we0myf78 foreign key (game_user_user_id) references game_user;
alter table ranking add constraint FKnng63ladcr7k3ms4d5orua74l foreign key (game_game_id) references game;
alter table ranking add constraint FKa26emro5ebitus3hyul1s6e6d foreign key (game_user_user_id) references game_user;
alter table site_user_authorities add constraint FKaxnrtb50r89252bjrrsgj0n39 foreign key (authorities_id) references authority;
alter table site_user_authorities add constraint FKp23eryn02dex9bperx4pkd7bm foreign key (site_user_id) references site_user;

CREATE SEQUENCE hibernate_sequence START 1;

insert into game (game_id, game_type, name) values (1, 'POOL_8_BALL', '8 Ball Pool');

insert into authority (id, name) values (1, 'ROLE_ADMIN');
insert into site_user (id, username, password, enabled, last_password_reset_date) values (1, 'admin', '$2a$10$080R7I9288brL.fzDYS32ugoe2mzqJxuuJjLg0r/ibIH0Lrj2Bonm', true, '2016-11-09');
insert into site_user_authorities (site_user_id, authorities_id) values (1, 1);