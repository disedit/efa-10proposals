<template>
  <div>
    <SectionProposal :proposal="proposal" />
  </div>
</template>

<script>
  export default {
    async asyncData ({ params: { number }, i18n: { locale }, $content }) {
      const proposal = await $content(locale + '/' + number).fetch()

      return {
        proposal
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>