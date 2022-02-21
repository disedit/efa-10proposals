<template>
  <div class="bg-purple">
    <UiSkipToContent />
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
