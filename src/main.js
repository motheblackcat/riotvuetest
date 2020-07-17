import Vue from "vue";
import App from "./App.vue";

import { createProvider } from "./vue-apollo";

Vue.use(require("vue-moment"));

Vue.config.productionTip = false;

new Vue({
  apolloProvider: createProvider(),
  render: (h) => h(App),
}).$mount("#app");
