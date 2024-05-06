<template>
  <li class="space-y-2">
    <div class="flex items-center space-x-2">
      <WaveIcon  name="tick" :color="color" />
      <span>{{ title }}</span>
    </div>
    <slot></slot>
  </li>
</template>
<script>
export default {

  props: {
    title: {
      type: String,
      default: '',
    },  color: {
      type: String,
      default: 'currentColor',
    },
  },
}
</script>
