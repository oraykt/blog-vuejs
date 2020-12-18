import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/components/Blog'
import BlogDetail from '@/components/BlogDetail'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Blog
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/blog/:id',
      name: 'BlogDetail',
      component: BlogDetail
    }
  ],
  mode: 'history'
})
