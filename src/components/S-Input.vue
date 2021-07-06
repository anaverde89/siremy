<template>
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
    <slot></slot>
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
      >{{ label }}</span
    >
  </div>
</template>

<script>
export default {
  name: 'SInput',
  props: {
    label: String,
  },
}
</script>

<style scoped>
@import '../assets/css/styles-1.css';
</style>
