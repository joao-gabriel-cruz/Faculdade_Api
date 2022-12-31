CREATE TABLE students (
  id_student text not null primary key,
  registration int ,
  name varchar(50),
  course varchar(50),
  cpf varchar(15),
  email varchar(50),
  street varchar(30),
  district varchar(15),
  cep varchar(10),
  password text
)

create table teachers (
  id_teacher text primary key,
  name varchar(50),
  cpf varchar(15),
  subject varchar(25),
  email varchar(25),
  password text
) 

create table subject (
  id_subject text not null primary key,
  name varchar(50) unique,
  id_teacher text not null,
  id_student text not null,
  foreign key (id_teacher) references teachers (id_teacher),
  foreign key (id_student) references students (id_student)
)


create table posts (
  id_post text not null primary key,
  id_student text,
  id_teacher text,
  title varchar(50),
  paragraph text,
  likes int,
  roleUser varchar(15),
  foreign key (id_student) references students (id_student),
  foreign key (id_teacher) references teachers (id_teacher)
)

create table comments (
    id_comment text not null,
 	id_post text not null,
 	id_owner text not null,
 	text_comment text,
 	likes int,
 	foreign key (id_post) references posts (id_post)
)

                       
