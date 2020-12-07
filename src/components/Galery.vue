<template>
  <mdb-container>
    <h1 class="h1 titleGalery text-center white-text animated fadeInRight">
      Algunos de Nuestros Trabajos
    </h1>
    <!-- Grid row -->
    <mdb-row>
      <!-- Grid column -->
      <mdb-col col="sm" class="mb-3">
        <div class="view zoom overlay rounded-lg ">
          <img
            src="../assets/hogar_portones.jpg"
            class="hoverable img-thumbnail img-fluid z-depth-5"
            alt="Responsive image"
          />
          <div
            class="mask flex-center waves-effect waves-light rgba-black-light"
          >
            <h5 class="white-text text-center">
              Porton realizado con chapa con detalles en acero inoxidable.
            </h5>
          </div>
        </div>
      </mdb-col>
      <!-- Grid column -->

      <!-- Grid column -->
      <mdb-col col="sm" class="mb-3">
        <div class="view zoom overlay rounded-lg z-depth-5">
          <img
            src="../assets/hogar_portones.jpg"
            class="img-thumbnail img-fluid z-depth-1"
            alt="Responsive image"
          />
          <div
            class="mask flex-center waves-effect waves-light rgba-black-light"
          >
            <h5 class="white-text text-center">
              Porton realizado con chapa con detalles en acero inoxidable.
            </h5>
          </div>
        </div>
      </mdb-col>
      <!-- Grid column -->

      <!-- Grid column -->
      <mdb-col col="sm" class="mb-3">
        <div class="view zoom overlay rounded-lg z-depth-5">
          <img
            src="../assets/hogar_portones.jpg"
            class="img-thumbnail img-fluid z-depth-1"
            alt="Responsive image"
          />
          <div
            class="mask flex-center waves-effect waves-light rgba-black-light"
          >
            <h5 class="white-text text-center">
              Porton realizado con chapa con detalles en acero inoxidable.
            </h5>
          </div>
        </div>
      </mdb-col>
      <!-- Grid column -->
    </mdb-row>

    <mdb-row>
      <!-- Grid column -->
      <mdb-col col="sm" class="mb-3">
        <div class="view zoom overlay rounded-lg z-depth-5">
          <img
            src="../assets/hogar_portones.jpg"
            class="img-fluid z-depth-5 img-thumbnail"
            alt="Responsive image"
          />
          <div
            class="mask flex-center waves-effect waves-light rgba-black-light"
          >
            <h5 class="white-text text-center">
              Porton realizado con chapa con detalles en acero inoxidable.
            </h5>
          </div>
        </div>
      </mdb-col>
      <!-- Grid column -->

      <!-- Grid column -->
      <mdb-col col="sm" class="mb-3">
        <div class="view zoom overlay rounded-lg z-depth-5">
          <img
            src="../assets/hogar_portones.jpg"
            class="img-thumbnail img-fluid z-depth-1"
            alt="Responsive image"
          />
          <div
            class="mask flex-center waves-effect waves-light rgba-black-light"
          >
            <h5 class="white-text text-center">
              Porton realizado con chapa con detalles en acero inoxidable.
            </h5>
          </div>
        </div>
      </mdb-col>
      <!-- Grid column -->

      <!-- Grid column -->
      <mdb-col col="sm" class="mb-3">
        <div class="view zoom overlay rounded-lg z-depth-5">
          <img
            src="../assets/hogar_portones.jpg"
            class="img-thumbnail img-fluid z-depth-1"
            alt="Responsive image"
          />
          <div
            class="mask flex-center waves-effect waves-light rgba-black-light"
          >
            <h5 class="white-text text-center">
              Porton realizado con chapa con detalles en acero inoxidable.
            </h5>
          </div>
        </div>
      </mdb-col>
      <!-- Grid column -->
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbCol, mdbRow, mdbContainer, animateOnScroll } from "mdbvue";
export default {
  name: "Galery",
  components: {
    mdbCol,
    mdbContainer,
    mdbRow,
  },
  directives: {
    animateOnScroll,
  },
};
</script>

<style>
.titleGalery {
  margin-bottom: 70px !important;

  margin-top: 70px !important;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575px) {
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767px) {
  h5 {
    font-size: 13px;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991px) {
  h5 {
    font-size: 14px;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199px) {
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}
</style>
