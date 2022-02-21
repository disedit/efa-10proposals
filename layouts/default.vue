<template>
  <div>
    <UiNav />
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',

  head () {
    return this.$nuxtI18nHead()
  }
}
</script>
