import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import HomePage from '../view/HomePage.vue'

 const routes = [
    {
      path: '*',
      redirect: '/'
    }, {
          path: '/',
          redirect: '/home'
        }, {
          path: '/home',
          name: 'home',
          component: HomePage,
          meta: {
            title: '首页'
          }
        }, {
          path: '/Example',
          name: 'Example',
          component: ()=> import('@/view/Example'),
          meta: {
            title: '工程案例'
          },
          children: [
            {
              path: '/Example',
              redirect: '/Example/ReinforcementDesign'
            },
            {
              path: '/Example/ReinforcementDesign',
              name: 'Example_ReinforcementDesign',
              component: () => import('@/view/ReinforcementDesign'),
              meta: {
                title: '工程案例丨加固设计'
              }
            },
            {
              path: '/Example/Construction',
              name: 'Example_Construction',
              component: () => import('@/view/Construction'),
              meta: {
                title: '工程案例丨加固施工'
              }
            },
            {
              path: '/Example/shejishigon',
              name: 'Example_shejishigon',
              component:() => import('@/view/shejishigon'),
              meta: {
                title: '工程案例丨加固设计施工'
              }
            },
            {
              path: '/Example/newDesign',
              name: 'Example_newDesign',
              component: () => import('@/view/newDesign'),
              meta: {
                title: '工程案例丨新建设计'
              }
            },
            {
              path: '/Example/newCustra',
              name: 'Example_newCustra',
              component: () => require('@/view/newCustra'),
              meta: {
                title: '工程案例丨新建施工'
              }
            },
          ]
        }, {
          path: '/service',
          name: 'service',
          component: () => import('@/view/Service'),
          meta: {
            title: '相关服务'
          }
        }, {
          path: '/newsinformation',
          name: 'newsinformation',
          component: () => import('@/view/NewsInformation'),
          meta: {
            title: '新闻动态'
          }
        }, {
          path: '/companyintroduction',
          name: 'companyintroduction',
          component: () => import('@/view/CompanyIntroduction'),
          meta: {
            title: '公司介绍'
          }
        }, {
          path: '/jobchance',
          name: 'jobchance',
          component: () => import('@/view/JobChance'),
          meta: {
            title: '工作机会'
          }
        }, {
          path: '/contactus',
          name: 'contactus',
          component: ()=> import('@/view/ContactUs'),
          meta: {
            title: '联系我们'
          }
        },
        {
          path: '/servicedetail',
          name: 'servicedetail',
          component: () => import('@/view/ServiceDetail'),
          meta: {
            title: '相关服务'
          }
        }
      ]
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

 router.beforeEach((to, from, next) => {
    console.log('到哪去to:', to)
    console.log('从哪来from:', from)

    // 标题栏内容 = 新页面的标题
    document.title = to.meta.title

    // 调用后, 放行本次操作, 路由才能跳转
    next()
  })
  export default router
