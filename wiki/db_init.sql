create database project_datsys;
use project_datsys;

create table authors(
    id int primary key auto_increment,
    name varchar(30),
    jp_name varchar(50)
);

create table illustrators(
    id int primary key auto_increment,
    name varchar(30),
    jp_name varchar(50)
);

create table labels(
    id int primary key auto_increment,
    name varchar(30),
    jp_name varchar(50),
    link varchar(50)
);

create table series(
    id int primary key auto_increment,
    title varchar(100),
    jp_name varchar(150),
    plot text,
    link varchar(50),
    genre text,
    author_id int,
    illustrator_id int,
    label_id int
    -- foreign key (author_id) references authors(id),
    -- foreign key (illustrator_id) references illustrators(id),
    -- foreign key (label_id) references labels(id)
);

create table books(
    id int primary key auto_increment,
    vol_number tinyint(2),
    page int(4),
    release_date date,
    cover_url varchar(255),
    store_url varchar(255),
    series_id int
    -- foreign key (series_id) references series(id)
);