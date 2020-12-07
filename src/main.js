import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/lib/css/mdb.min.css";
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Seccion1 from "./components/Seccion1";
import Seccion2 from "./components/Seccion2";
import Carousel from "./components/Carousel";
import Social from "./components/Social";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  components: {
    NavBar,
    Intro,
    Seccion1,
    Seccion2,
    Carousel,
    Social,
    Footer,
  },
  render: (h) => h(App),
}).$mount("#app");
