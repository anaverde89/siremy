<template>
  <div :class="['wrap-input', { error: error }]">
    <input
      :class="{ 'has-val': modelValue }"
      class="input"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    />
    <span class="focus-input"></span>
    <span class="label-input">{{ label }}</span>
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
    error: {
      type: Boolean,
      default: false,
    },
  },
  // watch: {
  //   modelValue: {
  //     handler(val) {
  //       console.log('watch', val)
  //     },
  //     deep: true,
  //   },
  // },
}
</script>

<style scoped>
@import '../../assets/css/login.css';
</style>
