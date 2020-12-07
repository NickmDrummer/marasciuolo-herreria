<template>
  <!-- Footer -->
  <mdb-footer class="pt-4 mt-4 footer ">
    <mdb-container fluid class=" ">
      <mdb-row class="justify-content-center">
        <mdb-col md="auto" col="auto" class="">
          <h2 class="title text-center">Contacto</h2>
          <ul class="itemsfooter">
            <li class="list-unstyled ">
              <mdb-icon class="iconFooter" icon="envelope" size="1x" /> E-mail:
              marasciuoloherreria@gmail.com
            </li>

            <li class="list-unstyled ">
              <mdb-icon
                class="iconFooter text-center"
                icon="clock"
                size="1x"
              />Horario de Atención: Lun a Vie de 8 a 17 hs y Sáb de 8 a 13 hs.
            </li>
          </ul>
        </mdb-col>
      </mdb-row>
      <mdb-row class="justify-content-center">
        <mdb-col md="auto" col="auto">
          <img
            class="logoFooter"
            src="../assets/logoNavBar.svg"
            alt=""
            height="30px"
          />
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol, mdbIcon } from "mdbvue";
export default {
  name: "Footer",
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
  },
};
</script>

<style>
.footer {
  position: relative;
  background: rgb(5, 48, 141);
  background: linear-gradient(
    220deg,
    rgba(5, 48, 141, 1) 0%,
    rgba(1, 9, 28, 1) 52%
  );
  margin-top: 0 !important;
}
ul.itemsfooter {
  font-size: 13px;
}
@media (max-width: 575px) {
  ul.itemsfooter {
    font-size: 12px;
  }
}
.iconFooter {
  margin-right: 10px;
}
.list-unstyled {
  margin-top: 15px;
}
.logoFooter {
  margin-top: 30px;
  margin-bottom: 50px !important;
}
.title {
  margin-top: 50px;
}
</style>
