<template>
  <div class="w-full flex flex-wrap justify-center">
    <button @click="$emit('custom-click')" class="login-form-btn">
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
@import '../../assets/css/login.css';
</style>
