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
brinde varchar (45),
fkUsuario int,
	foreign key (fkUsuario) references usuario (idUsuario),
    primary key (idSorteio, fkUsuario)
);

-- select para saber as pssoas que votaram em determinados dogs
select u.nome, 
	u.email, 
    u.endereco, 
    v.shitzu, 
    v.golden, 
    v.viralata, 
    v.yorkshire, 
    v.pastorAlemao, 
    v.outro, 
    v.naoTem, 
    s.brinde 
from usuario u
	join votacao v on v.fkUsuario = u.idUsuario
	join sorteio s on s.fkUsuario = u.idUsuario;
		
        
select shitzu, 
   golden, 
    viralata, 
    yorkshire, 
    pastorAlemao, 
    outro, 
    naoTem from votacao;
    
    



select 
    SUM(shitzu + golden + viralata + yorkshire + pastorAlemao + outro) as 'Total Dogs'
from votacao;

select sum(naoTem) as 'Não tem cachorro'
	from votacao;

 SELECT 'Shitzu' AS raca, SUM(shitzu) AS quantidade FROM votacao
        UNION
        SELECT 'Golden', SUM(golden) FROM votacao
        UNION
        SELECT 'Vira-lata', SUM(viralata) FROM votacao
        UNION
        SELECT 'Yorkshire', SUM(yorkshire) FROM votacao
        UNION
        SELECT 'Pastor Alemão', SUM(pastorAlemao) FROM votacao
        UNION
        SELECT 'Outro', SUM(outro) FROM votacao
        UNION
        SELECT 'Nenhum', SUM(naoTem) FROM votacao;
   
-- selects
select * from usuario;
select * from votacao;
select * from sorteio;
