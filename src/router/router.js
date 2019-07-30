import Vue from 'vue'
import VueRouter from 'vue-router'
import Book from '../components/Book/index.vue'
import Music from '../components/Music/index.vue'
import Test from '../components/Test/index.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/test' },
  { path: '/book', component: Book },
  { path: '/music', component: Music },
  { path: '/test', component: Test }
]

export default new VueRouter({
  routes
})
