create database AthenasDB;
drop database athenasdb;
use AthenasDB;

create table Login(
id_login int primary key auto_increment,
ds_usuario varchar(100),
ds_senha varchar(50)
);
insert into Login(ds_usuario, ds_senha)
values('Angelica', 'P3rs0n4l#');


select*from login;

create table AthenasDB.Treinos_marcados(
treino_id int primary key auto_increment,
ds_objetivos_cliente enum('Emagrecer', 'Ganhar massa muscular', 'Ganhar resistência', 'Definir
o corpo') not null,
dt_treino datetime not null,
exercicios_escolhidos varchar(220) not null,
bt_concluido boolean,
id_login int,
foreign key (id_login) references Login (id_login)
);

insert into AthenasDB.Treinos_marcados(ds_objetivos_cliente, dt_treino, exercicios_escolhidos, bt_concluido)
values('Ganhar massa muscular', '2024-10-30', 'polichinelo 3x15', false);

/*****************************************************************/
create table AthenasDB.Avaliacao_fisica(
avaliacao_id int primary key auto_increment,
ds_peso varchar(50) not null,
ds_massa_livre_gordura varchar(50) not null,
ds_imc varchar(50) not null,
ds_massa_muscular varchar(50) not null,
ds_frequencia_cardiaca varchar (100) not null,
ds_massa_muscular_esqueletica varchar(50) not null,
ds_indice_coracao varchar(50) not null,
ds_massa_ossea varchar(50) not null,
ds_taxa_muscular varchar(50) not null,
ds_gordura_corporal varchar(50) not null,
ds_idade_metabolica varchar(50) not null,
ds_gordura_subcutanea varchar(50) not null,
ds_taxa_metabolica_basal varchar(50) not null,
ds_gordura_visceral varchar(50) not null,
ds_proteina varchar(50) not null,
ds_agua_corporal varchar(50) not null,
id_login int,
foreign key (id_login) references Login (id_login)
);

INSERT INTO AthenasDB.Avaliacao_fisica (
    ds_peso,
    ds_massa_livre_gordura,
    ds_imc,
    ds_massa_muscular,
    ds_frequencia_cardiaca,
    ds_massa_muscular_esqueletica,
    ds_indice_coracao,
    ds_massa_ossea,
    ds_taxa_muscular,
    ds_gordura_corporal,
    ds_idade_metabolica,
    ds_gordura_subcutanea,
    ds_taxa_metabolica_basal,
    ds_gordura_visceral,
    ds_proteina,
    ds_agua_corporal
) VALUES (
    '75kg',
    '60kg',
    '24.5',
    '30kg',
    '70 bpm',
    '25kg',
    '3.5',
    '3.0kg',
    '40%',
    '15%',
    '28 anos',
    '10%',
    '1500 kcal',
    '12%',
    '18g',
    '55%'
);

/*********************************************/
create table AthenasDB.Reavaliacao_fisica(
reavaliacao_id int primary key auto_increment,
ds_peso varchar(50) not null,
ds_massa_livre_gordura varchar(50) not null,
ds_imc varchar(50) not null,
ds_massa_muscular varchar(50) not null,
ds_frequencia_cardiaca varchar (100) not null,
ds_massa_muscular_esqueletica varchar(50) not null,
ds_indice_coracao varchar(50) not null,
ds_massa_ossea varchar(50) not null,
ds_taxa_muscular varchar(50) not null,
ds_gordura_corporal varchar(50) not null,
ds_idade_metabolica varchar(50) not null,
ds_gordura_subcutanea varchar(50) not null,
ds_taxa_metabolica_basal varchar(50) not null,
ds_gordura_visceral varchar(50) not null,
ds_proteina varchar(50) not null,
ds_agua_corporal varchar(50) not null,
id_login int,
foreign key (id_login) references Login (id_login)
);

INSERT INTO AthenasDB.Reavaliacao_fisica (
    ds_peso,
    ds_massa_livre_gordura,
    ds_imc,
    ds_massa_muscular,
    ds_frequencia_cardiaca,
    ds_massa_muscular_esqueletica,
    ds_indice_coracao,
    ds_massa_ossea,
    ds_taxa_muscular,
    ds_gordura_corporal,
    ds_idade_metabolica,
    ds_gordura_subcutanea,
    ds_taxa_metabolica_basal,
    ds_gordura_visceral,
    ds_proteina,
    ds_agua_corporal
) VALUES (
    '75kg',
    '60kg',
    '24.5',
    '30kg',
    '70 bpm',
    '25kg',
    '3.5',
    '3.0kg',
    '40%',
    '15%',
    '28 anos',
    '10%',
    '1500 kcal',
    '12%',
    '18g',
    '55%'
);

create table Cliente(
id_cliente int primary key auto_increment,
nome varchar (200),
nascimento date,
idade int,
telefone varchar (30),
treino_id int,
avaliacao_id int,
reavaliacao_id int,
img_cliente varchar (500),
foreign key (treino_id) references Treinos_marcados(treino_id),
foreign key (avaliacao_id) references Avaliacao_fisica(avaliacao_id),
foreign key (reavaliacao_id) references Reavaliacao_fisica(reavaliacao_id),
id_login int,
foreign key (id_login) references Login (id_login)
);

insert into Cliente (nome, nascimento, idade, telefone, treino_id, avaliacao_id, reavaliacao_id, img_cliente)
values ('Pauilo', '2005-07-08', 19, '11987652344', 1, 1, 1, '');

select * from Cliente;

/* página fazer login
repository fazer login -> só select
*/
select 
	ds_email,
	ds_senha 
from Login;

/* página info usuario
repository info usuario -> update, select
*/

select
	nm_usuario,
	ds_email,
	dt_nascimento,
	ds_cidade,
	ds_genero,
	ds_UF,
	img_usuario
from Usuario;

update Usuario
set 	nm_usuario =?,
		ds_email =?,
		dt_nascimento =?,
		ds_cidade =?,
		ds_genero =?,
		ds_UF =?,
		img_usuario =?
where id = 1;

/* página horario treinos
repository horario treinos -> select
*/
select 
	nome,
	dt_treino,
	telefone
from Cliente
inner join Treinos_marcados
on Cliente.treino_id = Treinos_marcados.treino_id;

/* página adicionar treinos 
repository adicionar cliente -> insert
*/
insert into Cliente(nome, nascimento, idade, telefone, treino_id, avaliacao_id, reavaliacao_id)
values(?,?,?,?,?,?);

insert into Avaliacao_fisica(ds_peso, ds_massa_livre_gordura, ds_imc, ds_massa_muscular, ds_frequencia_cardiaca, ds_massa_muscular_esqueletica, ds_indice_coracao, ds_massa_ossea, ds_taxa_muscular, ds_gordura_corporal, ds_idade_metabolica, ds_gordura_subcutanea, ds_taxa_metabolica_basal, ds_gordura_visceral, ds_proteina, ds_agua_corporal)
values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);

