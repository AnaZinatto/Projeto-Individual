create database sprint3;
 use sprint3;
 
 
 -- table cliente que se auto relaciona com o cliente que indica 
create table cliente (
idCliente int primary key auto_increment,
nome varchar (45),
email varchar (45),
endereco varchar (200),
fkIndicador int, 
	constraint fkClienteIndicador
    foreign key (fkIndicador) references cliente (idCliente)
);

-- criação da tabela produto
create table produto (
idProduto int primary key auto_increment,
nome varchar (45),
descricao varchar (200),
preco int
);

create table venda (
idVenda int primary key auto_increment,
totalVenda int,
dataVenda date,
fkCliente int,
	constraint fkVendaCliente
    foreign key (fkCliente) references cliente (idCliente)
);

-- junção das tableas venda e produto formou essa
create table recibo (
  idRecibo int auto_increment,
  fkProduto int,
  fkVenda int,
  fkCliente int,
  dataRecibo date,
quantidade int,
  foreign key (fkProduto) references produto(idProduto),
  foreign key(fkVenda) references venda(idVenda),
  foreign key (fkCliente) references cliente(idCliente),
  constraint pkComposta primary key (idRecibo, fkProduto, fkVenda)
);



-- Inserindo clientes
insert into cliente (nome, endereco, email, fkIndicador) values
('João', 'Rua das antas', 'joao@gmail.com', NULL),
('Maria', 'Rua figueiras', 'maria@gmail.com', 1),
('Carlos', 'Rua das panetras', 'carlos@gmail.com', 1),
('Ana', 'Rua pinhal', 'ana@gmail.com', 2);


select * from cliente;

-- Inserindo produtos
insert into produto (nome, descricao, preco) values
('Calça Jeans', 'Calça Jeans rasgada azul claro tam 40', 100),
('Camiseta polo', 'Camiseta masculina polo branc tam pp', 90),
('Short jeans', 'Short jeans preto tam 34', 150);

select * from produto;

-- Inserindo venda
insert into venda (totalVenda, dataVenda, fkCliente) values
(300.00, '2025-05-01', 1),
(150.00, '2025-05-01', 2),
(350.00, '2025-05-02', 1),
(200.00, '2025-05-02', 3);

select * from venda;

-- Inserindo recibos
insert into recibo (fkProduto, fkVenda, fkCliente, dataRecibo, quantidade) values
(1, 1, 1, '2025-05-01', 2),
(2, 1, 1, '2025-05-01', 1),
(3, 2, 2, '2025-05-01', 1),
(1, 3, 1, '2025-05-02', 1),
(2, 4, 3, '2025-05-02', 1);

select * from recibo;

-- g) Exibir os dados dos clientes e os dados de suas respectivas vendas.

select 
  cliente.idCliente,
  cliente.nome as "Nome do Cliente",
  cliente.email,
  cliente.endereco,
  venda.idVenda,
  venda.totalVenda,
  venda.dataVenda
from cliente
join venda on cliente.idCliente = venda.fkCliente;


-- h) Exibir os dados de um determinado cliente (informar o nome do cliente na consulta)e os dados de suas respectivas vendas.

select 
  cliente.idCliente,
  cliente.nome as "Nome do Cliente",
  cliente.email,
  cliente.endereco,
  venda.idVenda,
  venda.totalVenda,
  venda.dataVenda
from cliente
join venda on cliente.idCliente = venda.fkCliente
where cliente.nome = 'Maria';

select 
  cliente.idCliente,
  cliente.nome as "Nome do Cliente",
  cliente.email,
  cliente.endereco,
  indicador.nome as "Cliente Indicador"
from cliente cliente
left join cliente indicador on cliente.fkIndicador = indicador.idCliente;


select 
  cliente.idCliente,
  cliente.nome as "Nome do Cliente",
  cliente.email,
  cliente.endereco,
  indicador.nome as "Cliente Indicador"
from cliente cliente
left join cliente indicador on cliente.fkIndicador = indicador.idCliente
where indicador.nome = 'João';


select 
  c.idCliente,
  c.nome as "Nome do Cliente",
  c.email,
  c.endereco,
  i.nome as "Cliente Indicador",
  v.idVenda,
  v.totalVenda,
  v.dataVenda,
  p.nome as "Produto",
  p.descricao,
  p.preco
from cliente c
left join cliente i on c.fkIndicador = i.idCliente
left join venda v on c.idCliente = v.fkCliente
left join produto p on p.idProduto = v.fkCliente;


select
  v.dataVenda,
  p.nome as "Produto",
  r.quantidade
from recibo r
join venda v on r.fkVenda = v.idVenda
join produto p on r.fkProduto = p.idProduto
where r.fkVenda = 1;



-- n) Exibir apenas o nome do produto, o valor do produto e a soma da quantidade de produtos vendidos agrupados pelo nome do produto.
-- OBS: Tive que dar umas pesquisadas para fazer essa etapa

select 
  p.nome as "Produto",
  p.preco as "Preço Unitário",
  SUM(r.quantidade) as "Total Vendido",
  SUM(r.quantidade * p.preco) as "Total Arrecadado"
from recibo r
join produto p on r.fkProduto = p.idProduto
group by p.nome, p.preco;


select 
  MIN(p.preco) as "Preço Mínimo",
  MAX(p.preco) as "Preço Máximo"
from produto p;

select 
  SUM(p.preco) as "Soma dos Preços",
  AVG(p.preco) as "Média dos Preços"
from produto p;

select 
	count(p.nome)
from recibo r
join produto p on r.fkProduto = p.idProduto
where p.preco > avg(p.preco)
group by p.nome, p.preco;

select 
  SUM(p.preco) as "Soma dos Preços",
  AVG(p.preco) as "Média dos Preços"
from produto p;

































