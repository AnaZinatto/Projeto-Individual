-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/
create database DogsWorld;

use DogsWorld;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar (45),
email varchar (45),
senha int
);

create table votação (
idVotacao int auto_increment,
golden int,
viralata int,
shitzu int,
yorkshire int,
labrador int,
outro int,
fkUsuario int,
	constraint fkUsuarioVotacao
    foreign key (fkUsuario) references usuario (idUsuario),
    primary key (idVotacao, fkUsuario)
);


select * from usuario;
select * from votação;