import Vue from 'vue'
import App from './App'
import router from './router'
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);



new Vue({
  el: '#app',
  render:h => h(App),
  router,
})
