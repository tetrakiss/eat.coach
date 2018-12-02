// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFirestore from 'vue-firestore'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/ru-RU'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faUsers, faSignOutAlt,  faMobileAlt, faEnvelopeOpen, faCalendar, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { auth } from '@/components/firebaseInit'

library.add(faUser, faUsers, faSignOutAlt, faMobileAlt, faEnvelopeOpen, faCalendar, faCalendarCheck)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VueFirestore)
Vue.use(ElementUI, { locale })
/* eslint-disable no-new */

let app;

auth.onAuthStateChanged(user => {
    if (!app) {
    app = new Vue({
      router,
    //  store,
      render: h => h(App)
    }).$mount("#app");
  }

});

/*
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
*/
