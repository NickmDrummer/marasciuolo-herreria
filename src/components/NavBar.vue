<template>
  <mdb-navbar class="sticky-top" transparent scrolling>
    <mdb-container>
      <mdb-navbar-nav left>
        <mdb-navbar-brand class="brand" href="https://mdbootstrap.com/">
          <img src="../assets/logoNavBar.svg" height="30" alt="" />
        </mdb-navbar-brand>
      </mdb-navbar-nav>

      <mdb-navbar-nav right>
        <mdb-nav-item
          href="https://www.facebook.com/marasciuoloherreria"
          waves-fixed
          target="_blank"
          ><mdb-icon fab icon="facebook-f" class="icons d-inline"
        /></mdb-nav-item>
        <mdb-nav-item href="https://wa.me/message/FV6QYBD33XB5H1" waves-fixed
          ><mdb-icon fab icon="whatsapp" class=" icons d-inline"
        /></mdb-nav-item>
        <mdb-nav-item
          href="https://www.instagram.com/marasciuoloherreria/"
          waves-fixed
          ><mdb-icon fab icon="instagram" class=" icons d-inline"
        /></mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-container>
  </mdb-navbar>
</template>

<script>
import {
  mdbNavbar,
  mdbNavbarNav,
  mdbIcon,
  mdbNavItem,
  mdbNavbarBrand,
  mdbContainer,
} from "mdbvue";
export default {
  name: "NavBar",
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbIcon,
    mdbNavItem,
    mdbContainer,
    mdbNavbarNav,
  },
};
</script>

<style>
.navbar {
  transition: background 0.5s ease-in-out, padding 0.5s ease-in-out;
}

.top-nav-collapse {
  background: rgb(5, 48, 141);
  background: linear-gradient(
    220deg,
    rgba(5, 48, 141, 1) 0%,
    rgba(1, 9, 28, 1) 52%
  );
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575px) {
  .navbar-nav {
    height: 30px;
  }
}
.icons {
  color: white;
  flex-direction: row;
}
.navbar-nav {
  display: flex;
  flex-direction: row;
  list-style: none;
  top: 0 !important;
}
.navbar-brand {
  color: white;
  font-size: 16px !important;
}
</style>
