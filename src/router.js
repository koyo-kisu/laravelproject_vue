import Vue from 'vue'
import Router from 'vue-router'
import Book from './views/Book.vue'
import Add from './views/Add.vue'
import Show from './views/Show.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Book
    },
    {
      path: '/add',
      name: 'add',
      component: Add 
    },
    {
      path: '/show',
      name: 'show',
      component: Show
    }
  ]
})
