<template>
   <div id="HomePage"> <div id="swiper" class="container-fuild"> <div class="swiper-container banner-swiper"> <div class="swiper-wrapper"> <div class="swiper-slide" v-for="(item, index) in swiperList" :key="index" > <img class="swiper-lazy" :data-src="item.img" alt="轮播图"/> <div class="swiper-lazy-preloader"></div><div class="swiper-slide-title"> <h1>{{item.title}}</h1> <p>{{item.content}}</p></div></div></div><div class="swiper-pagination"></div><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div></div><div id="bigData" class="container-fuild"> <div class="row bigData-container"> <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn"> <video type="video/webm" oncanplay="this.volume=0.3" style="width: 100%; height:auto; " src="/static/i.mp4" webkit-playsinline="true" x5-playsinline="" x5-video-player-type="h5" x5-video-player-fullscreen="true" playsinline="true" controls autoplay ></video> </div><div class="col-xs-12 col-sm-12 col-md-6"> <h2 class="bigData-title"> 工程实例 <small>/ Construction Project</small> </h2> <el-table :data="tableData" style="width:100%;font-size:19px;" stripe fit size="medium" >> <el-table-column prop="num" label="项目类型" align="center" width="135px" > </el-table-column> <el-table-column prop="pro1" label="项目地点" align="center" show-overflow-tooltip > </el-table-column> </el-table> <a class="btn btn-lg btn-block btn-info" @click="goTo(1, '工程实例')" >点击查看更多</a > </div></div></div><div id="contactUs" class="container-fuild text-center"> <div class="container contactUs-container wow slideInUp"></div></div><div id="customer" class="container-fuild"> <div class="container customer-container"> <p class="customer-title text-center">现场实例</p><div class="swiper-container customer-swiper hidden-xs"> <div class="swiper-wrapper"> <div class="swiper-slide customer-block" v-for="(item, index) in customerList" :key="index" > <div class="customer-logo"> <img class="center-block" :src="item.logo" alt="logo"/> </div></div></div><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div><div class="row visible-xs customer-block"> <div class="col-xs-12" v-for="(item, index) in customerList" :key="index" > <div class="customer-logo"> <img class="center-block" loading="lazy" :src="item.logo" alt="logo"/> </div></div></div><a class="btn btn-lg btn-block btn-info" @click="goToMore(2, '现场实例')" >点击查看更多</a > </div></div><div id="whyChooseUs" class="conatiner-fuild"> <div class="container"> <div class="whyChooseUs-title text-center"> <p>为什么选择我们的服务</p><p>THE REASON TO CHOOSING US</p></div><div class="row"> <div class="col-xs-12 col-sm-6 col-md-3 server-wrapper" v-for="(item, index) in serverList" :key="index" > <div class="server-block wow slideInUp" onmouseenter="this.style.color='#28f';this.style.borderColor='#28f'" onmouseleave="this.style.color='#666';this.style.borderColor='#ccc'" > <img class="center-block" loading="lazy" :src="item.logo" alt="logo"/> <p class="text-center">{{item.title}}</p><div class="text-center" v-html="item.content" onmouseenter="this.style.color='#28f'" onmouseleave="this.style.color='#ccc'" ></div></div></div></div></div></div><GoTop v-show="scrollTop >=1000"></GoTop> </div>
</template>
<script>
import Swiper from "swiper";
import { WOW } from "wowjs";
export default {
  name: "HomePage",
  data() {
    return {
      scrollTop: null,
      tableData: [{num: "加固设计", pro1: "昆明霖岚国际广场改造加固工程"},{num: "加固设计", pro1: "昆明鼎易天城加固工程"},{num: "加固施工", pro1: "海埂会议中心加固工程"},{num: "新建设计", pro1: "晋宁盘龙寺财神殿"},{num: "新建设计", pro1: "盈江那邦口岸联检楼配套查验货场"},{num: "新建设计", pro1: "昆钢建材行车桩基础"},{num: "新建施工", pro1: "昆钢2#地下消防水池"}],
      swiperList: [{img: require("@/assets/img/1.jpg")},{img: require("@/assets/img/4.jpg")},{img: require("@/assets/img/3.jpg")},{img: require("@/assets/img/2.jpg")}],
      customerList: [{logo: require("@/assets/img/m/m1.jpg")},{logo: require("@/assets/img/m/m2.jpg")},{logo: require("@/assets/img/m/m3.jpg")},{logo: require("@/assets/img/m/m4.jpg")}],
      serverList: [{logo: require("@/assets/img/tel.png"), title: "核心优势1", content: ""},{logo: require("@/assets/img/computer.png"), title: "核心优势2", content: ""},{logo: require("@/assets/img/qq.png"), title: "核心优势3", content: ""},{logo: require("@/assets/img/skill.png"), title: "核心优势4", content: ""}]
    };
  },
  methods: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.scrollTop = scrollTop;
    },
    goToMore(index, name) {
      window.sessionStorage.removeItem("navIndex", index);
      this.navIndex = index;
      window.sessionStorage.setItem("navIndex", index);
      this.menuName = name;
      this.$router.push({ path: "/service" });
    },
    goTo(index, name) {
      window.sessionStorage.removeItem("navIndex", index);
      this.navIndex = index;
      window.sessionStorage.setItem("navIndex", index);
      this.menuName = name;
      this.$router.push({ path: "/Example/ReinforcementDesign" });
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);

    /* banner-swiper */
    new Swiper(".banner-swiper", {
      loop: true, // 循环模式选项
      effect: "fade",
      //自动播放
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      paginationType: "progress",
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      // 延迟加载
      lazy: {
        loadPrevNext: true
      },
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true //修改swiper的父元素时，自动初始化swiper
    });
    /* customer-swiper */
    new Swiper(".customer-swiper", {
      loop: true, // 循环模式选项
      slidesPerView: 3,
      //自动播放
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true //修改swiper的父元素时，自动初始化swiper
    });
    /* wowjs动画 */
    var wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: false
    });
    wow.init();
  }
};
</script>
<style scoped>
@import "../assets/css/global.css";
</style>
