import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/router'
import store from './store/store'
import 'buefy/dist/buefy.css';
import axios from 'axios';
import Buefy from 'buefy';

Vue.use(Buefy);

axios.defaults.baseURL = 'http://localhost:3000/api/v1';
axios.defaults.headers.post['Content-Type'] = 'application/json';

Vue.config.productionTip = false

console.log('teste');


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
