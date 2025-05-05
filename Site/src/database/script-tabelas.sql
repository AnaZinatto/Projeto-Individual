-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!
/* para workbench - local - desenvolvimento */
create database DogsWorld;

use DogsWorld;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar (45),
email varchar (45),
endereco varchar (200)
);

create table votação (
idVotacao int auto_increment,
golden int,
viralata int,
shitzu int,
yorkshire int,
labrador int,
outro int,
nãotem int,
fkUsuario int,
	constraint fkUsuarioVotacao
    foreign key (fkUsuario) references usuario (idUsuario),
    primary key (idVotacao, fkUsuario)
);

create table sorteio (
idSorteio int auto_increment,
bola int,
tapeteHigienico int, 
cama int,
racao int,
coleira int,
osso int, 
pote int,
fkVotacao int,
fkUsuario int,
	constraint fkVotacaoSorteio foreign key (fkVotacao) references votação (idVotacao),
	constraint fkUsuarioSorteio foreign key (fkUsuario) references usuario (idUsuario),
    primary key (idSorteio, fkVotacao, fkUsuario) 
);


select * from usuario;
select * from votação;
select * from sorteio;