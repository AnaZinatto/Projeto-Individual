create database DogsWorld;

use DogsWorld;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar (45),
email varchar (45)
);

create table votação (
idVotacao int primary key auto_increment,
golden int,
viralata int,
shitzu int,
yorkshire int,
labrador int,
outro int,
fkUsuario int,
	constraint fkUsuarioVotacao
    foreign key (fkUsuario) references usuario (idUsuario)
);

select * from usuario;
select * from votação;