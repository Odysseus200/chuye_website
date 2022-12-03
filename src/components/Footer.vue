<template>
   <div id="footer" class="container-fluid"> <p class="title">云南楚业建筑工程有限公司</p><div class="address_tel_fax"> <p> 地址：中国（云南）自由贸易试验区昆明片区经开区春漫大道&emsp;云南海归创业园海归大厦 </p><span @click="call1">Tel:13888969543（太总）</span> <span @click="call2">Tel:13888518267（倪总）</span> <p class="copy">Copyright &copy;2022云南楚业建筑工程有限公司</p></div></div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  methods: {
    call1() {
      window.location.href = "tel:/" + 13888969543;
    },
    call2() {
      window.location.href = "tel:/" + 13888518267;
    }
  }
};
</script>
<style scoped>
@import "../assets/css/global.css";
</style>
