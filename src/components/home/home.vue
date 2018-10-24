<template>
    <div id="home">
      <h1>
        {{msg}}
      </h1>
      <!--// 配置子路由-->
      <router-link to="/home">childHome</router-link>
      <router-link to="/home/childRouter1">ChildRouterPage</router-link>
      <router-link :to="{name:'childRouter2',params:{username:'Linth'}}">Page222</router-link>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: 'home page!!!!',
    };
  },
  computed: {
    username() {
      // 我们很快就会看到 `params` 是什么
      return this.$route.params.username;
    },
  },
};
</script>

<style scoped>

</style>
