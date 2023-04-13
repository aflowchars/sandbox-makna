import { createApp } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

import './style.css'
import router from './router'

import App from './App.vue'

import VueTailwindDatepicker from 'vue-tailwind-datepicker'

createApp(App)
  .use(VueTailwindDatepicker)
  .use(VueApexCharts)
  .use(router)
  .mount('#app')
