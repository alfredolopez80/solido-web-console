import Vue from 'vue';
import App from './App.vue';
import store from './store';
import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.config.productionTip = false;

// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
