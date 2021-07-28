<template>
  <li :class="['nav-item', dataObject.class]">
    <a :href="dataObject.href" class="nav-link">
      <i :class="['nav-link-icon fa', dataObject.icon]"> </i>
      {{ dataObject.title }}
    </a>
  </li>
</template>

<script>
export default {
  props: {
    dataObject: {
      type: Object,
      default: () => {
        return {
          class: '',
          icon: '',
          title: '',
          href: 'javascript:void(0);',
        }
      },
      required: true,
    },
    // classObject: {
    //   type: String,
    //   default: '',
    // },
    // title: {
    //   type: String,
    //   default: '',
    // },
  },
}
</script>
