import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { MonthTogglePicker } from 'vue-month-toggle-component'
import '../node_modules/vue-month-toggle-component/dist/style.css';
import VueSelect from 'vue-select'
import "vue-select/dist/vue-select.css"



createApp(App)
    .component("v-select", VueSelect)
    .component("MonthTogglePicker", MonthTogglePicker)
    .mount('#app')
