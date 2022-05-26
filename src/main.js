import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import BaseLayout from "@/components/layouts/BaseLayout"
import Panel from "@/components/Panel"
import BaseInput from "@/components/inputs/BaseInput"
import store from "./store"

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

Vue.component('base-layout', BaseLayout)
Vue.component('base-input', BaseInput)
Vue.component('panel', Panel)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
