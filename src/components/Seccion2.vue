<template>
  <mdb-card id="secc2" class="card-image backgSecc2 ">
    <div class="rgba-white-light text-center  py-3 px-4">
      <div
        v-animateOnScroll="{ animation: 'fadeInRight', delay: 0 }"
        class="py-5 "
      >
        <h2 class="titleSec2 h1 my-4 py-2">
          Especialización
        </h2>
        <h3 class="textSec2 mb-4 pb-2 px-md-5 mx-md-5">
          Carpintería metálica tradicional (puertas, ventanas, escaleras,
          barandas, etc.)
          <br />
          Herrería de obra a medida tanto en hierro como en acero inoxidable.
          <br />Estructuras pesadas hechas con perfilerías IPN, UPN, T, HE, etc.
          <br />Montaje en obra a pedido del cliente.
        </h3>
      </div>
    </div>
    <div class="btnScrollSecc2">
      <a href="#Fotos"
        ><mdb-icon style="color:black;" icon="angle-double-down"
      /></a>
    </div>
  </mdb-card>
</template>

<script>
import { mdbCard, animateOnScroll, mdbIcon } from "mdbvue";
export default {
  name: "Seccion2",
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
#secc2 {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575px) {
  .titleSec2 {
    font-size: 35px !important;
    font-weight: 600;
  }

  .textSec2 {
    font-size: 20px;
  }
  .btnScrollSecc2 {
    text-align: center;
    padding-bottom: 50px;
  }
}
/* END of Extra small devices (portrait phones, less than 576px) */

.card {
  border-radius: 0;
}
.backgSecc2 {
  background-image: url("../assets/2carousel.jpg") !important;
  color: black !important;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.titleSec2 {
  margin-bottom: 60px !important;
  font-size: 45px;
}
.btnScrollSecc2 {
  text-align: center;
  font-size: 40px;
}
.textSec2 {
  font-weight: 600;
}
.rgba-white-light {
  width: 100%;
}
</style>
