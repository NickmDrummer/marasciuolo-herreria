<template>
  <mdb-card id="secc1" class="card-image backgSecc1 ">
    <div class="rgba-white-light text-center  py-3 px-4">
      <div
        v-animateOnScroll="{ animation: 'fadeInLeft', delay: 0 }"
        class="py-5 "
      >
        <h2 class="titleSec1 h1 my-4 py-2">
          Capacidad y Experiencia
        </h2>
        <h3 class="textSec1 mb-4 pb-2 px-md-5 mx-md-5">
          Contamos con los conocimientos necesarios para realizar lo que el
          cliente requiera. Brindamos el asesoramiento técnico para llevar a
          cabo su proyecto de principio a fin. Usted tiene la idea, pero nuestra
          fortaleza es mejorarla.
        </h3>
      </div>
    </div>
    <div class="btnScrollSecc1">
      <a href="#secc2"
        ><mdb-icon style="color:black;" icon="angle-double-down"
      /></a>
    </div>
  </mdb-card>
</template>

<script>
import { mdbCard, animateOnScroll, mdbIcon } from "mdbvue";
export default {
  name: "Seccion1",
  components: {
    mdbCard,
    mdbIcon,
  },
  directives: {
    animateOnScroll,
  },
};
</script>

<style>
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575px) {
  .titleSec1 {
    font-size: 35px !important;
  }

  .textSec1 {
    font-size: 20px;
  }
  .btnScrollSecc1 {
    text-align: center;
    padding-bottom: 50px;
  }
}
/* END of Extra small devices (portrait phones, less than 576px) */
#secc1 {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  border-radius: 0;
}
.backgSecc1 {
  background-image: url("../assets/pax503.jpg") !important;
  color: black !important;
  height: 100%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.titleSec1 {
  margin-bottom: 60px !important;
  font-size: 45px;
  /* text-shadow: 0px 0px 15px white; */
}
.textSec1 {
  font-weight: 600;
}
.btnScrollSecc1 {
  text-align: center;
  font-size: 40px;
}
</style>
