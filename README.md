# Cars For Sale (Back-End)

<p>Repositorio desenvolvido no intuito de servir como Back para a aplicação cars for sale, desenvolvido em NodeJs e Express, com postgres como banco de dados. </p>

## Rodando

<p> A seguir estão as instruções que devem ser seguidas para executar o sistema em sua máquina. </p>
<p> Lembre-se que esse esse projeto foi desenvolvido para servir de Back-End para o Front que pode ser encotrado por esse link: https://github.com/DiegoVSouza/Cars-For-Sale-Front-End  </p>
## No diretório src

## Rodando na sua máquina

**1:** Clone o repositório.

```
git clone https://github.com/DiegoVSouza/Cars-For-Sale-Back-End.git
```

**2:** Acesse o diretório do projeto.

```
cd Cars-For-Sale-Back-End

```


**3:** Instale as depedências.
```
  yarn
```

**4:** Assegure-se que o docker está instalado na sua máquina e crie um novo container para o banco de dados.
```
  1- Caso não tenha instaldo realize o dowload através do link: https://docs.docker.com/docker-for-windows/install/
  
  2- Após instalado inice o docker e utilize: 

  docker-compose up

```


**5:** Apos a base de dados ter sido criada no docker inicie as migrations.
```
  yarn prisma migrate dev

```

**6:** Agora Inicie a aplicação.
```
  yarn dev

```

**7: Agora basta fazer o passo a passo do front-end e aproveite essa aplicação.**




