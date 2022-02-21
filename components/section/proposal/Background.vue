<template>
  <div
    class="absolute top-0 left-0 right-0 bottom-0 z-0 bg-purple bg-blend-lighten bg-cover bg-center opacity-50"
    :style="{
      backgroundImage: `url(${image})`
    }">
  </div>
</template>

<script>
  export default {
    props: {
      image: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>