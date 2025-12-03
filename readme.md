# Glowes Web – Docker Installation

Este guia descreve como instalar e rodar o container do frontend no servidor usando Docker.

## Pré-requisitos

- VPS com Docker instalado
- Acesso FTP do servidor
- Código fonte do frontend disponível na pasta `sistema/web/`

## Passo 1 – Acessar o servidor

```bash
ssh usuario@SEU_IP_VPS
cd sistema/web/
```

## Passo 2 – Build da imagem Docker

docker build -t glowes-web .

## Comandos úteis

- docker ps # Ver containers rodando
- docker logs sistema-glowesweb-1 # Ver logs do container
- docker stop sistema-glowesweb-1 # Parar o container
- docker start sistema-glowesweb-1 # Iniciar container parado
- docker rm sistema-glowesweb-1 # Remover container
- docker restart sistema-glowesweb-1 # Remover container

## IMPORTANTE

Toda vez que for alterar o .env é necessária rebuildar a imagem.
