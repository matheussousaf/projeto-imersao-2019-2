# :cat: Ionic Kittens

## Projeto Imersão - Fábrica de Software 2019.2
---

Nesse repositório você vai aprender como fazer um aplicativo incrível para catalogar todos os gatos da vizinhança. :cat2:

Para esse aplicativo usaremos apenas **20 passos** e pronto, seu aplicativo está feito!

**1. Configurando o ambiente**

Crie um novo projeto, aplicativo em branco com `ionic start {nome_do_app} blank`

**2. Instalando as dependências necessárias**

API: `eac77c3b-be64-4980-ac7c-2badd713c162`

**3. Primeiras alterações**

Antes de tudo, precisamos criar nossas páginas e classes principais.


* Para gerar a página de informações: `ionic generate page cat-info`

* Crie uma página com o nome de services, entre nela e dentro: `ionic generate services Cats`

**4. Alterando a página principal**

Vamos deixar a página inicial um pouco mais agradável e fazer algumas mudanças nela.

No seu home.page.html, altere:

````
<ion-content center text-center>
    <ion-text color="primary">
      <h1>Ionic Kittens</h1>
    </ion-text>

    <img id="kitty" src="../../assets/main.png" alt="Kitty">

    <ion-grid fixed>
      <ion-row>
        <ion-col size="12">
          <ion-text>
            <p id="descricao">"Meow!"</p>
          </ion-text>
        </ion-col>
      </ion-row>
    </ion-grid>

    <ion-input name="input" type="text" autofocus="true" autocomplete="on"  placeholder="Insira a raça do gato aqui"></ion-input>
    
    <!--
      Aqui temos algumas coisas novas como:

      routerLink: se comunica com páginas que estão no routing do Ionic.

      onClick: função que inicia quando clicamos no botão.

    -->
    <ion-button id="btn" size="large" [routerLink]="['/cat-info']" (click)="onClick()" >
      Pesquise!
    </ion-button>


</ion-content>
````

Já no seu home.page.scss:

````
* {
    font-family: "Montserrat", sans-serif;
}

/*
    Mudando um pouco o background
*/
ion-content{
    --background: rgb(236, 236, 236);
}

/*
    Mudando um pouco o tamanho do h1
*/
h1{
    font-size: 36px;
    font-weight: bold;
}



//Mudando o estilo da imagem
#kitty{
    margin: 0 auto;
    width: 50%;
}

//Mudando o estilo da descrição
#descricao{
    color: #191919;
    font-size: 20px;
    font-style: italic;
}

/*
    Alterando os estilos do input
*/
ion-input{
    border-radius: 50px;
    margin: 0 auto;
    width: 300px;
    color: rgb(170, 170, 170);
    margin-bottom: 30px;
    --background: white;
    font-size: 18px;

    //Padding
    --padding-bottom: 20px;
    --padding-top: 20px;
    --padding-end: 20px;
    --padding-start: 20px;

    //Placeholder
    --placeholder-color: rgb(170, 170, 170);
}

//Estilos do botão
#btn{
    --padding-bottom: 30px;
    --padding-top: 30px;
    --padding-end: 30px;
    --padding-start: 30px;
}
````

Acabamos de estilar nossa página, e se dermos um `ionic serve` ela deve ficar mais ou menos assim:   

![HomePage](./assets/primeira.png)

Mas ainda falta bastante trabalho, a próxima etapa é criar a página de perfil dos gatos.

**5. Alterando a página de perfil dos gatos**

Agora precisamos dar vida a página que entraremos quando pesquisarmos!


No seu cat-info-page.html:

````
<ion-header>
  <ion-toolbar>
    <!-- Botão para voltar para a página anterior-->
    <ion-buttons slot="start">
      <ion-back-button text=""></ion-back-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content center text-center>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Nome da Raça</ion-card-title>
    </ion-card-header>

    <img src="https://cdn2.thecatapi.com/images/UhqCZ7tC4.jpg" alt="cat" width="300px">

    <ion-card-content>
      Descrição do gato, lorem ipsum consectetur adipiscing elit. Nulla vitae vulputate nunc. Fusce finibus commodo
      tellus.
    </ion-card-content>

    <ion-grid fixed>

      <!-- Item 1-->
      <ion-row>
        <ion-col size="12">
          <ion-item class="itens">
            <ion-icon class="icons" name="flag" size="large" color="primary"></ion-icon>
            <ion-text color="medium">
              <h4>Origem:</h4>
            </ion-text>
            <p>Teste de origem</p>
          </ion-item>
        </ion-col>
      </ion-row>

      <!-- Item 2-->
      <ion-row>
        <ion-col size="12">
          <ion-item class="itens">
            <ion-icon class="icons" name="paw" size="large" color="primary"></ion-icon>
            <ion-text color="medium">
              <h4>Dog Friendly: </h4>
            </ion-text>
            <p>5</p>
          </ion-item>
        </ion-col>
      </ion-row>

      <!-- Item 3-->
      <ion-row>
        <ion-col size="12">
          <ion-item class="itens">
            <ion-icon class="icons" name="heart" size="large" color="primary"></ion-icon>
            <ion-text color="medium">
              <h4>Afeição: </h4>
            </ion-text>
            <p>5</p>
          </ion-item>
        </ion-col>
      </ion-row>

      <!-- Item 4-->
      <ion-row>
        <ion-col size="12">
          <ion-item class="itens">
            <ion-icon class="icons" name="star" size="large" color="primary"></ion-icon>
            <ion-text color="medium">
              <h4>Raridade: </h4>
            </ion-text>
            <p>5</p>
          </ion-item>
        </ion-col>
      </ion-row>

    </ion-grid>

  </ion-card>
</ion-content>
````

E no seu cat-info.page.scss:

````
*{
    font-family: "Montserrat", sans-serif;
}

//Mudando estilos do background
ion-content{
    --background: rgb(236, 236, 236);
}

//Itens da lista
h4{
    margin: 0 15px;
    font-size: 15px;
}

//Imagem
img{
    border-radius: 20px;
}

//Card
ion-card{
    --background: white;
    border-radius: 20px;
    padding: 20px;
}
````

Agora nós temos um aplicativo bem massa, estilizado e pronto para ser integrado a API!

**6. Se conectando com uma API**

Nessa parte é onde nós faremos todos os passos essenciais para que nosso app se comunique bem com a API para nós pegarmos os dados necessários quando bem for preciso.

Finalize o server que está rodando no terminal com Ctrl-C, e rode o comando `npm install @ionic-native/http`

O Ionic Native disponibiliza um plugin para requisições Http, nós estaremos usando ele para a conexão com a nossa API.

Agora nós estaremos fazendo o backend da nossa aplicação, e para isso, precisamos abrir o nosso service criado.

Na pasta services, abra o arquivo cats.services.ts

























---
**Notas de rodapé:**

¹ - Services são classes que usaremos para a conexões com API's.

###Resumão
---