insert into Treinos_marcados(ds_objetivos_cliente, dt_treino, exercicios_escolhidos, bt_concluido)
values(?,?,?,?);

/* página infos cliente
repository infos cliente -> select, insert
*/
select 
	nome,
	nascimento,
	idade,
	telefone,
	dt_treino,
	img_cliente,
	
	ds_peso,
    ds_imc,
	ds_frequencia_cardiaca,
	ds_indice_coracao,
	ds_taxa_muscular,
	ds_idade_metabolica,
	ds_taxa_metabolica_basal,
	ds_proteina,
	ds_massa_livre_gordura,
	ds_massa_muscular,
	ds_massa_muscular_esqueletica,
	ds_massa_ossea,
	ds_gordura_corporal,
	ds_gordura_subcutanea,
	ds_gordura_visceral,
	ds_agua_corporal,
	
	ds_objetivos_cliente,
	exercicios_escolhidos
	
from Cliente
inner join Treinos_marcados
on Cliente.treino_id = Treinos_marcados.treino_id

inner join Avaliacao_fisica
on Cliente.avaliacao_id = Avaliacao_fisica.avaliacao_id;


insert into Reavaliacao_fisica(ds_peso, ds_massa_livre_gordura, ds_imc, ds_massa_muscular, ds_frequencia_cardiaca, ds_massa_muscular_esqueletica, ds_indice_coracao, ds_massa_ossea, ds_taxa_muscular, ds_gordura_corporal, ds_idade_metabolica, ds_gordura_subcutanea, ds_taxa_metabolica_basal, ds_gordura_visceral, ds_proteina, ds_agua_corporal)
values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);