import Vue from 'vue'
import App from './App.vue'

window.$ = window.jQuery = require('jquery');
require('jquery-ui/ui/widgets/datepicker.js')
require('jquery-ui/ui/widgets/slider.js')
require('jquery-ui-timepicker-addon')
import 'jquery-ui/themes/base/datepicker.css'
import 'jquery-ui/themes/base/slider.css'
import 'jquery-ui/themes/base/theme.css'
import 'jquery-ui-timepicker-addon/dist/jquery-ui-timepicker-addon.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
