<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <!--编程式导航-->
      <button @click="goBack">后退</button>
      <button @click="goForward">前进</button>
      <button @click="random">random</button>
    </div>
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
      <router-link to="/404">404</router-link>
    </div>

    <router-view/>
    <router-view name="home"/>
    <router-view name="ChildRouter"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goForward() {
      this.$router.go(1);
    },
    random() {
      this.$router.push('/aaa');
    },
  },
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
/*过度动画*/
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
