<template>
  <div id="app">
    <!-- <Header></Header> -->
    <router-view />
    <Footer />
    <!-- <GoTop></GoTop> -->
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    showRoute() {
      console.log("$route:", this.$route);
    }
  }
};
</script>

<style></style>
