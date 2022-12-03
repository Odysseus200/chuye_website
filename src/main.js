
import Vue from 'vue'
import App from './App'

/* 路由 */
import router from './router'

/* swiper */
import 'swiper/dist/css/swiper.min.css';


/* 重置样式 */
import './assets/css/reset.min.css'

/* jquery */
import 'jquery'

/* bootstarp */
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'

/* animate.css */
import 'animate.css'

import { Button, Select,Table,TableColumn} from 'element-ui';
Vue.use(Button)
Vue.use(Select)
Vue.use(Table)
Vue.use(TableColumn)

/* 头部组件 */
import Header from './components/Header'
Vue.component(Header.name,Header)

/* 尾部组件 */
import Footer from './components/Footer'
Vue.component(Footer.name,Footer)

/* 回到顶部 */
import GoTop from './components/GoTop'
Vue.component(GoTop.name,GoTop)

Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//     if(to.meta.title){
//       document.title = to.meta.title
//     }
//     next();
// });

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
