<template>
  <div id="app">
    <h1>Diretivas</h1>
    <p v-text="'Usando a diretiva v-text'"></p>
    <p v-html="'Usando a diretiva <strong>v-html</strong>'"></p>
    <hr />
    <p v-destaque>Usando uma diretiva personalizada</p>
    <p v-destaque="'red'">Usando uma diretiva personalizada</p>
    <p v-destaque.atrasar="'red'">Usando uma diretiva personalizada</p>
    <p v-destaque:fundo.atrasar="cor">Usando uma diretiva personalizada com modificador de atraso</p>
    <div id="hook-arguments-example" v-demo:argumento.mod1.mod2="'valor passado'"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cor: "lightblue"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
</style>
