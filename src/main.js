//引入app
import { createApp } from 'vue'
import App from './App.vue'
//引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入SVG图标组件
import 'virtual:svg-icons-register';
//引入路由
import router from "./router/index.js";
//引入初始化样式文件
import '@/styles/common.scss'
import {createPinia} from "pinia";
//引入视图判定(懒加载)

//创建app
const app = createApp(App);
//创建pinia
const pinia = createPinia();
//注册ele图标
app.use(ElementPlus)
//注册路由
app.use(router)
//注册pinia
app.use(pinia)
//注册视图判定(懒加载)

//挂载
app.mount('#app');