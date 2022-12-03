<template>
  <!-- 头部整体盒子 -->
  <div id="header" class="container-fuild">
    <!-- 头部顶部 -->
    <div class="header-top container-fuild hidden-xs">
      <div class="container">
        <div class="server pull-left">
          <span class="glyphicon glyphicon-earphone"></span
          ><span @click="call1">13888969543（太总）</span>
          <span class="glyphicon glyphicon-earphone"></span
          ><span @click="call2">13888518267（倪总）</span>
          <span class="glyphicon glyphicon-time"></span
          >上午：9：00--12：00，下午：2：00--17：30；
        </div>
      </div>
    </div>
    <!-- 电脑导航 -->
    <div class="header-nav container hidden-xs">
      <!-- 导航logo -->
      <div class="header-nav-logo" @click="goToindex(0, '首页')">
        <img
          src="data:image/jpeg;base64,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"
        />
      </div>
      <!-- 导航内容 -->
      <ul class="header-nav-wrapper">
        <li
          v-for="(item, index) in navList"
          :key="index"
          :class="index == navIndex ? 'active' : ''"
          @click="navClick(index, item.name)"
        >
          <router-link :to="item.path">
            {{ item.name }}
            <span
              v-if="item.children.length > 0"
              class="glyphicon glyphicon-menu-down"
            ></span>
            <i class="underline"></i>
          </router-link>
          <dl v-if="item.children.length > 0">
            <dt v-for="(i, n) in item.children" :key="n">
              <router-link :to="i.path">{{ i.name }}</router-link>
            </dt>
          </dl>
        </li>
      </ul>
    </div>
    <!-- 手机导航 -->
    <div class="header-nav-m container-fuild visible-xs">
      <div class="header-nav-m-logo">
        <img class="center-block" src="@/assets/img/logo.jpg" alt="logo" />
      </div>
      <!-- 导航栏 -->
      <div class="header-nav-m-menu text-center">
        {{ menuName }}
        <div
          class="header-nav-m-menu-wrapper"
          data-toggle="collapse"
          data-target="#menu"
          @click="menuClick"
        >
          <span :class="menuClass"></span>
        </div>
        <!-- 导航内容 -->
        <ul id="menu" class="header-nav-m-wrapper collapse">
          <li
            v-for="(item, index) in navList"
            :key="index"
            :class="index == navIndex ? 'active' : ''"
            @click="navClick(index, item.name)"
            data-toggle="collapse"
            data-target="#menu"
          >
            <router-link :to="item.path">
              {{ item.name }}
              <i class="underline"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      navIndex: sessionStorage.getItem("navIndex")
        ? sessionStorage.getItem("navIndex")
        : 0,
      menuName: "首页",
      menuClass: "glyphicon glyphicon-menu-down",
      navList: [
        {
          name: "首页",
          path: "/",
          children: []
        },
        {
          name: "工程实例",
          path: "/Example",
          children: [
            {
              name: "加固设计",
              path: "/Example/ReinforcementDesign"
            },
            {
              name: "加固施工",
              path: "/Example/Construction"
            },
            {
              name: "加固设计施工",
              path: "/Example/shejishigon"
            },
            {
              name: "新建设计",
              path: "/Example/newDesign"
            },
            {
              name: "新建施工",
              path: "/Example/newCustra"
            }
          ]
        },
        {
          name: "现场实例",
          path: "/service",
          children: []
        },
        {
          name: "公司动态",
          path: "/newsinformation",
          children: []
        },
        {
          name: "公司介绍",
          path: "/companyintroduction",
          children: []
        },
        {
          name: "工作机会",
          path: "/jobchance",
          children: []
        },
        {
          name: "联系我们",
          path: "/contactus",
          children: []
        }
      ]
    };
  },
  methods: {
    goToindex(index, name) {
      sessionStorage.clear();
      this.navIndex = index;
      window.sessionStorage.setItem("navIndex", index);
      this.menuName = name;
      this.$router.push("/").catch(err => {
        return err;
      });
    },
    call1() {
      window.location.href = "tel:/" + 13888969543;
    },
    call2() {
      window.location.href = "tel:/" + 13888518267;
    },
    navClick(index, name) {
      sessionStorage.clear();
      this.navIndex = index;
      window.sessionStorage.setItem("navIndex", index);
      this.menuName = name;
    },
    menuClick() {
      if (this.menuClass == "glyphicon glyphicon-menu-down") {
        this.menuClass = "glyphicon glyphicon-menu-up";
      } else {
        this.menuClass = "glyphicon glyphicon-menu-down";
      }
    }
  }
};
</script>
<style scoped>
@import "../assets/css/global.css";
</style>
