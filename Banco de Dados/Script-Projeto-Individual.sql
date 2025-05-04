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