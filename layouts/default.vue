<template>
  <div>
    <UiNav />
    <Nuxt />
    <UiFooter />
  </div>
</template>

<script>
export default {
  head () {
    return this.$nuxtI18nHead()
  }
}
</script>
