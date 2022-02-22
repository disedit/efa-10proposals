<template>
  <div class="bg-purple">
    <UiSkipToContent />
    <UiNav />
    <Nuxt />
    <UiFooter />
  </div>
</template>

<script>
import Rellax from 'rellax'

export default {
  head () {
    return this.$nuxtI18nHead()
  },

  mounted () {
    // eslint-disable-next-line
    const rellax = new Rellax('.rellax')
  }
}
</script>
