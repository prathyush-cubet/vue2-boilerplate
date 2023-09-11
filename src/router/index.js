import HelloWorldVue from '@/components/HelloWorld.vue'
import UserComponentVue from '@/components/UserComponent.vue'
import ExampleComponent from '@/components/ExampleComponent.vue'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
  { path: '/', component: HelloWorldVue },
  { path: '/users', component: UserComponentVue },
  { path: '/products', component: HelloWorldVue },
  { path: '/example', component: ExampleComponent },
  ],
  linkActiveClass: "active", // active class for non-exact links.
  linkExactActiveClass: "active"
})