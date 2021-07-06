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
          <form class="login-form min-h-screen block">
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
            <div
              class="
                wrap-input
                flex flex-wrap
                items-end
                w-full
                relative
                border border-solid
              "
            >
              <input
                type="text"
                :class="{ 'has-val': email }"
                class="input block w-full font-montserrat-reg leading-1.2"
                name="email"
                v-model="email"
              />
              <span
                class="
                  focus-input
                  absolute
                  block
                  -top-px
                  -left-px
                  pointer-events-none
                  border border-solid
                  opacity-0
                  invisible
                "
              ></span>
              <span
                class="
                  label-input
                  font-montserrat-reg
                  leading-1.2
                  block
                  absolute
                  pointer-events-none
                  w-full
                  left-0
                  text-left
                "
                >Email</span
              >
            </div>
            <div
              class="
                wrap-input
                flex flex-wrap
                items-end
                w-full
                relative
                border border-solid
              "
            >
              <input
                type="password"
                :class="{ 'has-val': password }"
                class="
                  input
                  block
                  w-full
                  h-full
                  bg-transparent
                  font-montserrat-reg
                  leading-1.2
                "
                name="password"
                v-model="password"
              />
              <span
                class="
                  focus-input
                  absolute
                  block
                  -top-px
                  -left-px
                  pointer-events-none
                  border border-solid
                  opacity-0
                  invisible
                "
              ></span>
              <span
                class="
                  label-input
                  font-montserrat-reg
                  leading-1.2
                  block
                  absolute
                  pointer-events-none
                  w-full
                  left-0
                  text-left
                "
                >Password</span
              >
            </div>
            <div
              class="flex justify-between items-center w-full"
              style="padding-top: 3px; padding-bottom: 32px"
            >
              <!--<div>
                <input
                  type="checkbox"
                  name="rememberme"
                  id="chkb1"
                  class="input-checkbox"
                />
                <label
                  for="chkb1"
                  class="
                    label-checkbox
                    font-poppins-reg
                    block
                    relative
                    cursor-pointer
                  "
                  >Remember me</label
                >
              </div> -->
              <div>
                <a href="#" class="txt1 font-poppins-reg"
                  >¿Olvidaste tu contraseña?</a
                >
              </div>
            </div>
            <div class="w-full flex flex-wrap justify-center">
              <button
                class="
                  login-form-btn
                  flex
                  justify-center
                  items-center
                  w-full
                  font-montserrat-bold
                  text-gray-800
                  hover:text-white
                  leading-1.2
                  uppercase
                "
              >
                Iniciar sesión
              </button>
            </div>
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
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    }
  },
}
</script>

<style scope>
main {
  background-color: #666666;
}

a {
  font-size: 14px;
  line-height: 1.7;
  color: #666666;
  margin: 0px;
  transition: all 0.4s;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
}

a:focus {
  outline: none !important;
}

a:hover {
  text-decoration: none;
  color: #f0a500;
}

input {
  outline: none;
  border: none;
}
input::placeholder {
  color: #999999;
}

input:focus {
  border-color: transparent !important;
}
input:focus::placeholder {
  color: transparent;
}

label {
  display: block;
  margin: 0;
}

button {
  outline: none !important;
  border: none;
  background: transparent;
}

button:hover {
  cursor: pointer;
}

.container-login {
  background: #f2f2f2;
}

.background-white {
  background: #fff;
}

.login-form {
  width: 560px;
  background-color: #f7f7f7;
  padding: 173px 55px 55px 55px;
}

.login-form-title {
  font-size: 30px;
  color: #333333;
  padding-bottom: 43px;
}

.wrap-input {
  height: 80px;
  border: #e6e6e6;
  border-radius: 10px;
  margin-bottom: 10px;
}

.input {
  font-size: 18px;
  background: transparent;
  color: #555555;
  padding: 0 26px;
}

input.input {
  height: 100%;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}
.focus-input {
  border: #f0a500;
  border-radius: 10px;
  width: calc(100% + 2px);
  height: calc(100% + 2px);

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;

  -webkit-transform: scaleX(1.1) scaleY(1.3);
  -moz-transform: scaleX(1.1) scaleY(1.3);
  -ms-transform: scaleX(1.1) scaleY(1.3);
  -o-transform: scaleX(1.1) scaleY(1.3);
  transform: scaleX(1.1) scaleY(1.3);
}

.label-input {
  font-size: 18px;
  color: #999999;

  padding-left: 24px;
  top: 30px;

  /* -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s; */
  transition: all 0.4s;
}

.label-checkbox {
  font-size: 13px;
  color: #999999;
  line-height: 1.4;
  padding-left: 26px;
}

.label-checkbox::before {
  content: '\f00c';
  font-size: 13px;
  color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 2px;
  background: #fff;
  border: 1px solid #f0a500;
  left: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
}

.input-checkbox {
  display: none;
}

.input-checkbox:checked + .label-checkbox::before {
  color: #f0a500;
}

.input:focus + .focus-input {
  visibility: visible;
  opacity: 1;

  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
}

.input:focus {
  height: 48px;
}

.input:focus + .focus-input + .label-input {
  top: 14px;
  font-size: 13px;
}

.has-val {
  height: 48px !important;
}
.has-val + .focus-input + .label-input {
  top: 14px;
  font-size: 13px;
}
.txt1 {
  font-size: 13px;
  line-height: 1.4;
  color: #555555;
}

.login-form-btn {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  padding: 0 20px;
  height: 50px;
  border-radius: 10px;
  background: #f0a500;

  font-size: 12px;
  letter-spacing: 1px;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.login-form-btn:hover {
  background: #333333;
}

.login-more {
  background-image: url('../assets/images/bg-01.png');
  width: calc(100% - 560px);
  z-index: 1;
}

.login-more::before {
  content: '';
  display: block;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.1);
}
</style>
