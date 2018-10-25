<template>
    <div id="ChildRouter">
      <h1>
        {{msg}}
      </h1>
      <hr>
      <h3>接收路由传递的参数</h3>
      <p>
        <!--接收url传递的参数{{$route.params.username}}-->
        {{$route.params.id}}---{{$route.name}}--{{$route.params.username}}
      </p>
    </div>
</template>

<script>
export default {
  name: 'ChildRouter',
  data() {
    return {
      msg: 'Child Router Page2222.',
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
