![GitHub repo size](https://img.shields.io/github/repo-size/emendesn/app_nodejs)
![GitHub](https://img.shields.io/github/license/emendesn/app_nodejs)
![Twitter Follow](https://img.shields.io/twitter/follow/emendesn?label=seguir&style=social)
# app_nodejs
  - API Rest nodejs com MongoDB

## Bibliotecas
  - boby-parserd
  - mongose

## Acesso ao cadastro de motoristas onde a validacao ocorre pelo numero do CPF
http://localhost:3000/motorista/cad_mot

## Lista todos os Motoristas
http://localhost:3000/motorista/lst_mot

## Deleta motorista ( Id: do registro a ser removido )
http://localhost:3000/motorista//dlt_mot/:Id

## Atualiza os dados do motorista juntamente com os veiculos vinculados
http://localhost:3000/motorista//upd_mot/:Id

## Cadastro de veiculos onde a validacao ocorre pelo numero do RENAVAN
http://localhost:3000/motorista/cad_vei

## Lista todos os veiculos
http://localhost:3000/motorista/lst_vei

## Deleta veiculos ( Id: do registro a ser removido )
http://localhost:3000/motorista/dlt_vei/:Id

## Cadastra veiculos os motoristas
http://localhost:3000/motorista/cad_vei_mot

## Atualiza os dados do veiculos
http://localhost:3000/motorista//upd_mot/:Id
