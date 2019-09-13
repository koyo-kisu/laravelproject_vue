import Vue from 'vue'
import Router from 'vue-router'
import Book from './views/Book.vue'
import Add from './views/Add.vue'
import Show from './views/Show.vue'
import Edit from './views/Edit.vue'
import Login from './views/Login.vue'

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
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/books/:id',
      name: 'detail',
      component: Show
    },
    {
      path: '/books/:id',
      name: 'edit',
      component: Edit
    }
  ]
})
