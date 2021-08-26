<template>
  <base-layout :id="id"> </base-layout>
</template>

<script>
import BaseLayout from '@/layout/wrappers/baseLayout'
export default {
  components: {
    BaseLayout,
  },
  data() {
    return {
      id: this.$route.params.id,
    }
  },
}
</script>
