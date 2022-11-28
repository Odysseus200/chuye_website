<template>
  <div id="CompanyIntroduction">
    <Header></Header>
    <div class="banner container-fuild text-center">关于我们</div>
    <div class="container">
      <div class="row CompanyIntroduction-container">
        <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
          <img
            class="img-responsive center-block"
            src="@/assets/img/about_img.png"
          />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6">
          <h1>云南楚业建筑工程有限公司</h1>
          <h2>Yunnan ChuYe construction engineering co., LTD.</h2>
          <p>
            云南楚业建筑工程有限公司主业是服务于既有建筑的改造加固，包括民用建筑加固、工业厂房加固、道路桥梁加固、地基基础加固、岩土隧道加固、山体边坡加固、水库坝体加固、古建文物修缮加固等XXXXXX。
            公司总部位于云南省昆明市，公司旗下拥有楚业建筑工程有限公司、中图加固设计有限公司、加固材料研究实验室，集研究开发、设计咨询、销售与施工于一体，形成完整的产业链。
            公司现已拥有各类管理人员72人，一、二级注册建造师13人、高级工程师8人、熟练技术工人51人，各类施工机械300多套。已为工业与民用建筑、交通、水利、市政等各行各业实施了逾
            500 多个项目的改造加固工程，各种新建工程实施了逾 150 多个项目。
             我们是建筑物的安全卫士！我们将竭诚为您服务。
          </p>
          <p>欢迎致电咨询：13888969543（太总） 13888518267（倪总）</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
  name: "CompanyIntroduction",
  data() {
    return {};
  },
  mounted() {
    var wow = new WOW();
    wow.init();
  }
};
</script>
<style scoped>
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url("../assets/img/banner1.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
.row {
  margin-right: 0;
  margin-left: 0;
}
.CompanyIntroduction-container {
  padding: 100px 0;
  color: #808080;
  transition: all ease 0.5s;
}
.CompanyIntroduction-container > div > p {
  font-size: 14px;
  line-height: 2.5rem;
}
@media screen and (max-width: 997px) {
  .CompanyIntroduction-container {
    padding: 10px 0;
    color: #808080;
  }
}
</style>
