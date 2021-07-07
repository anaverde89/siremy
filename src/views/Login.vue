<template>
  <main>
    <div class="w-full my-0 mx-auto">
      <div
        class="
          container-login
          w-full
          min-h-screen
          flex flex-wrap
          justify-center
          items-center
        "
      >
        <div
          class="
            background-white
            w-full
            overflow-hidden
            flex flex-wrap
            items-stretch
            flex-row-reverse
          "
        >
          <form
            @submit.prevent="onSubmit"
            class="login-form min-h-screen block"
          >
            <span
              class="
                login-form-title
                w-full
                block
                font-poppins-reg
                leading-1.2
                text-center
              "
              >SIREMY</span
            >
            <s-input label="Email" v-model="email" type="text" />
            <s-input label="Contraseña" v-model="password" type="password" />
            <div
              class="flex justify-between items-center w-full"
              style="padding-top: 3px; padding-bottom: 32px"
            >
              <div>
                <a href="#" class="txt1 font-poppins-reg"
                  >¿Olvidaste tu contraseña?</a
                >
              </div>
            </div>
            <s-button @custom-clic="onSubmit" label="Iniciar Sesión" />
          </form>
          <div
            class="login-more bg-no-repeat bg-cover bg-center relative"
          ></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import SInput from '@/components/S-Input.vue'
import SButton from '@/components/S-Button.vue'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      // reqEmail: false,
      // reqPassword: false,
    }
  },
  components: {
    SInput,
    SButton,
  },
  methods: {
    validEmail(email) {
      let re =
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/

      return re.test(email)
    },
    onSubmit() {
      if (!this.email || !this.password) {
        alert('Los campos Email y Password son requeridos')
        return
      }
      let validEmail = this.validEmail(this.email)
      if (!validEmail) {
        alert('Debe ingresar un correo electrónico valido')
        return
      }
      let user = {
        email: this.email,
        validEmail: validEmail,
        pwd: this.password,
      }
      this.email = ''
      this.password = ''
      console.log(user)
    },
  },
}
</script>

<style scope>
@import '../assets/css/styles-1.css';

.alert {
  background-color: #fff;
  border: 1px solid #c80000;
}
</style>
