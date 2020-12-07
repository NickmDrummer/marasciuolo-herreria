<template>
  <mdb-container id="intro">
    <mdb-card class="card-image content  z-depth-0">
      <div
        class="text-white  
      px-4 text-center"
      >
        <div class="py-4 text-center">
          <img
            class="animated fadeInRight logoIntro"
            src="../assets/logoNavBar.svg"
            alt=""
          />
          <!-- <h1 class="card-title titleIntro h1 my-4 animated fadeInDown ">
            Quiénes Somos?
          </h1> -->
          <h3 class="textIntro  mb-4  pb-2 animated fadeInLeft .z-depth-0">
            Somos una empresa familiar que se especializa en hacer trabajos de
            acero inoxidable, carpintería metálica tradicional y estructuras
            pesadas. Nos dedicamos totalmente a la excelencia de nuestros
            productos y a generar confianza en nuestros clientes.
          </h3>
        </div>
      </div>
      <div class="btnScrollIntro">
        <a href="#secc1"><mdb-icon icon="angle-double-down"/></a>
      </div>
    </mdb-card>
  </mdb-container>
</template>

<script>
import { mdbCard, animateOnScroll, mdbContainer, mdbIcon } from "mdbvue";
export default {
  name: "Intro",
  components: {
    mdbCard,
    mdbContainer,
    mdbIcon,
  },
  directives: {
    animateOnScroll,
  },
};
</script>

<style>
#intro {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575px) {
  #intro {
    padding: 30px;
  }

  .textIntro {
    font-size: 20px;
  }
  .logoIntro {
    width: 100%;
    height: 30px;
    margin-bottom: 20px;
  }
  .btnScrollIntro {
    text-align: center;
    padding-bottom: 50px;
  }
}

.card-image {
  background-color: transparent;
}

.logoIntro {
  height: 75px;
  margin-bottom: 40px;
}

.btnScrollIntro {
  text-align: center;
  font-size: 40px;
}
</style>
