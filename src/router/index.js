import Vue from 'vue'
import Router from 'vue-router'
import Boot from '@/components/boot.vue'
import Main from '@/components/main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'boot',
      component: Boot
    },
    {
      path: '/index',
      name: 'main',
      component: Main
    }
  ]
})
