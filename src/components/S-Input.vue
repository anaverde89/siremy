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
    <input
      :class="{ 'has-val': modelValue }"
      class="input block w-full font-montserrat-reg leading-1.2"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
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
      >{{ label }}</span
    >
  </div>
</template>

<script>
export default {
  name: 'SInput',
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
  },
}
</script>

<style scoped>
@import '../assets/css/styles-1.css';

.alert::before {
  background-color: #fff;
  border: 1px solid #c80000;
}
</style>
