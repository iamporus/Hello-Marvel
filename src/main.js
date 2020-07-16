import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.prototype.$appConfig = {
  currency: '$',
  base: (process.env.NODE_ENV === 'production') ? '/marvel-api-vuejs/' : '',
  api: {
    url: 'https://gateway.marvel.com/v1/public',
    publicKey: '0c492b161f4f6786703e047bc54d8120',
    privateKey: '3f02f8cf80322885b6be63dab079bed0bf267af3'
  }
};

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
