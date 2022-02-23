<template>
  <div
    class="
      relative bg-purple bg-cover bg-center opacity-75 z-0
      h-96 -mb-36 -mt-28
      md:h-auto md:absolute md:top-0 md:left-0 md:right-0 md:bottom-0 md:mb-0 md:mt-0
    "
    :style="{
      backgroundImage: `url(${image})`
    }">
      <div class="absolute inset-0 bg-purple mix-blend-lighten opacity-75"></div>
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
