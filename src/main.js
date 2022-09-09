import Vue from "vue";
import PageHome from "./pages/PageHome.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(PageHome),
}).$mount("#app");
