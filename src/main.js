import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from './store'
import './mock/mockServer'
import { Swipe, SwipeItem, Navbar, TabItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.use(VueResource)

new Vue({
  el: '#app',
  render:h => h(App),
  router,
  store
})
