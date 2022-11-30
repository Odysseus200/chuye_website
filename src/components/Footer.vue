<template>
  <div id="footer" class="container-fluid">
    <p class="title">云南楚业建筑工程有限公司</p>
    <p class="address_tel_fax"></p>
    <p>地址：中国（云南）自由贸易试验区昆明片区经开区</p>
    <p>春漫大道云南海归创业园海归大厦</p>
    <span @click="call1">Tel:13888969543（太总）</span>
    <span @click="call2">Tel:13888518267（倪总）</span>
    <p class="copy">Copyright &copy;2022云南楚业建筑工程有限公司</p>
  </div>
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
#footer {
  width: 100%;
  height: 100%;
  color: #fff;
  background: #262627;
  overflow: hidden;
  text-align: center;
}
.logo {
  width: 95px;
  height: 45px;
  margin: 50px auto 20px;
}
.title {
  font-size: 25px;
  margin: 20px 0;
}
.address_tel_fax {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0;
  cursor: pointer;
}
.email_wx {
  color: #d3d3d3;
  font-size: 14px;
}
.copy {
  color: #d3d3d3;
  font-size: 14px;
  margin: 20px 0 10px;
}
@media screen and (max-width: 997px) {
  .title {
    font-size: 20px;
  }
  .address_tel_fax {
    font-size: 12px;
  }
  .email_wx {
    font-size: 12px;
  }
  .copy {
    font-size: 12px;
    margin: 30px 0 10px;
  }
}
</style>
