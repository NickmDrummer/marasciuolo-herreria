<template>
  <mdb-container fluid>
    <mdb-row class="socialRow morpheus-den-gradient ">
      <mdbCol>
        <div class="text-center">
          <h3 class="titleSocial text-white ">
            Uníte a nuestras redes sociales
          </h3>
          <div class="text-white iconos">
            <a
              target="_blank"
              href="https://www.facebook.com/marasciuoloherreria"
              ><mdb-icon size="2x" class=" m-3" fab icon="facebook-f"
            /></a>
            <a target="_blank" href="https://wa.me/message/FV6QYBD33XB5H1"
              ><mdb-icon size="2x" class=" m-3" fab icon="whatsapp"
            /></a>
            <a
              target="_blank"
              href="https://www.instagram.com/marasciuoloherreria/"
              ><mdb-icon size="2x" class=" m-3" fab icon="instagram"
            /></a>
          </div>
        </div>
      </mdbCol>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbRow, mdbContainer, mdbCol, mdbIcon } from "mdbvue";
export default {
  name: "Social",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
  },
};
</script>

<style>
.socialRow {
  margin-top: 30px;
}
.titleSocial {
  margin-top: 50px;
  margin-bottom: 50px;
}
.iconos {
  margin-bottom: 30px;
  margin-top: -40px;
}
@media (max-width: 575px) {
  .titleSocial {
    font-size: 22px;
  }
}
a {
  color: white !important;
}
</style>
