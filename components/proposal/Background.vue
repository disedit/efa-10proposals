<template>
  <div
    class="
      relative bg-purple bg-cover bg-center opacity-75 z-0
      h-96 -mb-36 -mt-24
      md:h-auto md:absolute md:inset-0 md:mb-6 md:mt-6 md:mx-9
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
