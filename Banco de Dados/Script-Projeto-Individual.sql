create database DogsWorld;

use DogsWorld;


create table sorteio (
idSorteio int primary key auto_increment,
bola int,
tapete int,
cama int,
racao int,
osso int,
pote int
);

create table formulario (
idVotacao int primary key auto_increment,
shitzu int,
golden int,
viralata int,
yorkshire int,
pastorAlemao int,
outro int,
naoTem int,
fkSorteio int,
	constraint fkFormularioSorteio foreign key (fkSorteio) references sorteio (idSorteio)
);


create table usuario (
idUsuario int primary key auto_increment,
nome varchar (45),
email varchar (45),
endereco varchar (100),
fkFormulario int,
	constraint fkFormularioUsuario foreign key (fkFormulario) references formulario (idVotacao)
	
);


select * from usuario;
select * from formulario;
select * from sorteio;