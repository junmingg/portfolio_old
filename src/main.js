import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Vue from 'vue'
// import BootstrapVue from "bootstrap-vue"
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap-vue/dist/bootstrap-vue.css"

// Vue.config.productionTip = false;
// Vue.use(BootstrapVue);

// let app;

// if (!app) {
//   app = new Vue({
//     router,
//     store,
//     render: (h) => h(App),
//   }).$mount('#app');
// }

// Vue.use(BootstrapVue)

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

createApp(App).use(store).use(router).mount('#app')
