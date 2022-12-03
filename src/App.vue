<template>
  <div id="app">
    <Header />
    <keep-alive> <router-view /></keep-alive>
    <Footer />
  </div>
</template>
<script>
export default { name: "App" };
</script>
<style></style>
