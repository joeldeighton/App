import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Tracks from '@/components/Tracks'
import Artists from '@/components/Artists'
import RecentlyPlayed from '@/components/RecentlyPlayed'
import Recommendations from '@/components/Recommendations'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/tracks',
      name: 'Tracks',
      component: Tracks
    },
    {
      path: '/artists',
      name: 'Artists',
      component: Artists
    },
    {
      path: '/recently-played',
      name: 'RecentlyPlayed',
      component: RecentlyPlayed
    },
    {
      path: '/recommendations',
      name: 'Recommendations',
      component: Recommendations
    }
  ]
})
