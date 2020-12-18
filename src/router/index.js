import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/components/Blog'
import BlogDetail from '@/components/BlogDetail'
import About from '@/components/About'
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Blog,
      children: [
        {
          path: '/blog/:id',
          name: 'BlogDetail',
          component: BlogDetail,
          props: true
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/404',
      name: 'PageNotFound',
      component: PageNotFound
    },
    {
      path: '*',
      redirect: {name: 'PageNotFound'}
    }
  ],
  mode: 'history'
})
