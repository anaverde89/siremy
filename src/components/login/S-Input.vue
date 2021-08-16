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
@import '../../assets/css/login.css';

.alert-validate::before {
  position: absolute;
  z-index: 100;
  max-width: 70%;
  background-color: #fff;
  border: 1px solid #c80000;
  border-radius: 2px;
  padding: 4px 25px 4px 10px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 12px;
  pointer-events: none;

  font-family: Poppins-Regular;
  color: #c80000;
  font-size: 13px;
  line-height: 1.4;
  text-align: left;

  visibility: hidden;
  opacity: 0;

  -webkit-transition: opacity 0.4s;
  -o-transition: opacity 0.4s;
  -moz-transition: opacity 0.4s;
  transition: opacity 0.4s;
}

.alert-validate::after {
  font-family: Poppins-Regular;
  display: block;
  position: absolute;
  z-index: 110;
  color: #c80000;
  font-size: 16px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 18px;
}

.alert-validate:hover:before {
  visibility: visible;
  opacity: 1;
}
</style>
