import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
//this is a 2nd comment
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
