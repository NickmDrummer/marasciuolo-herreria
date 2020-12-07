<template>
  <!-- Material form contact -->
  <mdb-container>
    <mdbRow class="justify-content-md-center rowForm">
      <mdbCol lg="5" class="form ">
        <h2 class=" text-center titleForm">
          Contáctenos para pedir un presupuesto.
        </h2>

        <form
          class="gform"
          method="post"
          action="https://script.google.com/macros/s/AKfycby2XJO9ZLs9xkJgBvkMIeBHvttzfnp9MEh3748F/exec"
        >
          <div class="form-elements">
            <div class="white-text">
              <mdb-input
                id="name"
                label="Nombre y Apellido"
                icon="user"
                name="name"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <mdb-input
                id="mail"
                label="E-mail"
                name="mail"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <mdb-input
                id="telefono"
                name="telefono"
                label="Teléfono/Celular"
                icon="phone"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <mdb-input
                type="textarea"
                name="message"
                id="message"
                :rows="2"
                label="Mensaje"
                icon="pen"
              />
            </div>
            <fieldset class="pure-group honeypot-field">
              <label for="honeypot"
                >To help avoid spam, utilize a Honeypot technique with a hidden
                text field; must be empty to submit the form! Otherwise, we
                assume the user is a spam bot.</label
              >
              <input id="honeypot" type="text" name="honeypot" value="" />
            </fieldset>
            <div class="text-center">
              <button id="enviar" outline="white">
                &nbsp;Enviar
              </button>
            </div>
          </div>

          <div style="display:none" class="thankyou_message">
            <h2><em>Gracias</em> por contactarnos! Te responderemos pronto!</h2>
          </div>
        </form>
      </mdbCol>
    </mdbRow>
  </mdb-container>

  <!-- Material form contact -->
</template>
<script src="../form-submission-handler.js"></script>
<script>
import { mdbInput, mdbContainer, mdbRow, mdbCol } from "mdbvue";
export default {
  name: "Form",
  components: {
    mdbInput,
    // mdbBtn,

    mdbContainer,
    mdbRow,
    mdbCol,
  },
};

//variables
</script>

<style>
.titleForm {
  color: white;
  margin-top: 40px;
}
.md-form label {
  color: white !important;
}
.form-control {
  color: white;
}

.form-control:focus {
  color: white;
}
.honeypot-field {
  display: none;
}
#enviar {
  background-color: transparent;
  color: white;
  border: 1px solid white;
  padding: 10px 16px;
}
</style>
