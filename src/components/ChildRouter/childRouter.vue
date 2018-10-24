<template>
    <div id="ChildRouter">
      <h1>
        {{msg}}
      </h1>
    </div>
</template>

<script>
export default {
  name: 'childRouter',
  data() {
    return {
      msg: 'Child Router Page.',
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
