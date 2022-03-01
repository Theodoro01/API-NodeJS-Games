# Verbos HTTP

Tipos de verbos:

## GET

    Verbo GET é o mais usado, porque é o verbo usado para acessar o endereço no navegador.
    Por exemplo, quando você faz uma pesquisa no google você esta fazendo uma requisição do tipo GET.

    OBJETIVO: Retornar dados de um servidor, seja dados HTML, JSON, arquivos...
    ou seja, Obter algum dado.

    É ultilizado em links e da suporte a cache.

## POST 

    Verbo POST serve para criar coisas.

    Muito ultilizado em formularios, como por exemplo em formularios de cadastro. 

    OBJETIVO: Criar coisas, por exemplo, um usuario no banco de dados, adicionar um novo produto...


## PUT 
    Verbo PUT serve para atualizar completamente algum dado.
    EX: se caso um dia for atalizar completamente todas as informações de algum cliente.

    PUT funciona bem semelhante como o POST, Porém a diferença é que o PUT ele edita coisas que
    ja existe e o POST Cria coisas.

    OBJETIVO: Atualizar/Editar completamente algum dado.

## PATCH 

    Verbo PATCH funciona bmem semelhante ao verbo PUT, porém ele não edita totalmente só 
    algumas informções de algum dado. Por exemplo, se eu quisesse editar somente o preço e o 
    peso de algum produto é bem mais aconselhavel ultilizar o verbo PATCH. 

    OBJETIVO: Edita só algumas informções de algum dado.

## DELETE

    Deleta alguma coisa.

    OBJETIVO: Deleta alguma coisa.


Em seguida alguns EX:


GET: /store/inventory = TER A LISTA DO ESTOQUE

POST: /store/order = CRIAR UM NOVO PEDIDO.

GET: /store/order/{orderID} = TER INFORMAÇÃO DE ALGUM PEDIDO.

DELETE: /store/order/{orderID} = DELETAR ALGUM PEDIDO


# GET E DELETE TEM A MESMA URL, PORÉM OS VERBOS SÃO DIFERENTES ENTÃO...