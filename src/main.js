import { createApp } from 'vue'
import '@/assets/base.scss'

import App from '@/App.vue'
import router from '@/router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css';

import '@/assets/base.scss'
import '@/assets/cust-elementplus.scss'
import '@/assets/icon/iconfont.css'



const app = createApp(App);
app.use(ElementPlus);

app.use(router);
app.mount('#app');