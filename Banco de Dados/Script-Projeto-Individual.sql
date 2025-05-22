create database DogsWorld;

use DogsWorld;

-- Criando a tabela usuário
create table usuario (
idUsuario int primary key auto_increment,
nome varchar (45),
email varchar (45),
senha varchar (45),
endereco varchar (100)	
);

-- criando a tabela votação
create table votacao (
idVotacao int auto_increment,
shitzu TINYINT,
golden TINYINT,
viralata TINYINT,
yorkshire TINYINT,
pastorAlemao TINYINT,
outro TINYINT,
naoTem TINYINT,
fkUsuario int,
	foreign key (fkUsuario) references usuario (idUsuario),
    primary key (idVotacao, fkUsuario)
);
-- Criando a tabela sorteio
create table sorteio (
idSorteio int auto_increment,
bola TINYINT,
tapete TINYINT,
cama TINYINT,
racao TINYINT,
osso TINYINT,
pote TINYINT,
fkUsuario int,
	foreign key (fkUsuario) references usuario (idUsuario),
    primary key (idSOrteio, fkUsuario)
);

-- select para saber as pssoas que votaram em determinados dogs
select nome, email, endereco, shitzu, golden, viralata, yorkshire, pastorAlemao, outro, naoTem from usuario
	join votacao
		on fkUsuario = idUsuario;
   
-- selects
select * from usuario;
select * from votacao;
select * from sorteio;


