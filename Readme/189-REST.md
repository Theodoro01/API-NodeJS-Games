# REST

É um padrão de desenvolvimento de Webbservices.

Antigamente, quando os Webservices surgiram, todos eles tinham um padrão diferente, então se 
você quisesse implantar um Webservise no seu sistema, você teria que estudar o padrão de e 
implantar no seu sistema.

Então era basicamente impossivel de você ter um sistema com muitos Webservises, pois todos 
tinham um padrão completamente diferente então nem sempre se encaixaria no seu sistema.

Então os programdores viram que nao existia esse padrão então criaram alguns padrões e um deles
é o REST.

# Para Criar uma API/Webservices tem quem seguir algumas regras, que são:

## Cliente Servidor

    Não pode ser cliente e servidor ao mesmo tempo.
    Por exemplo, uma aplicação que renderiza paginas e também consome dados dela mesma, nao 
    pode ser REST pq essa aplicação esta sendo CLIENTE e SERVIDOR ao mesmo tempo.

    REST tem que ser apenas servidor.

## Stateless

    Não deve guardar dados da requisição do usuario, ex: Usuario pesquisou "Futbol" no google, não é necessario salvar esta palavra que o usuario mandou.

## Cacheavel

    Cache serve para economizar dados, mas a maior parte das API não ultilizam cache.

## Saber Trabalhar Com Camadas

    Não importa oque esteja entre o usuario(Requiseição) e o servidor(Resposta) a API tem que funcionar normal sem nenhum problema, API tem que fazer o trabalho dela, responder e retornar dados.
    

## Interface Uniforme e Direta

    Interface na Web significa: "ROTAS".

    Interface tem que ser Uniforme e Direta. 

    Ex: 
    
  # Interfaces NÂO uniformes:

        http://meusite.com/getClientes/todos

        http://meusite.com/deletarClientes/peloId/1

        http://meusite.com/clientes/peloId/1

        http://meusite.com/editar/clientes/peloId/2


  # Interfaces Uniformes:


        GET = http://meusite.com/clientes
        
        DELETE = http://meusite.com/cliente/1

        GET = http://meusite.com/cliente/1

        PUT = http://meusite.com/cliente/2


Mais porque isso ? 

    Porque o Programa/API tem que saber que se eu ultilizar o DELETE (Por exemplo) tem
    que deletar, então eu não preciso escrever deletarCliente e blablabla.



# REST pode retornar:

    Json, XML, Arquivos(Para download, Pdf, imagem...) ...