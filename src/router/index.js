import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    }, {
      path: '/',
      name: 'PageView',
      component: resolve => require(['@/view/PageView'], resolve),
      children: [
        {
          path: '/',
          redirect: '/home'
        }, {
          path: '/home',
          name: 'home',
          component: resolve => require(['@/view/HomePage'], resolve),
          meta: {
            title: '首页'
          }
        }, {
          path: '/Example',
          name: 'Example',
          component: resolve => require(['@/view/Example'], resolve),
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
              name: 'Example',
              component: resolve => require(['@/view/ReinforcementDesign'], resolve),
              meta: {
                title: '工程案例丨加固设计'
              }
            },
            {
              path: '/Example/Construction',
              name: 'Example',
              component: resolve => require(['@/view/Construction'], resolve),
              meta: {
                title: '工程案例丨加固施工'
              }
            },
            {
              path: '/Example/shejishigon',
              name: 'Example',
              component: resolve => require(['@/view/shejishigon'], resolve),
              meta: {
                title: '工程案例丨加固设计施工'
              }
            },
            {
              path: '/Example/newDesign',
              name: 'Example',
              component: resolve => require(['@/view/newDesign'], resolve),
              meta: {
                title: '工程案例丨新建设计'
              }
            },
            {
              path: '/Example/newCustra',
              name: 'Example',
              component: resolve => require(['@/view/newCustra'], resolve),
              meta: {
                title: '工程案例丨新建施工'
              }
            },
          ]
        }, {
          path: '/service',
          name: 'service',
          component: resolve => require(['@/view/Service'], resolve),
          meta: {
            title: '相关服务'
          }
        }, {
          path: '/newsinformation',
          name: 'newsinformation',
          component: resolve => require(['@/view/NewsInformation'], resolve),
          meta: {
            title: '新闻动态'
          }
        }, {
          path: '/companyintroduction',
          name: 'companyintroduction',
          component: resolve => require(['@/view/CompanyIntroduction'], resolve),
          meta: {
            title: '公司介绍'
          }
        }, {
          path: '/jobchance',
          name: 'jobchance',
          component: resolve => require(['@/view/JobChance'], resolve),
          meta: {
            title: '工作机会'
          }
        }, {
          path: '/contactus',
          name: 'contactus',
          component: resolve => require(['@/view/ContactUs'], resolve),
          meta: {
            title: '联系我们'
          }
        },
        {
          path: '/servicedetail',
          name: 'servicedetail',
          component: resolve => require(['@/view/ServiceDetail'],resolve),
          meta: {
            title: '相关服务'
          }
        }
      ]
    }
  ]
})
