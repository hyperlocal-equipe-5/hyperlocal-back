- [Descrição](#descricao)
- [Como rodar esse projeto](#como-rodar)
- [Utilizando em servidor local](#utilizando-local)
- [Utilizando pelo Docker](#utilizando-docker)
- [Projeto](#projeto)
- [Autores](#autores)

<div id='descricao'/>

## Descrição

Api destinada a criar uma aplicação web de cardápios digitais.

<div id='como-rodar'/>

## Como rodar esse projeto
Para utilizar esse projeto, primeiro baixe-o em sua máquina e cria um arquivo <b>.env</b> com variáveis de acordo com o arquivo <b>.env.example</b> .

Tendo isso feito, o mesmo poderá ser utilizado tanto em servidor local quanto pelo auxílio do Docker.

<div id='utilizando-local'/>

## <li> Utilizando pelo servidor local

Caso opte por utilizar em servidor local, será necessário a instalação das dependências do projeto com o seguinte comando:

```bash
$ npm install
```

Logo após, o projeto já estará pronto para funcionar utilizando um dos seguintes comandos:

> Modo normal
```bash
$ npm run start
```

> Modo de desenvolvimento (watch mode)
```bash
$ npm run start:dev
```

<div id='utilizando-docker'/>

## <li> Utilizando pelo Docker
Para isso, primeiro certifique-se de ter o [Docker](https://www.docker.com) devidamente instalado em sua máquina. Após utilize os seguintes comandos em sequêcia:

```shell
$ docker build -t hyperlocal-backend .

$ docker run -p <porta_docker>:<porta_env> --env-file .env hyperlocal-backend
```

<div id='projeto'/>

## Projeto

O desenvolvimento inicial da aplicação foi discutido em grupo, com o uso da plataforma do miro pelo seguinte link:

https://miro.com/welcomeonboard/OTRyWmRvNDlSRVY2Z3RIQ2Z0bmpGRHRVdHdGZzdXRzdlRVFmVXRTaEhKVWhqaEJkd082UVd1ZlhyS2dQSEdyMHwzNDU4NzY0NTQwMjExMzk1OTI3fDI=?share_link_id=634135003547

<div id='autores'/>

## Autores

- <a href="https://github.com/BragaJoao"> João <a/>

- <a href="https://github.com/DouglasVolcato"> Douglas <a/>

- <a href="https://github.com/lopesphls"> Pedro <a/>

- <a href="https://github.com/nenooffice"> Eugênio <a/>

- <a href="https://github.com/RobervanSouza"> Robervan <a/>

- <a href="https://github.com/TiagoBonoraBraga"> Tiago <a/>
