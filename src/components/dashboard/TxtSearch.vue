<template>
  <div :class="['search-wrapper', { active: isActive }]">
    <div class="input-holder">
      <input
        type="text"
        class="search-input"
        :placeholder="phValue"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <button class="search-icon" @click="$emit('clickSearch')">
        <span></span>
      </button>
    </div>
    <button class="close" @click="$emit('closeSearch')"></button>
  </div>
</template>

<script>
export default {
  name: 'TxtSearch',
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    phValue: {
      type: String,
      default: '',
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
