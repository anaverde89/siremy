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
import SInput from '@/components/login/S-Input.vue'
import SButton from '@/components/login/S-Button.vue'
import swal from 'sweetalert'
import api from '@/api'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      result: { response: '', info: '' },
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
      /*eslint-disable */
      let re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
      /*eslint-enable */
      return re.test(email)
    },
    // async onSubmit() {
    onSubmit() {
      if (!this.email || !this.password) {
        //alert('Los campos Email y Password son requeridos')
        swal('', 'Los campos Email y Password son requeridos', 'error', {
          className: ['swal-text', 'swal-button'],
        })
        return
      }
      let validEmail = this.validEmail(this.email)
      if (!validEmail) {
        //alert('Debe ingresar un correo electrónico valido')
        swal({
          title: '',
          text: 'Debe ingresar un correo electrónico válido',
          icon: 'error',
          className: ['swal-text', 'swal-button'],
        })
        return
      }
      // let user = {
      //   email: this.email,
      //   validEmail: validEmail,
      //   pwd: this.password,
      // }
      // this.email = ''
      // this.password = ''

      // await api
      //   .sendUserData(user)
      //   .then((resp) => {
      //     this.result = { ...resp }
      //   })
      //   .catch((err) => {
      //     err
      //   })

      // if (this.result.response === 'ok') {
      //   if (this.result.info) {
      //     swal('', 'Sesión iniciada', 'success')
      //     this.$router.replace('dashboard')
      //     //window.open(this.$router.resolve('dashboard').href)
      //   } else {
      //     swal('', 'Usuario y/o contaseña incorrecta', 'error')
      //   }
      // } else if (this.result.response === 'error') {
      //   swal(this.result.info, 'Intente más tarde', 'error')
      // }
      api
        .sendUserData()
        .then((resp) => {
          if (
            resp.data[0].email === this.email &&
            resp.data[0].password === this.password
          ) {
            // swal('', 'Sesión iniciada', 'success')
            this.$router.replace({
              name: 'Dashboard',
              params: { id: resp.data[0].id },
            })
          } else {
            swal('', 'Usuario y/o contaseña incorrecta', 'error')
          }
        })
        .catch((error) => {
          swal(error.message, 'Intente más tarde', 'error')
        })
    },
  },
}
</script>

<style scope>
@import '../assets/css/login.css';
.swal-button {
  font-family: Poppins-Black, sans-serif;
  font-size: 18px;
}
.swal-text {
  font-family: Poppins-Black, sans-serif;
  font-size: 18px;
  color: #333333;
}
</style>
