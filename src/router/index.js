import HelloWorldVue from '@/components/HelloWorld.vue'
import UserComponentVue from '@/components/UserComponent.vue'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
  { path: '/', component: HelloWorldVue },
  { path: '/users', component: UserComponentVue },
  { path: '/products', component: HelloWorldVue },
  ]
})