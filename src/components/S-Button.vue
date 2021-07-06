<template>
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
      {{ label }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'SButton',
  props: {
    label: String,
  },
}
</script>

<style scoped>
@import '../assets/css/styles-1.css';
</style>
