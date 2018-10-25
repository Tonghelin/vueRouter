<template>
    <div id="home">
      <h1>
        {{msg}}
      </h1>
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
  #home{
    float: left;
    width: 50%;
    height: 500px;
    background: #f00;
    color: #fff;
  }
</style>
