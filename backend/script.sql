create database athenasdb;
drop database athenasdb;
use athenasdb;
/***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
create table athenasdb.login(
    id_login int primary key auto_increment,
    ds_usuario varchar(100),
    ds_senha varchar(50)
);

insert into athenasdb.login(ds_usuario, ds_senha)
values('Angelica', 'P3rs0n4l#');

select * from athenasdb.login;
/***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
create table athenasdb.treinos_marcados(
    treino_id int primary key auto_increment,
    ds_objetivos_cliente varchar(100) not null,
    dt_avaliacao date not null,
    dt_reavaliacao date not null,
    exercicios_escolhidos varchar(220) not null,
    bt_concluido boolean,
    id_login int,
    foreign key (id_login) references athenasdb.login(id_login) on delete cascade
);

insert into athenasdb.treinos_marcados(ds_objetivos_cliente, dt_avaliacao, dt_reavaliacao, exercicios_escolhidos, bt_concluido)
values('Ganhar massa muscular', '2024-05-30 15:00:00', '2024-11-30 15:00:00','polichinelo 3x15', false);
/***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
create table athenasdb.avaliacao_fisica(
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
    foreign key (id_login) references athenasdb.login(id_login) on delete cascade
);

insert into athenasdb.avaliacao_fisica(ds_peso, ds_massa_livre_gordura, ds_imc, ds_massa_muscular, ds_frequencia_cardiaca, ds_massa_muscular_esqueletica, ds_indice_coracao, ds_massa_ossea, ds_taxa_muscular, ds_gordura_corporal, ds_idade_metabolica, ds_gordura_subcutanea, ds_taxa_metabolica_basal, ds_gordura_visceral, ds_proteina, ds_agua_corporal)
values('75kg', '60kg', '24.5', '30kg', '70 bpm', '25kg', '3.5', '3.0kg', '40%', '15%', '28 anos', '10%', '1500 kcal', '12%', '18g', '55%');
/***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
create table athenasdb.reavaliacao_fisica(
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
    foreign key (id_login) references athenasdb.login(id_login) on delete cascade
);

insert into athenasdb.reavaliacao_fisica(ds_peso, ds_massa_livre_gordura, ds_imc, ds_massa_muscular, ds_frequencia_cardiaca, ds_massa_muscular_esqueletica, ds_indice_coracao, ds_massa_ossea, ds_taxa_muscular, ds_gordura_corporal, ds_idade_metabolica, ds_gordura_subcutanea, ds_taxa_metabolica_basal, ds_gordura_visceral, ds_proteina, ds_agua_corporal)
values('75kg', '60kg', '24.5', '30kg', '70 bpm', '25kg', '3.5', '3.0kg', '40%', '15%', '28 anos', '10%', '1500 kcal', '12%', '18g', '55%');
/***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
create table athenasdb.cliente(
    id_cliente int primary key auto_increment,
    nome varchar (200),
    nascimento date,
    idade int,
    telefone varchar (30),
    treino_id int,
    avaliacao_id int,
    reavaliacao_id int,
    img_cliente mediumblob,
    foreign key (treino_id) references athenasdb.treinos_marcados(treino_id) on delete cascade,
    foreign key (avaliacao_id) references athenasdb.avaliacao_fisica(avaliacao_id) on delete cascade,
    foreign key (reavaliacao_id) references athenasdb.reavaliacao_fisica(reavaliacao_id) on delete cascade,
    id_login int,
    foreign key (id_login) references athenasdb.login(id_login) on delete cascade
);

alter table athenasdb.cliente modify column img_cliente mediumblob;

insert into athenasdb.cliente(nome, nascimento, idade, telefone, treino_id, avaliacao_id, reavaliacao_id, img_cliente)
values('Pauilo', '2005-07-08', 19, '11987652344', 1, 1, 1, '');

select * from athenasdb.cliente;
/***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/* página fazer login: repository fazer login -> só select */
select ds_usuario, ds_senha from athenasdb.login;

/* página horario treinos: repository horario treinos -> select */
select nome, dt_treino, telefone from athenasdb.cliente
inner join athenasdb.treinos_marcados on athenasdb.cliente.treino_id = athenasdb.treinos_marcados.treino_id;

/* página novo treino: repository adicionar treino -> insert */
insert into athenasdb.cliente(nome, nascimento, idade, telefone, treino_id, avaliacao_id, reavaliacao_id)
values(?,?,?,?,?,?);

insert into athenasdb.avaliacao_fisica(ds_peso, ds_massa_livre_gordura, ds_imc, ds_massa_muscular, ds_frequencia_cardiaca, ds_massa_muscular_esqueletica, ds_indice_coracao, ds_massa_ossea, ds_taxa_muscular, ds_gordura_corporal, ds_idade_metabolica, ds_gordura_subcutanea, ds_taxa_metabolica_basal, ds_gordura_visceral, ds_proteina, ds_agua_corporal)
values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);

insert into athenasdb.treinos_marcados(ds_objetivos_cliente, dt_avaliacao, dt_reavaliacao, exercicios_escolhidos, bt_concluido)
values(?,?,?,?);

/* página treino cliente: repository treino cliente -> select, insert */
select 
	nome,
	nascimento,
	idade,
	telefone,
	dt_avaliacao,
    dt_reavaliacao,
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
	
from athenasdb.cliente
inner join athenasdb.treinos_marcados on athenasdb.cliente.treino_id = athenasdb.treinos_marcados.treino_id
inner join athenasdb.avaliacao_fisica on athenasdb.cliente.avaliacao_id = athenasdb.avaliacao_fisica.avaliacao_id;

select * from athenasdb.login;
select * from athenasdb.cliente;
select * from athenasdb.treinos_marcados;

insert into athenasdb.reavaliacao_fisica(ds_peso, ds_massa_livre_gordura, ds_imc, ds_massa_muscular, ds_frequencia_cardiaca, ds_massa_muscular_esqueletica, ds_indice_coracao, ds_massa_ossea, ds_taxa_muscular, ds_gordura_corporal, ds_idade_metabolica, ds_gordura_subcutanea, ds_taxa_metabolica_basal, ds_gordura_visceral, ds_proteina, ds_agua_corporal)
values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);