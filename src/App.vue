<template>
  <div>
    <video id="myVideo" playsinline muted poster="./assets/hero-1.png">
      <source :src="require('@/assets/blue.mp4')" type="video/mp4" />
    </video>
    <main>
      <MarasciuoloHerrería />
      <NavBar />
      <Seccion1 />
      <Seccion2 />
      <Fotos />
      <Social />
      <Footer />
    </main>
  </div>
</template>
<script>
// import Video from "./components/Video.vue";
import NavBar from "./components/NavBar.vue";
import MarasciuoloHerrería from "./components/MarasciuoloHerrería.vue";
import Fotos from "./components/Fotos.vue";
import Footer from "./components/Footer.vue";
import Seccion1 from "./components/Seccion1.vue";
import Seccion2 from "./components/Seccion2.vue";
import Social from "./components/Social.vue";

export default {
  name: "App",
  components: {
    NavBar,
    MarasciuoloHerrería,
    Seccion1,
    Seccion2,
    Fotos,
    Social,
    Footer,
  },
};
</script>

<style>
body,
html {
  font-family: "Spartan", sans-serif;
  /* font-family: "Space Mono", sans-serif; */

  scroll-behavior: smooth;
}

/* Style the video: 100% width and height to cover the entire window */
#myVideo {
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  z-index: -100;

  background-size: cover;
}
</style>
