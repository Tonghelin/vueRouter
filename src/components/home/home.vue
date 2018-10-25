<template>
    <div id="home">
      <h1>
        {{msg}}
      </h1>
    </div>
</template>

<script>
export default {
  /* eslint-disable no-console */
  name: 'home',
  data() {
    return {
      msg: 'home page!!!!',
    };
  },
  // 写在模版中的钩子函数
  beforeRouteEnter: (to, from, next) => {
    console.log('准备进入路由模板');
    next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.log('准备离开路由模板');
    next();
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
  #home{
    float: left;
    width: 50%;
    height: 500px;
    background: #f00;
    color: #fff;
  }
</style>
