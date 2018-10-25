<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">Hello world!</router-link>
      <router-link to="/home">Home</router-link>
      <!--通过url传递参数-->
      <router-link to="/childRouter/123/Linth">ChildRouterPage</router-link>
      <!--重定向-->
      <router-link to="/goHome">goHome</router-link>
      <!--重定向，并且传递参数和，若不传参数，将显示为空页面-->
      <router-link to="/showParams/6666/JSpang">showParams</router-link>
      <!--alias别名-->
      <router-link to="/alias">alias</router-link>
      <router-link to="/aaa">alias--aaa</router-link>
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
