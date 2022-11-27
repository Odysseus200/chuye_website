<template>
  <div>
    <Header></Header>
    <div id="root">
      <div class="item">
        <img class="itemImg" src="../assets/img/ctru/1.jpg" alt="" />
        <div class="userInfo">
          <span class="username">现场实拍</span>
        </div>
      </div>
      <div class="item">
        <img class="itemImg" src="../assets/img/ctru/10.jpg" alt="" />
        <div class="userInfo">
          <span class="username">现场实拍</span>
        </div>
      </div>
      <div class="item">
        <img class="itemImg" src="../assets/img/ctru/11 (2).jpg" alt="" />
        <div class="userInfo">
          <span class="username">现场实拍</span>
        </div>
      </div>
      <div class="item">
        <img class="itemImg" src="../assets/img/ctru/11.jpg" alt="" />
        <div class="userInfo">
          <span class="username">现场实拍</span>
        </div>
      </div>
      <div class="item">
        <img class="itemImg" src="../assets/img/ctru/13.jpg" alt="" />
        <div class="userInfo">
          <span class="username">现场实拍</span>
        </div>
      </div>
      <div class="item">
        <img class="itemImg" src="../assets/img/ctru/12.jpg" alt="" />
        <div class="userInfo">
          <span class="username">现场实拍</span>
        </div>
      </div>
      <div class="item">
        <img class="itemImg" src="../assets/img/ctru/44.jpg" alt="" />
        <div class="userInfo">
          <span class="username">现场实拍</span>
        </div>
      </div>
      <div class="item">
        <img class="itemImg" src="../assets/img/ctru/14.jpg" alt="" />
        <div class="userInfo">
          <span class="username">现场实拍</span>
        </div>
      </div>
      <div class="item">
        <img class="itemImg" src="../assets/img/ctru/22.jpg" alt="" />
        <div class="userInfo">
          <span class="username">现场实拍</span>
        </div>
      </div>
      <div class="item">
        <img class="itemImg" src="../assets/img/ctru/33.jpg" alt="" />
        <div class="userInfo">
          <span class="username">现场实拍</span>
        </div>
      </div>
      <div class="item">
        <img class="itemImg" src="../assets/img/ctru/5.jpg" alt="" />
        <div class="userInfo">
          <span class="username">现场实拍</span>
        </div>
      </div>
      <div class="item">
        <img class="itemImg" src="../assets/img/ctru/6.jpg" alt="" />
        <div class="userInfo">
          <span class="username">现场实拍</span>
        </div>
      </div>
      <div class="item">
        <img class="itemImg" src="../assets/img/ctru/7.jpg" alt="" />
        <div class="userInfo">
          <span class="username">现场实拍</span>
        </div>
      </div>
      <div class="item">
        <img class="itemImg" src="../assets/img/ctru/8.jpg" alt="" />
        <div class="userInfo">
          <span class="username">现场实拍</span>
        </div>
      </div>
      <div class="item">
        <img class="itemImg" src="../assets/img/ctru/9.jpg" alt="" />
        <div class="userInfo">
          <span class="username">现场实拍</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* css样式 */
body {
  background: #e5e5e5;
}
/* 瀑布流最外层 */
#root {
  margin: 0 auto;
  width: 1200px;
  column-count: 5;
  column-width: 240px;
  column-gap: 20px;
}
/* 每一列图片包含层 */
.item {
  margin-bottom: 10px;
  /* 防止多列布局，分页媒体和多区域上下文中的意外中断 */
  break-inside: avoid;
  background: #fff;
}
.item:hover {
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
}
/* 图片 */
.itemImg {
  width: 100%;
  vertical-align: middle;
}
/* 图片下的信息包含层 */
.userInfo {
  padding: 5px 10px;
}
.avatar {
  vertical-align: middle;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.username {
  margin-left: 5px;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
}
@media screen and (max-width: 768px) {
  #root {
    margin: 10px auto;
    width: 370px;
    column-count: 1;
    column-width: 240px;
    column-gap: 0px;
  }
}
@media screen and (min-width: 768px) and (max-width: 996px) {
  #root {
    margin: 0 auto;
    width: 700px;
    column-count: 5;
    column-width: 240px;
    column-gap: 10px;
  }
}
</style>
