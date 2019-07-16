import Vue from 'vue'
import VueRouter from 'vue-router'
import Game from '@/components/Game'
import Home from '@/components/Home'
import Tutorial from '@/components/Tutorial'

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
      path: '/play',
      name: 'Play',
      component: Game
    },  
    {
        path: '/tutorial',
        name: 'Tutorial',
        component: Tutorial
    }
  ]
});