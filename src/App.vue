<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">Hello world!</router-link>
      <router-link to="/home">Home</router-link>
      <!--通过url传递参数-->
      <router-link to="/childRouter/123/Linth">ChildRouterPage</router-link>
    </div>

    <router-view/>
    <router-view name="home"/>
    <router-view name="ChildRouter"/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
