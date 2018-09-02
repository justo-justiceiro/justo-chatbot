<template>
  <div class="home">
    <section class="height-100  bg-personagem">
      <div class="content">
      </div>
      <div class="content personagem">
        <img id="logo" src="../assets/img/logoJustoP.png">

        <h2 class="item-1">Não sabe para onde vai o seu dinheiro?</h2>

        <h2 class="item-2">Não entende como os juros se multiplicam?</h2>

        <h2 class="item-3">O banco oferece serviços que você não entende?</h2>
         <router-link to="/v01" class="btn btn-large">CHAMA O JUSTO</router-link>
      </div>
    </section>

    <section class="roxo">
      <div class="content center-align ">
        <h2 class="bold"> JUSTO indica menores tarifas bancárias</h2>
        <h4> Compara serviços e encontra as menores taxas.</h4>
      </div>
    </section>
    <section class="roxo">
      <div class="content center-align">
        <h2 class="bold"> Descomplica o financês</h2>
        <h4> Analisa a situação do endividamento e explica o funcionamento das taxas.</h4>
      </div>
    </section>
    <section class="roxo">
      <div class="content center-align">
        <h2 class="bold">Imparcialidade bancária!</h2>
        <p>Sem vínculo com nenhum banco ou custo.<br>
        O propósito do JUSTO é te salvar das roubadas financeiras.
        </p>
      </div>
    </section>
    <link href='https://fonts.googleapis.com/css?family=Raleway:600,300' rel='stylesheet' type='text/css'>
  </div>
</template>
<style lang="css">
  @import '../assets/css/materialize.min.css';
</style>
<script lang="javascript" src="../assets/js/materialize.min.js">/* eslint-disable */</script>
<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {},
};
</script>

<style type="text/sass">
    * {
        margin: 0;
        padding: 0;
    }
    body {
        font-size: 16px;
        font-family: 'Raleway', sans-serif;
         overflow-x: hidden;
    }
    h1 {
        font-size: 4rem;
    }

    h2 {
      overflow: hiden;
    }

    p {
        font-size: 2.5rem;
        font-weight: 300;
    }
    section {
        display: table;
        width: 100%;
    }

    section.bg-personagem{
        background: url("../assets/img/justoBG3.png") no-repeat top left, url("../assets/img/heroEscudo.gif") no-repeat bottom -45px right -150px;
    }

    h2.bold{
        font-weight: 600;
    }

    .roxo{
        background: #5d2845;
    }

    .roxo h2{
        color: #feeba1;
    }

    .roxo-light{
        background: #7d4561;
    }

    .height-80 {
        background: #8E44AD;
        height: 80vh;
    }
    .height-50 {
        background: #34495e;
        height: 50vh;
    }
    .height-100 {

        height: 100vh;
    }
    .content {
        color: #FFFFFF;
        display: table-cell;
        /*vertical-align: middle;*/
        padding: 5% 2.5%;
    }

    .w70{
        max-width: 70%;
        display: block;

    }

    

    .personagem .btn{
    position: absolute;
    left: 2.5%;
    bottom: 5%;
    background-color: #feeba1;
    color: #CA4161;
    font-weight: 600;
    font-size: 120%;
}

.item-1,
.item-2,
.item-3 {
    left:2%;
    position: absolute;
  display: block;
    bottom: calc(5% + 2em);

  width: 40%;

  /*font-size: 2.5em;
  font-weight: 600;*/
    animation-duration: 20s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
}

.item-1{
    animation-name: anim-1;
}

.item-2{
    animation-name: anim-2;
}

.item-3{
    animation-name: anim-3;
}

@keyframes anim-1 {
    0%, 8.3% { left: -100%; opacity: 0; }
  8.3%,25% { left: 2.5%; opacity: 1; }
  33.33%, 100% { left: 110%; opacity: 0; }
}

@keyframes anim-2 {
    0%, 33.33% { left: -100%; opacity: 0; }
  41.63%, 58.29% { left: 2.5%; opacity: 1; }
  66.66%, 100% { left: 110%; opacity: 0; }
}

@keyframes anim-3 {
    0%, 66.66% { left: -100%; opacity: 0; }
  74.96%, 91.62% { left: 2.5%; opacity: 1; }
  100% { left: 110%; opacity: 0; }
}

@media (max-width: 1180px) {
    h2 {
        font-size: 2.5rem;
    }
}

@media (max-width: 767px) {
    h2 {
        font-size: 2.25rem;
    }
    p {
        font-size: 1rem;
        font-weight: 300;
    }
}
.item-1,
.item-2,
.item-3 {
    /*width: 90%;*/
}

#logo {
  position: absolute;
  left: 2%;
  top: 12%;
}
</style>
