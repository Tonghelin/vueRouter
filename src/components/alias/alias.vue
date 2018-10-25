<template>
  <div id="alias">
    <h1>
      {{msg}}
    </h1>
    <h3>地址栏中显示的是别名aaa</h3>
  </div>
</template>

<script>
export default {
  name: 'alias',
  data() {
    return {
      msg: 'alias page!!!!',
    };
  },
};
</script>

<style scoped>
  #home{
    float: left;
    width: 50%;
    height: 500px;
    background: #ff0;
    color: #fff;
  }
</style>
