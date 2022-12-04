
-- criação da tabela de usuários
CREATE TABLE students (registration text primary key,
                       name varchar(50),
                       course varchar(30),
                       cpf varchar(15),
                       email varchar(50),
                       street varchar(30),
                       street_number integer,
                       district varchar(15),
                       cep varchar(10)
                       )
                       