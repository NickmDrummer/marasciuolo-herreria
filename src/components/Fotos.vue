<template>
  <mdb-container id="Fotos">
    <mdb-row class="justify-content-md-center">
      <mdb-col lg="5"></mdb-col>
      <mdb-col md="auto" col="12">
        <h2 class="titleCarousel h1 text-white text-center">
          Galería
        </h2>
        <mdb-carousel
          class="carousel rounded-lg"
          :interval="6000"
          :items="items"
          controlls
        >
        </mdb-carousel>
      </mdb-col>
      <mdb-col lg="5"> </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbCarousel, mdbContainer, mdbRow, mdbCol } from "mdbvue";
export default {
  name: "Fotos",
  components: {
    mdbCarousel,
    mdbContainer,
    mdbRow,
    mdbCol,
  },
  data() {
    return {
      items: [
        {
          img: true,

          src: require("../assets/instagram/56756.png"),

          mask: "black-light",
        },
        {
          img: true,
          src: require("../assets/instagram/567567.png"),

          mask: "black-light",
        },
        {
          img: true,
          src: require("../assets/instagram/Dolfines Guaranie.png"),

          mask: "black-light",
        },
        {
          img: true,

          src: require("../assets/instagram/Dolfines Guaranie2.png"),

          mask: "black-light",
        },
        {
          img: true,
          src: require("../assets/instagram/puertahierro1.png"),

          mask: "black-light",
        },
        {
          img: true,
          src: require("../assets/instagram/puertahierro2.png"),

          mask: "black-light",
        },
        {
          img: true,
          src: require("../assets/instagram/puertaino1.png"),

          mask: "black-light",
        },
        {
          img: true,
          src: require("../assets/instagram/puertaino2.png"),

          mask: "black-light",
        },
        {
          img: true,
          src: require("../assets/instagram/puertaino3.png"),

          mask: "black-light",
        },
        {
          img: true,
          src: require("../assets/instagram/tapafrente.png"),

          mask: "black-light",
        },
        {
          img: true,
          src: require("../assets/instagram/tapaperfil.png"),

          mask: "black-light",
        },
      ],
    };
  },
};
</script>

<style>
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575px) {
  .lightwidget-widget {
    width: 100%;
    height: 100%;
  }

  .titleCarousel {
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 35px !important;
  }
  .h3-responsive {
    font-size: 14px !important;
  }
}
.titleCarousel {
  margin-top: 100px;
  margin-bottom: 70px;
  font-size: 45px;
  font-weight: 600;
}
.h3-responsive {
  text-shadow: 1px 1px 10px black;
}
.item {
  max-width: 700px !important;
  height: auto;
}
</style>
