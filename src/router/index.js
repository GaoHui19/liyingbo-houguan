import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component:()=>import('../views/Login.vue')
    },  
    {
      path: '/register',
      name: 'register',
      component:()=>import('../views/Register.vue')
    },
    {
      path: '/homeView',
      name: 'homeView',
      redirect:'/homeView/home',
      component: () => import('../views/HomeView.vue'),
      children:[
        {
          path:'home',
          name:'home',
          component:()=>import('../views/Home.vue')
        } ,
        {
          path:'cm',
          name:'cm',
          component:()=>import('../views/CM.vue')
        } ,
        {
          path:'addCm',
          name:'addCm',
          component:()=>import('../views/AddCm.vue')
        },
        {
          path:'order',
          name:'order',
          component:()=>import('../views/Order.vue')
        },
        {
          path:'orderDetail',
          name:'orderDetail',
          component:()=>import('../views/OrderDetail.vue')
        },
        {
          path:'refund',
          name:'refund',
          component:()=>import('../views/Refund.vue')
        },
        {
          path:'student',
          name:'student',
          component:()=>import('../views/Student.vue')
        },
        {
          path:'lecturer',
          name:'lecturer',
          component:()=>import('../views/Lecturer.vue')
        }
        ,
        {
          path:'addLecturer',
          name:'addLecturer',
          component:()=>import('../views/AddLecturer.vue')
        },
        {
          path:'banner',
          name:'banner',
          component:()=>import('../views/Banner.vue')
        },
        {
          path:'addbanner',
          name:'addbanner',
          component:()=>import('../views/Addbanner.vue')
        },
        {
          path:'article',
          name:'article',
          component:()=>import('../views/Article.vue')
        },
        {
          path:'addArticle',
          name:'addArticle',
          component:()=>import('../views/AddArticle.vue')
        },
        {
          path:'miaosha',
          name:'miaosha',
          component:()=>import('../views/miaosha.vue')
        },
        {
          path:'addmiaosha',
          name:'addmiaosha',
          component:()=>import('../views/Addmiaosha.vue')
        },
        {
          path:'kcshez',
          name:'kcshez',
          component:()=>import('../views/kcshez.vue')
        },
        {
          path:'youhui',
          name:'youhui',
          component:()=>import('../views/youhui.vue')
        },
        {
          path:'addyouhui',
          name:'addyouhui',
          component:()=>import('../views/addyouhui.vue')
        }
      ]
    }
  ]
})

export default router
