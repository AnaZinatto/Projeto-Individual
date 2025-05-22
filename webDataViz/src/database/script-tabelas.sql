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
senha varchar (45),
endereco varchar (100)	
);

create table votacao (
idVotacao int auto_increment,
shitzu int,
golden int,
viralata int,
yorkshire int,
pastorAlemao int,
outro int,
naoTem int,
fkUsuario int,
	foreign key (fkUsuario) references usuario (idUsuario),
    primary key (idVotacao, fkUsuario)
);

select nome, email, endereco, shitzu, golden, viralata, yorkshire, pastorAlemao, outro, naoTem from usuario
	join votacao
		on fkUsuario = idUsuario;
        


create table sorteio (
idSorteio int primary key auto_increment,
bola int,
tapete int,
cama int,
racao int,
osso int,
pote int
);
drop table sorteio;


select * from usuario;
select * from votacao;
select * from sorteio;
