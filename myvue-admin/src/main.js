import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//引入样式区
import "./assets/css/icon.css"// 修改阿里巴巴图标
import "./assets/css/main.css"// 主要样式
import "./assets/font/iconfont.css"// 阿里巴巴图标
import "./assets/css/reset.css"
//引入ElemenUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
