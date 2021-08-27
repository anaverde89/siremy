<template>
  <main>
    <div class="w-full my-0 mx-auto">
      <div class="container-login">
        <div class="background-white">
          <form @submit.prevent="onSubmit" class="login-form">
            <span class="login-form-title">SIREMY</span>
            <s-input
              label="Email"
              v-model="email"
              type="text"
              :error="reqEmail"
            />
            <div :class="{ 'mt-3': !reqEmail }">
              <p v-if="reqEmail" class="error-txt">{{ msgReqEmail }}</p>
            </div>
            <s-input
              label="Contraseña"
              v-model="password"
              type="password"
              :error="reqPassword"
            />
            <div :class="{ 'mt-3': !reqPassword }">
              <p v-if="reqPassword" class="error-txt">{{ msgReqPassword }}</p>
            </div>
            <div
              class="flex justify-between items-center w-full"
              style="padding-top: 3px; padding-bottom: 32px"
            >
              <div>
                <a href="#" class="txt1">¿Olvidaste tu contraseña?</a>
              </div>
            </div>
            <s-button @custom-clic="onSubmit" label="Iniciar Sesión" />
          </form>
          <div class="login-more"></div>
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
      reqEmail: false,
      reqPassword: false,
      msgReqEmail: '',
      msgReqPassword: '',
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
        if (!this.email) {
          this.msgReqEmail = 'Campo requerido'
          this.reqEmail = true
        }
        if (!this.password) {
          this.msgReqPassword = 'Campo requerido'
          this.reqPassword = true
        }
        return
      }
      let validEmail = this.validEmail(this.email)
      if (!validEmail) {
        this.msgReqEmail = 'Correo inválido'
        this.reqEmail = true

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

      api
        .sendUserData()
        .then((resp) => {
          if (
            resp.data[0].email === this.email &&
            resp.data[0].password === this.password
          ) {
            this.$router.replace({
              name: 'Dashboard',
              params: { id: resp.data[0].id },
            })
          } else {
            if (resp.data[0].email !== this.email) {
              this.msgReqEmail = 'Correo incorrecto'
              this.reqEmail = true
            }
            if (resp.data[0].password !== this.password) {
              this.msgReqPassword = 'Contraseña incorrecta'
              this.reqPassword = true
            }
          }
        })
        .catch((error) => {
          swal(error.message, 'Intente más tarde', 'error')
        })
    },
  },
  watch: {
    email: {
      handler(val) {
        val
        this.reqEmail = false
        this.reqPassword = false
      },
      deep: true,
    },
    password: {
      handler(val) {
        val
        this.reqPassword = false
      },
      deep: true,
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
