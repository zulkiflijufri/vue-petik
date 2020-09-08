import Vue from "vue";
import App from "./App.vue";

// import router
import router from "./router";

Vue.config.productionTip = false;

new Vue({
    // register router
    router,
    render: h => h(App),
}).$mount("#app");
