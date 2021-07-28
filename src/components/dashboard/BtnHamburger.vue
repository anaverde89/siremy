<template>
  <div>
    <button
      type="button"
      :class="['hamburger', classObject]"
      :v-else="dataClass"
      @click="$emit('clickClose')"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'BtnHamburger',
  props: {
    classObject: {
      type: Array,
      default: () => [],
    },
    dataClass: {
      type: String,
      default: '',
    },
  },
}
</script>
