<template>
  <div id="home">
    <h1>
      {{msg}}
    </h1>
    <h2>该页面不存在</h2>
  </div>
</template>

<script>
export default {
  name: 'Error',
  data() {
    return {
      msg: '404!!!!',
    };
  },
};
</script>

<style scoped>
  #home{
    float: left;
    width: 50%;
    height: 300px;
    background: #f00;
    color: #fff;
    margin-left: 25%;
  }
</style>
