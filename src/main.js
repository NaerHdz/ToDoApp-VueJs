import Vue from 'vue'
import App from './App.vue'
import VueSwal from 'vue-swal'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.use(VueSwal);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
