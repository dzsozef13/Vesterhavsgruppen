import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import About from '../views/About.vue'
import Gallery from '../views/Gallery.vue'
import Contact from '../views/Contact.vue'
import Groups from '../views/Groups.vue'
import Schedule from '../views/Schedule.vue'
import BecomeScout from '../views/BecomeScout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/about',
    name: 'About',
    component: About

  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/groups',
    name: 'Groups',
    component: Groups
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule
  },
  {
    path: '/becomescout',
    name: 'BecomeScout',
    component: BecomeScout
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
