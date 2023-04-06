import { createApp } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import VueTailwindDatepicker from 'vue-tailwind-datepicker'
import { ProCalendar } from '@lbgm/pro-calendar-vue'

import './style.css'
import router from './router'

import App from './App.vue'

createApp(App)
  .use(VueApexCharts)
  .use(VueTailwindDatepicker)
  .use(ProCalendar)
  .use(router)
  .mount('#app')
