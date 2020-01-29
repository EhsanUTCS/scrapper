import Vue from 'vue'
import Router from 'vue-router'
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css';
import 'material-icons/iconfont/material-icons.css';

Vue.use(Router)
Vue.use(Vuesax)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/DetailsPage').default,
    }
  ]
})
